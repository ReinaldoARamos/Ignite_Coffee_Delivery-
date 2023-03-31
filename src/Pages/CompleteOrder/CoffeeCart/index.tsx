import { RegularText } from "../../../Components/Header/Typography";
import { ActionsContainer, RemoveButton, CoffeeCardContainer } from "./style";
import { QuantityInput } from "../../../Components/QuantityInput";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { CartItem } from "../../../context/CartContext";
import { FormatNumber } from "../../../utils/formatMoney";
import { UseCart } from "../../../utils/hooks/useContext";
interface CoffeeCartCardProps{
  coffee: CartItem
}
export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {
  const {changeCartItemQuantity, deleteItemCart} = UseCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleDelete() {
    deleteItemCart(coffee.id)
  }
    const color = useTheme();
    const coffeeTotal = coffee.price * coffee.quantity
    const formatedPrice = FormatNumber(coffeeTotal);
  return (
    <CoffeeCardContainer>
      <div>
      <img src={`coffees/${coffee.photo}`} />
        <div>
          <RegularText  size="s" color="subtitle" >{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput quantity={coffee.quantity} onDecrease={handleDecrease} onIncrease={handleIncrease}/>
            <RemoveButton onClick={handleDelete}>
                
              <Trash size={20} color={color.colors["brand-purple-dark"]} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>{formatedPrice}</p>
    </CoffeeCardContainer>
  );
}
