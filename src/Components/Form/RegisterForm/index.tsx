import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterUser, userContext } from "../../../Contexts/userContext";
import Input from "../Input";
import { Select } from "./Select";
import { formSchema } from "./formSchema";
import { SelectCondo } from "./SelectCondo";

export function Register() {
  const { userRegister } = useContext(userContext);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  const isAdmin = watch("is_admin");
  let selectComponent;

  if(isAdmin === "false"){
    selectComponent = (
      <SelectCondo
        register={register("condId")}
        error={errors.condId}
      />    
  )}

  const submit: SubmitHandler<IRegisterUser> = (data) => {
    userRegister(data);
  };
  

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Select register={register("is_admin")} error={errors.is_admin} />

      <Input
        type="text"
        placeholder="Nome"
        register={register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        placeholder="Email"
        register={register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        placeholder="Senha"
        register={register("password")}
        error={errors.password}
      />
      <Input
        type="password"
        placeholder="Confirmar senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      {selectComponent}

      <button type="submit">Cadastrar</button>
    </form>
  );
}
