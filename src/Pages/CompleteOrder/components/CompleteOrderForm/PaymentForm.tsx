import { SectionTitle } from "../SectionTitle";
import { PaymentFormContainer } from "./style";
import {  CurrencyDollar} from "phosphor-react";
export function PaymentForm() {
  return (
    <PaymentFormContainer>
      <SectionTitle
        icon={<CurrencyDollar size={20} />}
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        
      ></SectionTitle>
    </PaymentFormContainer>
  );
}
