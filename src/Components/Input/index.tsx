import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>//passando todas as tipagens de um in´put, como value
//placeholder, onchange, entre outros




export const InputText = forwardRef<HTMLInputElement, InputProps>(
   (props, ref) => {
      return <InputStyleContainer  {...props} ref={ref}/>
   }
)