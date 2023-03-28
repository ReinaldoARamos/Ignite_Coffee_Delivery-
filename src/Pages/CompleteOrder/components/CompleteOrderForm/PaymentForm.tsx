import { SectionTitle } from "../SectionTitle";
import { PaymentButton } from "./PaymentButtons";
import { PaymentFormContainer } from "./style";

export function PaymentForm() {
  return (
    <PaymentFormContainer>
    <PaymentButton />
    <PaymentButton />
    <PaymentButton />
    </PaymentFormContainer>
  );
}
