import { useFormContext } from "react-hook-form";
import { InputText } from "../../../../Components/Input";
import { AdressFormContainer } from "./style";

export function AdressForm() {
    
    const {register} = useFormContext();
  return (
    <>
      <AdressFormContainer>
        <InputText placeholder="CEP" className="cep" type="number" {...register("cep")} />
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
