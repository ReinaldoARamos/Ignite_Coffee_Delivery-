import { HeaderLayout } from "./styles";
import CoffeeDeliveryLogo from  '../../assets/CoffeeDeliveryLogo.svg'

export function Header() {
    return (
      <HeaderLayout>
          <img src={CoffeeDeliveryLogo} />
      </HeaderLayout>
    )
}