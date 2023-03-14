import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../services/api";
import { HomeContext } from "./homeContext";
import {
  iResidentContext,
  iContextProps,
  iMessages,
  iMaintenance,
  iImprovement,
  iCashs,
  iComments,
  iUser,
  iAddComments,
} from "./interfacesResident";

export const ResidentContext = createContext({} as iResidentContext);

export function ResidentProvider({ children }: iContextProps) {
  const [messages, setMessages] = useState<iMessages[]>([]);
  const [maintenance, setMaintenance] = useState<iMaintenance[]>([]);
  const [improvements, setImprovements] = useState<iImprovement[]>([]);
  const [cashs, setCashs] = useState<iCashs[]>([]);
  const [comments, setComments] = useState<iComments[]>([]);
  const [modalMessage, setModalMessage] = useState(false);
  const [readMessage, setReadMessage] = useState<iMessages>();
  const userLoginLocal = localStorage.getItem("@user");
  const [userLogin, setUserLogin] = useState<iUser>(
    userLoginLocal ? JSON.parse(userLoginLocal) : []
  );

  const { condID } = useContext(HomeContext);

  const navegate = useNavigate();

  const messageApi = async () => {
    const idCond = userLogin.condId;
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get<iMessages[]>(
        `/messages?condId=${idCond}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const maintenanceApi = async () => {
    const idCond = userLogin.condId;
    try {
      const response = await api.get<iMaintenance[]>(
        `/maintenance?condId=${idCond}`
      );
      setMaintenance(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const improvementsApi = async () => {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get<iImprovement[]>(
        `/improvements?condId=${condID}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setImprovements(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const cashsApi = async () => {
    const idCond = userLogin.condId;
    console.log(idCond);

    try {
      const response = await api.get<iCashs[]>(`/cashs?condId=${idCond}`);
      setCashs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const commentsApi = async (id: number) => {
    try {
      const response = await api.get<iComments[]>(`/comments?messageId=${id}`);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addComments = async (dataComents: iAddComments) => {
    try {
      const response = await api.post(`/comments`, dataComents);
      setComments([...comments, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navegate("/");
  };

  return (
    <ResidentContext.Provider
      value={{
        messages,
        improvementsApi,
        setMessages,
        improvements,
        maintenance,
        cashs,
        setCashs,
        commentsApi,
        comments,
        setComments,
        logout,
        addComments,
        userLogin,
        messageApi,
        setImprovements,
      }}
    >
      {children}
    </ResidentContext.Provider>
  );
}
