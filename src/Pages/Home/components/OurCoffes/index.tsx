import { TitleText } from "../../../../Components/Header/Typography";
import { CoffeeCards } from "../CoffeeCard";
import { CoffeeCardContainer } from "../CoffeeCard/styles";
import { CoffeeList, OurCoffeeCOntainer } from "./styles";

export function OurCoffee() {
    return(
        <OurCoffeeCOntainer className="container">
            <TitleText size="l" color="subtitle">Nossos cafés</TitleText>

          <CoffeeList>
          <CoffeeCards/>
          <CoffeeCards/>
          <CoffeeCards/>
          <CoffeeCards/>
          <CoffeeCards/>
          <CoffeeCards/>
          </CoffeeList>
        </OurCoffeeCOntainer>

    )
}