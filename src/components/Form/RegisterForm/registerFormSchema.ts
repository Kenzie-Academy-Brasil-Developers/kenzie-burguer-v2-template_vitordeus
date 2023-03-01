import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name:yup.string().required("O nome é obrigatório"),
  email:yup.string().required("O email é obrigatório")
      .email("O email inválido"),
  password:yup.string().required("A senha é obrigatória")
      .min(8, "A senha precissa ter mais que 8 dígitos")
      .matches(/[a-zA-Z]/, "Deve conter uma letra")
      .matches(/(\d)/, "Deve conter um número")
      .matches(/(\W|_)/, "Deve conter ao menos 1 caracter"),
  confirmPassword:yup.string().required("Confirme a senha")
      .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha"),
})