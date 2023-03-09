import { useContext } from "react";
import { IloginUser, userContext } from "../../../Contexts/userContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import Input from "../Input";

export function Login() {
  const { userLogin } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginUser>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<IloginUser> = (data) => {
    userLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        type="text"
        placeholder="Senha"
        register={register("password")}
        error={errors.password}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
