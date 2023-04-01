import { useFormContext } from "react-hook-form";
import { InputText } from "../../../../Components/Input";
import { AdressFormContainer } from "./style";


interface ErrorType {
    errors: {
        [key: string] :{
            message: string //tipagem do erro com estrutura de objeto, com keu e message
        }
    }
}
export function AdressForm() {
    
    const {register,formState} = useFormContext();
    const {errors } = formState as unknown as ErrorType; //passando o FormState com a tipagem do erro que o zod endnede
  return (
    <>
      <AdressFormContainer>
        <InputText placeholder="CEP" className="cep" type="number"   error={errors.cep?.message} {...register("cep")} />
        <InputText placeholder="Rua" className="street" />
        <InputText placeholder="Numero" type="number" />
        <InputText
          placeholder="Complemento         
                                                opcional"
          className="complement"
        />
        <InputText placeholder="Bairro" />
        <InputText placeholder="Cidade" />
        <InputText placeholder="UF" />
      </AdressFormContainer>
    </>
  );
}
