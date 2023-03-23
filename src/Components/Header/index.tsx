import { HeaderLayout } from "./styles";
import CoffeeDeliveryLogo from  '../../assets/CoffeeDeliveryLogo.svg'

export function Header() {
    return (
      <HeaderLayout>
        <div className="container">
        <img src={CoffeeDeliveryLogo} />
        </div>
        
      </HeaderLayout>
    )
}