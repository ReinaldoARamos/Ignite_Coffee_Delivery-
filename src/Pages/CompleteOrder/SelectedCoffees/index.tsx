import { TitleText } from "../../../Components/Header/Typography";
import { UseCart } from "../../../utils/hooks/useContext";
import { CoffeeCartCard } from "../CoffeeCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export function SelectedCoffees() {
    const {cartItems} = UseCart();

    return(

    <SelectedCoffeesContainer>
        <TitleText size="xs" color="subtitle">
            Cafés Selecionados
        </TitleText>
        <DetailsContainer>

        
          
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
          

            <ConfirmationSection />
        </DetailsContainer>
        
    </SelectedCoffeesContainer>
    )
}