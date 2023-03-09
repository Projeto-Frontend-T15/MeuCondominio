import { UseFormRegisterReturn } from 'react-hook-form';

interface IInput{
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder: string;
}

function Input({type, register, error, placeholder}:IInput){
  <fieldset>
    <input type={type} {...register} placeholder={placeholder}/>
    {error && <p>{error.message}</p>}
  </fieldset>
}
;

export default Input;
