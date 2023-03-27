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


export interface Coffee{
id: number;
tags: string[];
name:string;
description: string;
photo: string;
price: number;
}

interface CoffeeProps{
  coffee: Coffee
}

export function CoffeeCards({coffee} : CoffeeProps) {
  const formattedPrice = FormatNumber(coffee.price)
  return (
    
    <CoffeeCardContainer>
      <img src={coffee.photo}/>
      <Tags>
      {coffee.tags.map((tag)=>(
            <span key={`${coffee.id}${tag}`}>{tag}</span> //a gente passa primeiro a id para nao conflitar as tags
          ))}
      </Tags>

      <Name>
     {coffee.name}
     </Name>
      <Description>
      {coffee.description}
      </Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
          {formattedPrice}
          </TitleText>
          <AddCartWrapper>
      
          </AddCartWrapper>
        </div>
        <AddCartWrapper>
        <QuantityInput />
        <button>
          <ShoppingCart size={22} weight="fill"/>
        </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
