import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { iCashs, iImprovement, iMessages } from "./interfacesResident";
import { ResidentContext } from "./residentContext";

export interface iContextProps {
  children: React.ReactNode;
}
interface ICondos {
  name: string;
  userId: number;
  id: number;
}
interface iHomeContext {
  messagesRegister: (data: iMessages) => Promise<void>;
  deleteMessagens: (id: number) => Promise<void>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  idCond: Id | null;
  setIdCond: React.Dispatch<React.SetStateAction<Id | null>>;
  residents: IResident[];
  setResidents: React.Dispatch<React.SetStateAction<IResident[] | []>>;
  readAllResident: (id: any) => Promise<void>;
  condo: ICondos[];
  setCondo: React.Dispatch<React.SetStateAction<ICondos[]>>;
  newCond: (data: ICondos) => Promise<void>;
  modalNewCond: boolean;
  setModalNewCond: React.Dispatch<React.SetStateAction<boolean>>;
  showImprovements: boolean;
  showMessages: boolean;
  showCondo: boolean;
  cashs: iCashs[] | [];
  readAllComents: (id: any) => Promise<void>;
  setShowImprovements: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMessages: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCondo: React.Dispatch<React.SetStateAction<boolean>>;
  showCreateCond: boolean;
  setShowCreateCond: React.Dispatch<React.SetStateAction<boolean>>;
  condID: number;
  setCondID: React.Dispatch<React.SetStateAction<number>>;
  getAllCondos: () => void;
  getResidents: () => void;
  readCash: () => void;
  readAllMessages: () => void;
  showCreateImp: boolean;
  setShowCreateImp: React.Dispatch<React.SetStateAction<boolean>>;
  newImp: (data: iImprovement) => Promise<void>;
}
interface Id {
  condId: string;
}
export interface IResident {
  email: string;
  password: string;
  is_admin: string;
  name: string;
  condId: number;
  id: number;
}

export const HomeContext = createContext({} as iHomeContext);

export function HomeProvider({ children }: iContextProps) {
  const {
    messages,
    setMessages,
    setComments,
    setCashs,
    userLogin,
    setImprovements,
    cashs,
  } = useContext(ResidentContext);
  const [modal, setModal] = useState(false);
  const [showImprovements, setShowImprovements] = useState(false);
  const [showMessages, setShowMessages] = useState(true);
  const [showCondo, setShowCondo] = useState(false);
  const [idCond, setIdCond] = useState<Id | null>(null);
  const [residents, setResidents] = useState<IResident[]>([]);
  const [condo, setCondo] = useState<ICondos[]>([]);
  const [maintenance, setMaintenance] = useState<iImprovement[]>([]);
  const [modalNewCond, setModalNewCond] = useState(false);
  const [showCreateCond, setShowCreateCond] = useState(false);
  const [condID, setCondID] = useState(0);
  const [showCreateImp, setShowCreateImp] = useState(false);


  const readCash = async () => {
    const token = localStorage.getItem("@Token");

    try {
      const response = await api.get(`/cashs?condId=${condID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCashs(response.data);
      console.log(cashs);
    } catch (error) {
      console.log(error);
    }
  };
  const readAllResident = async (id: number) => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get(`/users?condId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResidents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const readAllComents = async (id: number) => {
    console.log(id);
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get(`comments?messageId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const readAllMessages = async () => {
    const token = localStorage.getItem("@Token");

    try {
      const response = await api.get(`/messages`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages(response.data);
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  };
  const readImprovements = async () => {
    const idCond = userLogin.condId;
    try {
      const response = await api.get<iImprovement[]>(
        `/improvements?condId=${idCond}`
      );
      setImprovements(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllCondos = async () => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get("/conds", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCondo(response.data);
      console.log(condo);
    } catch (error) {
      toast.error("Algo deu errado ao listar condominios cadastrados");
    }
  };
  const getResidents = async () => {
    const token = localStorage.getItem("@Token");
    console.log(condID);
    try {
      const response = await api.get(`/users?condId=${condID}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResidents(response.data);
      console.log(residents);
    } catch (error) {
      console.log(error);
    }
  };
  const messagesRegister = async (data: iMessages) => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.post("/messages", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const newCond = async (data: ICondos) => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.post("/conds", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Novo condominio cadastrado com sucesso");
      setCondo([...condo, response.data]);
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };
  const newImp = async (data: iImprovement ) => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.post(`/messages/${condID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Nova melhoria cadastrada com sucesso");
      setCondo([...condo, response.data]);
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  }
  const postImprovements = async (data: iImprovement) => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.post("/imporovements", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMaintenance([...maintenance, response.data]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const postCash = async (data: iCashs) => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.post("/cashs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteMessagens = async (id: number) => {
    const token = localStorage.getItem("@Token");

    try {
      const response = await api.delete(`/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Recado deletado com sucesso");
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };


  return (
    <HomeContext.Provider
      value={{
        messagesRegister,
        deleteMessagens,
        modal,
        showCreateImp, setShowCreateImp,
        setModal,
        readAllComents,
        idCond,
        setIdCond,
        cashs,
        newImp,
        residents,
        showCreateCond,
        setShowCreateCond,
        readAllResident,
        condo,
        getAllCondos,
        setCondo,
        newCond,
        modalNewCond,
        setModalNewCond,
        showImprovements,
        setShowImprovements,
        showMessages,
        setShowMessages,
        showCondo,
        setShowCondo,
        setResidents,
        condID,
        setCondID,
        getResidents,
        readCash,
        readAllMessages,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
