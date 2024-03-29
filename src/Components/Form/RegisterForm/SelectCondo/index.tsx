import { useEffect, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../../services/api";
import { FielsetStyled } from "./style";

interface ISelectCondo {
  register: UseFormRegisterReturn<string>;
  error?: any;
}

interface ICondos {
  name: string;
  userId: number;
  id: number;
}

export function SelectCondo({ register, error }: ISelectCondo) {

  const [condo, setCondo] = useState<ICondos[]>([])

  useEffect(() => {
    const listCondo = async () => {
      try {
        const response = await api.get("/conds");
        setCondo(response.data);
  
      } catch (error) {
        toast.error("Algo deu errado ao listar condominios");
      }
    };
    listCondo()
  }, [condo])

  return (
    <FielsetStyled>
      <select {...register}>
        <option value="">Selecionar Condomínio</option>
        {condo.map((cond) => (
          <option key={cond.id} value={cond.id}>
            {cond.name}
          </option>
        ))}
      </select>
      {error && <p>{error.message}</p>}
    </FielsetStyled>
  );
}
