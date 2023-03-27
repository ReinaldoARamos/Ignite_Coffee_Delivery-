import { TitleText } from "../../../../Components/Header/Typography";
import { FormSectionContainer } from "../../styles";
import { CompleteOrderFormContainer } from "./style";


export function CompleteOrderForm() {
    return(
<CompleteOrderFormContainer>
    <TitleText size="xs" color="subtitle">
        Complete seu pedido
    </TitleText>
    <FormSectionContainer>
        
    </FormSectionContainer>
</CompleteOrderFormContainer>

    )
}