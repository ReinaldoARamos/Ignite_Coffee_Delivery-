import { Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentButton } from "./PaymentButtons";
import { PaymentFormContainer } from "./style";

export function PaymentForm() {
  const colors = useTheme();
  return (
    <PaymentFormContainer>
    <PaymentButton text="Dori" icon={<Money size={20} color={colors.colors["brand-purple-dark"]}/>}/>
   
    </PaymentFormContainer>
  );
}
