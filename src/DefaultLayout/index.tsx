import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import CoffeeDeliveryLogo from  '../assets/CoffeeDeliveryLogo.svg'
export function DefaultLayout() {
    return (
        <LayoutContainer>
            <img src={CoffeeDeliveryLogo} />
            <Outlet/>
        </LayoutContainer>
    )
}