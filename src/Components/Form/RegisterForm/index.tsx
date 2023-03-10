import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterUser, userContext } from "../../../Contexts/userContext";
import { formSchema } from "./formSchema";

export function Register() {
  const { userRegister } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<IRegisterUser> = (data) => {
    userRegister(data);
  };

  return(
    <form onSubmit={handleSubmit(submit)}>
      <input type="text"/>
    </form>
  )
}