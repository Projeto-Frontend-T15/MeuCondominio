import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../services/api";
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

  const userLoginLocal = localStorage.getItem("@user");
  const [userLogin, setUserLogin] = useState<iUser>(
    userLoginLocal ? JSON.parse(userLoginLocal) : []
  );

  const navegate = useNavigate();

  const messageApi = async () => {
    const idCond = userLogin.condId;
    try {
      const response = await api.get(`/messages?condId=${idCond}`);
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  messageApi();

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
  maintenanceApi();

  const improvementsApi = async () => {
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
  improvementsApi();

  const cashsApi = async () => {
    const idCond = userLogin.condId;
    try {
      const response = await api.get<iCashs[]>(`/cashs?condId=${idCond}`);
      setCashs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  cashsApi();

  const commentsApi = async (id: number) => {
    try {
      const response = await api.get<iComments[]>(`/comments?messageId=${id} `);
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
        improvements,
        maintenance,
        cashs,
        commentsApi,
        comments,
        logout,
        addComments,
        userLogin,
      }}
    >
      {children}
    </ResidentContext.Provider>
  );
}
