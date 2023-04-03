import { Money, CreditCard, Bank, CurrencyCircleDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentButton } from "../../components/PaymentButtons/index";
import { PaymentButtonContainer, PaymentFormContainer } from "./style";


export const PaymentMethod = {
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


  return (

    <PaymentButtonContainer >
      {Object.entries(PaymentMethod).map(([key, {label, icon}]) => ( 
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
