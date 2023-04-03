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
        
          <label>
          <input  id={id} type="radio" name="PaymentMethod"/>
      <ContentContainer>

        {icon}
        {label}
      </ContentContainer>
      </label>
    </PaymentButtonStyle>
  );
}
