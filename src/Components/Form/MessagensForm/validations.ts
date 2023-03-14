import * as yup from "yup"

export const schema = yup.object({
    title: yup.string().required("Campo Obrigatório"),
    descripiton: yup.string().required("Campo Obrigatório")
}).required();