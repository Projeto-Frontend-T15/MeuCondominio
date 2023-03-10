import { useContext } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { userContext } from "../../../../Contexts/userContext";

interface ISelectCondo {
  register: UseFormRegisterReturn<string>;
  error?: any;
}

export function SelectCondo({ register, error }: ISelectCondo) {
  const { condo } = useContext(userContext);

  return (
    <fieldset>
      <select {...register}>
        <option value="">Selecionar Condomínio</option>
        {/* {condo.map((cond) => (
          <option key={cond.id} value={cond.id}>
            {cond.name}
          </option>
        ))} */}
      </select>
      {error && <p>{error.message}</p>}
    </fieldset>
  );
}
