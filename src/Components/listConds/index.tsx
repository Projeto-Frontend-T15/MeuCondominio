import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HomeContext } from "../../Contexts/homeContext";
import api from "../../services/api";
import { FielsetStyled } from "./styled";




export function ListConds(){
    
    const { register, handleSubmit } = useForm()
 
    const { setIdCond, condo, setCondo } = useContext(HomeContext)

    useEffect(() => {
      const condos = async () => {
        try {
          const response = await api.get("/conds");
          setCondo(response.data);
        } catch (error) {
            console.log(error)
        }
      };
      condos();
    }, [condo])


    const newId: SubmitHandler<Id> = (id: Id) => {
      setIdCond(id)
    }

    return(
      <FielsetStyled onSubmit={handleSubmit(newId)}>
        <select {...register("condId")}>
        <option>Condomínios</option>
        {condo.map((cond) => (
          <option key={cond.id} value={cond.id}>
            {cond.name}
          </option>
        ))}
      </select>
      <button type="submit">Buscar Condominio</button>
      </FielsetStyled>

    )
}