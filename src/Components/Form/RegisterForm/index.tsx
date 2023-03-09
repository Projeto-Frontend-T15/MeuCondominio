import { UseFormRegisterReturn } from 'react-hook-form';

interface IInput{
  label: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder: string;
}

const Input = ({label, type, register, error, placeholder}:IInput) => (
  <fieldset>
    <input label={label} type={type} {...register} placeholder={placeholder}/>
    {error && <p>{error.message}</p>}
  </fieldset>
);

export default Input;
