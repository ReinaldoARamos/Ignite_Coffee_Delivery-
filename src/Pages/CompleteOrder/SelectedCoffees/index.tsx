import { TitleText } from "../../../Components/Header/Typography";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffees() {
    return(

    <SelectedCoffeesContainer>
        <TitleText size="xs" color="subtitle">
            Cafés Selecionados
        </TitleText>
        <DetailsContainer>
            <p>Item</p>
        </DetailsContainer>
    </SelectedCoffeesContainer>
    )
}