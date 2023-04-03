import { InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer, PaymentButtonStyle } from "./style";

type PaymentMethodsProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;

};

export function PaymentButton({
  icon,
  label,
  id,
  ...props
}: PaymentMethodsProps) {
  return (
    <PaymentButtonStyle>
         <input  id={id} type="radio" name="PaymentMethod"/>
          <label>
      <ContentContainer>
        {icon}
        {label}
      </ContentContainer>
      </label>
    </PaymentButtonStyle>
  );
}
