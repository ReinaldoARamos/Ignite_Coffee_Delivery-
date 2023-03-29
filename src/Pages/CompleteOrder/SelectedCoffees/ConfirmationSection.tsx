import { ButtonConfirm } from "../../../Components/Button";
import { RegularText } from "../../../Components/Header/Typography";
import { ConfirmationSectionContainer } from "./style";

export function ConfirmationSection() {
    
    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$: 9.90</RegularText>
            </div>
          
            <div>
                <RegularText size="s">Frete</RegularText>
                <RegularText>R$: 29.90</RegularText>
            </div>

            <div>
                <RegularText size="l" weight={700} color="subtitle">Total</RegularText>
                <RegularText size="l" weight={700} color="subtitle" >R$: 3.50</RegularText>
            </div>
           
           <ButtonConfirm text={"Confirmar Pedido"}/>
        </ConfirmationSectionContainer>
    )
}