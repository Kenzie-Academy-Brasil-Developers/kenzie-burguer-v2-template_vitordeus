import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './loginFormSchema';
import { ILoginFormValues } from '../../../Providers/UserContext/types';
import { UserContext } from '../../../Providers/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm<ILoginFormValues>(
    {
      resolver: yupResolver(loginFormSchema)
    }
  );
  console.log(useForm)
      
  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
    console.log(formData)
  }
  
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input type='email' label='Email' register={register("email")} error={errors.email} />
      <Input type='password' label='Password' register={register("password")} error={errors.email} />
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
  };

export default LoginForm;
