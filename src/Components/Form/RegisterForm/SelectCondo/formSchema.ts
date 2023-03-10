import * as yup from "yup";

export const formSchema = yup.object().shape({
  condId: yup.number().required("Campo obrigatório")
});