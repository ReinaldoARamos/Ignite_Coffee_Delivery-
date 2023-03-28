
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { COmpleteOrderContainer } from "./styles";

export function CartPage() {
 
    return(
        <COmpleteOrderContainer className="container">

            <CompleteOrderForm/>
            <SelectedCoffees/>
        
        </COmpleteOrderContainer>
        )
}
