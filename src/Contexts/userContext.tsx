import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IRegisterUser {
  is_admin: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  condId: number;
}

export interface IloginUser {
  email: string;
  password: string;
}

interface IUser {
  is_admin: string;
  name: string;
  email: string;
  condId: number;
  id: number;
}

interface IuserContext {
  userRegister: (data: IRegisterUser) => Promise<void>;
  userLogin: (data: IloginUser) => Promise<void>;
  userLogout: () => void;
}

export const userContext = createContext({} as IuserContext);

export const userProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userRegister = async (data: IRegisterUser) => {
    try {
      const response = await api.post("/register", data);
      setUser(response.data.user);

      toast.success("Usuário criado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado ao cadastrar");
    }
  };

  const userLogin = async (data: IloginUser) => {
    try {
      const response = await api.post("/signin", data);
      setUser(response.data.user);
      localStorage.setItem("@Token", response.data.accessToken);
      localStorage.setItem("@user", response.data.user);

      toast.success("Login realizado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado ao logar");
    }
  };

  const autoLogin = () => {
    const token = localStorage.getItem("@Token");
    if (token) {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@Token");

    navigate("/");
  };

  return (
    <userContext.Provider value={{ userRegister, userLogin, userLogout }}>
      {children}
    </userContext.Provider>
  );
};
