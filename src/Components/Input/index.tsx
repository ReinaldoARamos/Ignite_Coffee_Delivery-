import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>//passando todas as tipagens de um in´put, como value
//placeholder, onchange, entre outros


export function InputText({...props} : InputProps) { ///usando spread para pegar todas ss propriedases
   return(<InputStyleContainer  {...props}/>) 
}