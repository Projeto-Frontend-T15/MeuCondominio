import { UseFormRegisterReturn } from "react-hook-form";
import { FieldsetStyled } from "./style";

interface IInput {
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder: string;
}

function Input({ type, register, error, placeholder }: IInput) {
  return (
    <FieldsetStyled>
      <input type={type} placeholder={placeholder} {...register} />
      {error && <p>{error.message}</p>}
    </FieldsetStyled>
  );
}
export default Input;
