import { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

interface iContextProps {
  children: React.ReactNode;
}
interface iResidentContext {
  userLogout: ()=> void;
}

export const ResidentContext = createContext({} as iResidentContext);

export function ResidentProvider({ children }: iContextProps) {
  const [messages, setMessages] = useState();
  const [maintenance, setMaintenance] = useState();
  const [improvements, setImprovements] = useState();
  const [cashs, setCashs] = useState();
  const navigate = useNavigate();

  async function userLogout() {
    localStorage.removeItem(`@USERID:`);
    localStorage.removeItem(`@Token:`);
    navigate("/");
  }

  return (
    <ResidentContext.Provider value={{userLogout}}>{children}</ResidentContext.Provider>
  );
}
