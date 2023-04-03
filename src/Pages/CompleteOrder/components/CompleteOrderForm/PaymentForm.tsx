import { Money, CreditCard, Bank, CurrencyCircleDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { PaymentMethodInput } from "../../components/PaymentButtons/index";
import { PaymentButtonContainer, PaymentFormContainer } from "./style";
import { useForm, useFormContext } from "react-hook-form";


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
  const {register} = useFormContext();


  return (

    <PaymentButtonContainer >
      {Object.entries(PaymentMethod).map(([key, {label, icon}]) => ( 
        <PaymentMethodInput
      
          label={label}
          icon={icon}
          id={key}
          value={key}
          {...register("paymentMethod")}
          
        />
      ))}
    </PaymentButtonContainer>

  );
}
