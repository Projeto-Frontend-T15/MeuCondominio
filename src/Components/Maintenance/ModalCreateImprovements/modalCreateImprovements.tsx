import { useContext } from "react";
import { useForm } from "react-hook-form";
import { HomeContext } from "../../../Contexts/homeContext";
import { iImprovement } from "../../../Contexts/interfacesResident";
import { ListConds } from "../../listConds";
import { StyledModalCreateImp } from "./styled";

export const ModalCreateImprovement = () => {
  const { register, handleSubmit } = useForm();
  const { newImp, setShowCreateImp, showCreateImp, condID } =
    useContext(HomeContext);
  const userId = localStorage.getItem("@user").id;
  const submitNewImp = (data: any) => {
    const newImpForm: iImprovement = { ...data, userId, condID };
    newImp(newImpForm);
  };

  return (
    <StyledModalCreateImp>
        {showCreateImp && (
          <section>
            <div>
              <h1>Cadastrar nova melhoria</h1>
              <button onClick={() => setShowCreateImp(false)}>x</button>
            </div>
            <form onSubmit={handleSubmit(submitNewImp)}>
              <ListConds />
              <input type="text" placeholder="Titulo" {...register("title")} />
              <input
                type="text"
                placeholder="Descricao"
                {...register("description")}
              />

              <button type="submit">Cadastrar</button>
            </form>
          </section>
        )}
    </StyledModalCreateImp>
  );
};
