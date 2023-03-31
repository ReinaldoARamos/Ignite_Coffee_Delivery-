import { ShoppingCart } from "phosphor-react";
import {
  RegularText,
  TitleText,
} from "../../../../Components/Header/Typography";
import { QuantityInput } from "../../../../Components/QuantityInput";
import { FormatNumber } from "../../../../utils/formatMoney";
import {
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
  CardFooter,
  AddCartWrapper,
} from "./styles";
import { UseCart } from "../../../../utils/hooks/useContext";
import { useState } from "react";
export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCards({ coffee }: CoffeeProps) {
  const [ quantity, setQuantity ] = useState(1);
  const { addCoffeeToCart } = UseCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
      
    };
    addCoffeeToCart(coffeeToAdd);
  }
function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }


  const formattedPrice = FormatNumber(coffee.price);
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span> //a gente passa primeiro a id para nao conflitar as tags
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
          <AddCartWrapper></AddCartWrapper>
        </div>
        <AddCartWrapper>
          <QuantityInput 
          onIncrease = {handleIncrease}
          onDecrease = {handleDecrease}
          quantity = {quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
