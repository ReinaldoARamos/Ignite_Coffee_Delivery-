import { TitleText } from "../../../../Components/Header/Typography";
import { coffees } from "../../../../data/coffee";
import { CoffeeCards } from "../CoffeeCard";
import { CoffeeCardContainer } from "../CoffeeCard/styles";
import { CoffeeList, OurCoffeeCOntainer } from "./styles";

export function OurCoffee() {
    return(
        <OurCoffeeCOntainer className="container">
            <TitleText size="l" color="subtitle">Nossos cafés</TitleText>

          <CoffeeList>
          {coffees.map((coffee)=>(
             <CoffeeCards key={coffee.id} coffee={coffee}/>
          ))}
         
          </CoffeeList>
        </OurCoffeeCOntainer>

    )
}