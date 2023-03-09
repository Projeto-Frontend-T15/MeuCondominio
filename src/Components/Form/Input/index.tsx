import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder: string;
}

function Input({ type, register, error, placeholder }: IInput) {
  return (
    <fieldset>
      <input type={type} placeholder={placeholder} {...register} />
      {error && <p>{error.message}</p>}
    </fieldset>
  );
}
export default Input;
