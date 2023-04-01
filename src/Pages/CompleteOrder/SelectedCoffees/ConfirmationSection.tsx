import { ButtonConfirm } from "../../../Components/Button";
import { RegularText } from "../../../Components/Header/Typography";
import { UseCart } from "../../../utils/hooks/useContext";
import { ConfirmationSectionContainer } from "./style";
import { FormatNumber } from "../../../utils/formatMoney";
import { NavLink } from "react-router-dom";

export function ConfirmationSection() {
  
     const {cartItems, cartItemsTotal, deliveryTotal} = UseCart(); 
     const formatedPrice = FormatNumber(cartItemsTotal);
     const formatedTotal = FormatNumber(deliveryTotal)
        if(cartItems.length >= 1){
            return(
                <ConfirmationSectionContainer>
                <div>
                    <RegularText size="s">Total de itens</RegularText>
                    <RegularText>{formatedPrice}</RegularText>
                </div>
              
                <div>
                    <RegularText size="s">Frete</RegularText>
                    <RegularText>R$: 3,50</RegularText>
                </div>
    
                <div>
                    <RegularText size="l" weight={700} color="subtitle">Total</RegularText>
                    <RegularText size="l" weight={700} color="subtitle" >R$: ${formatedTotal} </RegularText>
                </div>
          
               
               <ButtonConfirm text={"Confirmar Pedido"} type="submit"/>
            </ConfirmationSectionContainer>
            )
         
         
            
        } 
 
    
}