import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { HomeContext } from "../../Contexts/homeContext";
import { StyledModalCreateCond } from "./styled";

const ModalCreateCond = () => {
  const { register, handleSubmit } = useForm();
  const { newCond, setShowCreateCond, showCreateCond } =
    useContext(HomeContext);

  const userId = JSON.parse(localStorage.getItem("@user")).id;

  const submitNewCond = (data) : any => {
    const newCondFom = { ...data, userId };
    newCond(newCondFom);
  };

  return (
    <>
      {showCreateCond && (
        <StyledModalCreateCond>
          <dialog>
          <div>
            <h1>Cadastrar novo Condominio</h1>
            <button onClick={() => setShowCreateCond(false)}>x</button>
          </div>
          <form onSubmit={handleSubmit(submitNewCond)}>
            <input
              type="text"
              placeholder="Nome do Condominio"
              {...register("name")}
            />
            <button type="submit">Cadastrar</button>
          </form>
          </dialog>
        </StyledModalCreateCond>
      )}
    </>
  );
};

export default ModalCreateCond;
