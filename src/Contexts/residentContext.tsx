import { createContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

interface iContextProps {
  children: React.ReactNode;
}
interface iResidentContext {}

export const ResidentContext = createContext({} as iResidentContext);

export function ResidentProvider({ children }: iContextProps) {
  const [messages, setMessages] = useState();
  const [maintenance, setMaintenance] = useState();
  const [improvements, setImprovements] = useState();
  const [cashs, setCashs] = useState();

  return (
    <ResidentContext.Provider value={{}}>{children}</ResidentContext.Provider>
  );
}
