import { CoffeeCardContainer } from "../../Home/components/CoffeeCard/styles";
import americanExpress from "../../../../public/coffees/americano.png";
import { RegularText } from "../../../Components/Header/Typography";
import { ActionsContainer, RemoveButton } from "./style";
import { QuantityInput } from "../../../Components/QuantityInput";
import { Trash } from "phosphor-react";
export function CoffeeCartCard() {
  return (
    <CoffeeCardContainer>
      <div>
        <img src={americanExpress} />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={20} />
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$: 9,90</p>
    </CoffeeCardContainer>
  );
}
