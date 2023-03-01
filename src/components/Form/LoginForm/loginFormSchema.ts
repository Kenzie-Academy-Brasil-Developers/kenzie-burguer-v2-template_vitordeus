import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email:yup.string().required("O email é obrigatório")
        .email("O email inválido"),
  password:yup.string().required("A senha é obrigatória")
      .min(8, "A senha precissa ter mais que 8 dígitos")
      .matches(/[a-zA-Z]/, "Deve conter uma letra")
      .matches(/(\d)/, "Deve conter um número")
      .matches(/(\W|_)/, "Deve conter ao menos 1 caracter")
})