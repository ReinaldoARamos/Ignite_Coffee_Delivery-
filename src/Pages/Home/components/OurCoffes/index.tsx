import { TitleText } from "../../../../Components/Header/Typography";
import { OurCoffeeCOntainer } from "./styles";

export function OurCoffee() {
    return(
        <OurCoffeeCOntainer className="container">
            <TitleText size="l" color="subtitle">Nossos cafés</TitleText>
        </OurCoffeeCOntainer>

    )
}