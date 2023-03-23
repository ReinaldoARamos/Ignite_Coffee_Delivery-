import { HeaderButton, HeaderButtonContainer, HeaderLayout } from "./styles";
import CoffeeDeliveryLogo from "../../assets/CoffeeDeliveryLogo.svg";
//import LocationLogo from'../../assets/Location.svg'
//import CartLogo from'../../assets/Cart.svg'
import { MapPin, ShoppingCart} from "phosphor-react";

export function Header() {
  return (
    <HeaderLayout>
      <div className="container">
        <img src={CoffeeDeliveryLogo} />
       
        <HeaderButtonContainer>
          <HeaderButton>
          <MapPin size={24} />
          <ShoppingCart size={24}/>
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderLayout>
  );
}
