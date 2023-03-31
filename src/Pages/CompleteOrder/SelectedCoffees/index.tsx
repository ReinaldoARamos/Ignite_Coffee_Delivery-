import { TitleText } from "../../../Components/Header/Typography";
import { UseCart } from "../../../utils/hooks/useContext";
import { CoffeeCartCard } from "../CoffeeCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";
import emptyCart from "./../../../assets/empty-card.svg"
export function SelectedCoffees() {
    const {cartItems} = UseCart();
    const {cartItemsTotal} = UseCart();
    return(

    <SelectedCoffeesContainer>
        <TitleText size="xs" color="subtitle">
            Cafés Selecionados
        </TitleText>
        <DetailsContainer>
        {cartItems.length < 1 && <img  src={emptyCart}/>}
          
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
          

            <ConfirmationSection />
        </DetailsContainer>
        
    </SelectedCoffeesContainer>
    )
}