import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string | number
}

export function ButtonConfirm({text, ...props} : ButtonProps) {
  return <ButtonContainer {...props}>
   {text}
  </ButtonContainer>;
}
