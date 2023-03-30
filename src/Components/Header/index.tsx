import { HeaderButton, HeaderButtonContainer, HeaderLayout } from "./styles";
import CoffeeDeliveryLogo from "../../assets/CoffeeDeliveryLogo.svg";
//import LocationLogo from'../../assets/Location.svg'
//import CartLogo from'../../assets/Cart.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { UseCart } from "../../utils/hooks/useContext";

export function Header() {
  const {CartQuantity} =  UseCart()
  return (
    <HeaderLayout>
      
      <div className="container">
     
        <NavLink to="/">
        <img src={CoffeeDeliveryLogo} />
        </NavLink>
        <HeaderButtonContainer>
        
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Florianópolis,SC
          </HeaderButton>

      <NavLink to="/completeOrder">
          <HeaderButton variant="yellow">
            {CartQuantity >= 1 && <span>{CartQuantity}</span>}
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderLayout>
  );
}
