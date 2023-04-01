import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { COmpleteOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string()
})

export function CartPage() {
    const confirmOrderForm = useForm({ 
        resolver: zodResolver(confirmOrderFormValidationSchema)
    })
  return (
    <FormProvider {...confirmOrderForm}>
      <COmpleteOrderContainer className="container">
        <CompleteOrderForm />
        <SelectedCoffees />
      </COmpleteOrderContainer>
    </FormProvider>
  );
}
