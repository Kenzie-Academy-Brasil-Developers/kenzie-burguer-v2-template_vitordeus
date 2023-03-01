import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from 'react';
import { registerFormSchema } from './registerFormSchema';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValues } from '../../../Providers/UserContext/types'
import { UserContext } from '../../../Providers/UserContext/UserContext';

const RegisterForm = () => {
  const { userRegister } = useContext (UserContext);
  
  const { 
    register,
    handleSubmit, 
    formState: {errors},
  } = useForm<IRegisterFormValues>(
    // {
    //   resolver: yupResolver(registerFormSchema)
    // }
  );

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  }
  console.log(submit)

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input type='text' label='Nome' register={register("name")} error={errors.name} />
      <Input type='email' label='Email' register={register("email")} error={errors.email} />
      <Input type='password' label='Senha' register={register("password")} error={errors.password} />
      <Input type='password'label='Confirmar Senha' register={register("password")} error={errors.password} />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
