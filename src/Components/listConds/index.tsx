import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HomeContext } from "../../Contexts/homeContext";
import api from "../../services/api";




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
    }, [])


    const newId: SubmitHandler<Id> = (id: Id) => {
      setIdCond(id)
    }

    return(
      <form onSubmit={handleSubmit(newId)}>
        <select {...register("condId")}>
        <option>Condomínios</option>
        {condo.map((cond) => (
          <option key={cond.id} value={cond.id}>
            {cond.name}
          </option>
        ))}
      </select>
      <button type="submit">Buscar Condominio</button>
      </form>

    )
}