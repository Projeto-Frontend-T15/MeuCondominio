import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HomeContext } from "../../../Contexts/homeContext";
import { iMessages } from "../../../Contexts/interfacesResident";
import { StyledFormeMessages } from "./styled";
import { schema } from "./validations";

interface IRegisterMessages {
  title: string;
  descripiton: string;
  condId: string;
  userId: number;
}
interface Message {
  title: string;
  descripiton: string;
}

export function RegisterMessages() {
  const { messagesRegister, condID, setShowCreateImp } = useContext(HomeContext);
  

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const userId = JSON.parse(localStorage.getItem("@user")).id;

  const condId = condID;

  const ids = { condId, userId };

  const submitMessage: SubmitHandler<IRegisterMessages> = (data: Message) => {
    const i = { ...data, ...ids };
    messagesRegister(i);
    setShowCreateImp(false)
  };

  return (
    <StyledFormeMessages>
      <dialog>
      <div>
            <h1>Registar Recado</h1>
            <button onClick={() => {setShowCreateImp(false)}}>x</button>

        </div>
        <form onSubmit={handleSubmit(submitMessage)}>
          <input
            type="text"
            placeholder="Titulo do Recado"
            {...register("title")}
          />

          <input
            type="text"
            placeholder="Descrição do Recado"
            {...register("descripiton")}
          />

          <button type="submit">Registrar Recado</button>
        </form>
      </dialog>
    </StyledFormeMessages>
  );
}

