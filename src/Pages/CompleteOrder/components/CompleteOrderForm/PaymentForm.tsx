import { Money, CreditCard, Bank } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentButton } from "../../components/PaymentButtons/index";
import { PaymentButtonContainer, PaymentFormContainer } from "./style";

export function PaymentForm() {
  const colors = useTheme();
  return (
    <PaymentButtonContainer>
      <PaymentButton
        text="Dinheiro"
        icon={<Money size={20} color={colors.colors["brand-purple-dark"]} />}
      />
      <PaymentButton
        text="Crédito"
        icon={<CreditCard size={20} color={colors.colors["brand-purple-dark"]} />}
      />
      <PaymentButton
        text="Débito"
        icon={<Bank size={20} color={colors.colors["brand-purple-dark"]} />}
      />
    </PaymentButtonContainer>
  );
}
