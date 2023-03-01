import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email:yup.string().required("O email é obrigatório"),
  password:yup.string().required("A senha é obrigatória")
})