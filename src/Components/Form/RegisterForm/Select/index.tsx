import { roles } from "../formSchema";
import { UseFormRegisterReturn } from "react-hook-form";
import { FielsetStyled } from "./style";

interface ISelect {
  register: UseFormRegisterReturn<string>;
  error?: any;
}

export function Select({ register, error }: ISelect) {
  
  return (
    <FielsetStyled>
      <select {...register}>
        <option value="">Morador ou Síndico?</option>
        {roles.map((role) => (
          <option key={role.value} value={role.value}>
            {role.label}
          </option>
        ))}
      </select>
      {error && <p>{error.message}</p>}
    </FielsetStyled>
  );
}
