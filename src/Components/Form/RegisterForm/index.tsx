import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterUser, UserContext } from "../../../Contexts/userContext";
import Input from "../Input";
import { Select } from "./Select";
import { formSchema } from "./formSchema";
import { SelectCondo } from "./SelectCondo";
import { FormStyled } from "./style";

export function Register() {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    watch,
    reset,
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
    reset()
  };
  

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
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
    </FormStyled>
  );
}
