import { useContext } from "react";
import { useForm } from "react-hook-form";
import { HomeContext } from "../../Contexts/homeContext";

const ModalCreateCond = () => {
  const { register, handleSubmit } = useForm();
  const { newCond } = useContext(HomeContext)

const userId = JSON.parse(localStorage.getItem("@user")).id


const submitNewCond = (data) => {
    const newCondFom = {...data, userId}
    newCond(newCondFom)
}


return (
    <>
      <div>
      <h1>Cadastrar novo Condominio</h1>
      <button>x</button>
      </div>
      <form onSubmit={handleSubmit(submitNewCond)}>
      <input type="text" placeholder="Nome do Condominio" {...register("name")} />
      <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
export default ModalCreateCond;
