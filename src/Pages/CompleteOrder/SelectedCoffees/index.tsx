import { TitleText } from "../../../Components/Header/Typography";
import { CoffeeCartCard } from "../CoffeeCart";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffees() {
    return(

    <SelectedCoffeesContainer>
        <TitleText size="xs" color="subtitle">
            Cafés Selecionados
        </TitleText>
        <DetailsContainer>
            <CoffeeCartCard></CoffeeCartCard>
        </DetailsContainer>
    </SelectedCoffeesContainer>
    )
}