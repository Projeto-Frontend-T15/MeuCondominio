import { useContext } from "react";
import { IloginUser, UserContext } from "../../../Contexts/userContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import Input from "../Input";
import { FormStyled } from "./style";

export function Login() {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IloginUser>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<IloginUser> = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
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
    </FormStyled>
  );
}
