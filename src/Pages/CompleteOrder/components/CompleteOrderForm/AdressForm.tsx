import { InputText } from "../../../../Components/Input";
import { AdressFormContainer } from "./style";

export function AdressForm() {
    return(
<AdressFormContainer>
    <InputText placeholder="CEP" className="cep" type="number"/>
    <InputText placeholder="Rua" className="street" />
    <InputText placeholder="Numero"  type="number"/>
    <InputText placeholder="Complemento" className="complement" />
    <InputText placeholder="Bairro"  />
    <InputText placeholder="Cidade" />
    <InputText placeholder="UF"/>
</AdressFormContainer>

    )
}