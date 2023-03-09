import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export interface iContextProps {
  children: React.ReactNode;
}
interface iHomeContext {}

export const HomeContext = createContext({} as iHomeContext);

export function HomeProvider({ children }: iContextProps) {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
}
