import { TextField } from '@mui/material';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps{
  label: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn<string>;
  error?: FieldError; 
}


const Input = ({ label, type, register, error }: IInputProps) => (
  <StyledTextField>
    <TextField type={type} label={label} {...register}/>
    {
      error
      ?
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
      :
      null
    }
  </StyledTextField>
);

export default Input;
