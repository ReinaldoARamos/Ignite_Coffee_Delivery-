
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { COmpleteOrderContainer } from "./styles";
import * as zod from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

export function CartPage() {
 
    return(
        <COmpleteOrderContainer className="container">

            <CompleteOrderForm/>
            <SelectedCoffees/>
        
        </COmpleteOrderContainer>
        )
}
