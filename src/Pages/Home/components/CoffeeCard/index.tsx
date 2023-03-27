import {
  RegularText,
  TitleText,
} from "../../../../Components/Header/Typography";
import { QuantityInput } from "../../../../Components/QuantityInput";
import {
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
  CardFooter,
  AddCartWrapper,
} from "./styles";

export function CoffeeCards() {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/b6af/775d/aaa94dcb37dfe1ee6535aae5b9356e9a?Expires=1680480000&Signature=GvkI9Vjxl4oI5bYje4ZH-vkjr7mG-vj1hiwpmLYR2PcTKd0mW1sC5OfwJCh-LkUyCY0BW218JYVwIRfQpgEoxZx4o7cXup8EjAL3V~ge-JnS98n~JSeL35I6Rm5kcUa7sl60iFVfjt0jMP4jDhxLIzoJWV7f0805Jsy7jLQzKaR9Rpbav6XLa1EcFa9RbQtkSH-6w2oMwFXd6KdrhcTTKRB4tLWteYrgp5TMi7Z8lqjftLQAvktKb1Ge63DKMY8n~xMsn2tlf0YV58oYAwO-2UwGHvKakBK6fMdd4rb-8mcNkfDJ4l2zTGi86-EgVSkI1LOynJx2e8Df-Cg45D1ohg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <Tags>
        <span>Tradicional</span> <span>Com Leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O Tradicional café feito com água quente e grãos moídos
      </Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9.90
          </TitleText>
          <AddCartWrapper>
          <QuantityInput>
            
            </QuantityInput>
          </AddCartWrapper>
        </div>
       
      </CardFooter>
    
    </CoffeeCardContainer>
  );
}
