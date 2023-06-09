import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { COmpleteOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { TypeOf } from "zod/lib";
import { useNavigate } from "react-router-dom";


enum paymentMethod {
  credit = "credit",
  debit = "debit",
  money = "money",
}
const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Digite o CEP").max(8, "Digite o CEP"),  //objeto do zod onde fica o sccehema de valdiação do formulario
  street: zod.string().min(1, "Digite o Nome da rua"),
  number: zod.string().min(1, "Digite o número"),
  complement: zod.string(),
  bairro: zod.string().min(1, "Digite o bairro"),
  city: zod.string().min(1, "Digite a cidade"),
  uf: zod.string().min(1, "Digite a uf"),
  paymentMethod: zod.nativeEnum(paymentMethod, {
    errorMap:() => {
      return {message: "Informe o método de pagamento"}
    }
  })
});

export type orderData = zod.infer<typeof confirmOrderFormValidationSchema>;  //zod infer infere o tipo de schema
//em orderData

type confirmOrderData = orderData; //ConfirmOrderData [e igual ao tipo inferido da schema para usar no form todo]
export function CartPage() {
  const confirmOrderForm = useForm<confirmOrderData>({ //generic tipando  o confirmOrderFor
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const navigate = useNavigate();

  const { handleSubmit } = confirmOrderForm; //confirmOderForm que é um useForm com a tipagem com o schema
  //passando o resolver da biblioteca zod pegando esse scehema
  function handleConfirmOrder(data: confirmOrderData) {
      navigate('/Delivery', {
        state: data
      })
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <COmpleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </COmpleteOrderContainer>
    </FormProvider>
  );
}