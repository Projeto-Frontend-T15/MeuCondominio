import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { iMessages } from "./interfacesResident";
import { ResidentContext } from "./residentContext";


export interface iContextProps {
  children: React.ReactNode;
}
interface iHomeContext {
  messagesRegister: (data: iMessages) => Promise<void>;
  deleteMessagens: (id: number) => Promise<void>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  readAllMenssagens: (id: Id) => Promise<void>;
  idCond: Id | null;
  setIdCond: React.Dispatch<React.SetStateAction<Id | null>>;
  readAllComents: (id: any) => Promise<void>;
  residents: IResident[];
  readAllResident: (id: any) => Promise<void>;
}
interface Id{
  condId: string,
}
export interface IResident{
  email: string;
  password: string;
  is_admin: string;
  name: string;
  condId: number;
  id: number;
}

export const HomeContext = createContext({} as iHomeContext);

export function HomeProvider({ children }: iContextProps) {

  const {messages, setMessages, setComments} = useContext(ResidentContext)
  const [modal, setModal] = useState(false)
  const [idCond, setIdCond] = useState<Id | null>(null)
  const [residents, setResidents] = useState<IResident[]>([])

  useEffect(() => {
    readAllMenssagens(idCond)
  },[messages])

  const messagesRegister = async (data: iMessages ) => {
    const token = localStorage.getItem("@Token")
    try {
      const response = await api.post("/messages", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const deleteMessagens = async (id: number) => {
    const token = localStorage.getItem("@Token")
   
    try {
      const response = await api.delete(`/messages/${id}`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const readAllMenssagens = async (id:Id) => {
    const token = localStorage.getItem("@Token")

    try {
      const response = await api.get(`/messages?condId=${id.condId}`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setMessages(response.data)
    } catch (error) {
        console.log(error)
    }
  }


  const readAllComents = async (id) => {
    console.log(id)
    const token = localStorage.getItem("@Token")
    try {
      const response = await api.get(`comments?messageId=${id}`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setComments(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  const readAllResident = async (id) => {
    const token = localStorage.getItem("@Token")
    try {
      const response = await api.get(`/users?condId=${id}`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setResidents(response.data)
    } catch (error) {
        console.log(error)
    }
  }
  
  

  return <HomeContext.Provider value={{messagesRegister, deleteMessagens, modal, setModal, readAllMenssagens, idCond, setIdCond, readAllComents, residents, readAllResident}}>{children}</HomeContext.Provider>;
}

