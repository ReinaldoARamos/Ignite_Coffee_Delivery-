import { HeaderButton, HeaderButtonContainer, HeaderLayout } from "./styles";
import CoffeeDeliveryLogo from "../../assets/CoffeeDeliveryLogo.svg";
//import LocationLogo from'../../assets/Location.svg'
//import CartLogo from'../../assets/Cart.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderLayout>
      <div className="container">
        <img src={CoffeeDeliveryLogo} />

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderLayout>
  );
}
