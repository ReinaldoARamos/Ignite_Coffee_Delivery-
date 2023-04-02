import { Money, CreditCard, Bank, CurrencyCircleDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentButton } from "../../components/PaymentButtons/index";
import { PaymentButtonContainer, PaymentFormContainer } from "./style";
/*
  <PaymentButton
        text="Crédito"
        icon={<CreditCard size={20} color={colors.colors["brand-purple-dark"]} />}
      />
      <PaymentButton
        text="Débito"
        icon={<Bank size={20} color={colors.colors["brand-purple-dark"]} />}
      />* */

const PaymentMethod = {
  credit: {
    label: "cartão de crédito",
    icon: <CreditCard></CreditCard>,
  },
  debit: {
    label: "cartão de débito",
    icon: <Bank></Bank>,
  },
  money: {
    label: "Dinheiro",
    icon: <CurrencyCircleDollar></CurrencyCircleDollar>,

  },
};
export function PaymentForm() {
  const colors = useTheme();

  return (
    <PaymentButtonContainer>
      {Object.entries(PaymentMethod).map(([key, {id, label, icon}]) => ( 
        <PaymentButton
          label={label}
          icon={icon}
          id={key}
          value={key}
        />
      ))}
    </PaymentButtonContainer>
  );
}
