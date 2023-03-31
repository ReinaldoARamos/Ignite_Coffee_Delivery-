import { RegularText, TitleText } from "../../../Components/Header/Typography";
import { UseCart } from "../../../utils/hooks/useContext";
import { CoffeeCartCard } from "../CoffeeCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";
import emptyCart from "./../../../assets/empty-card.svg"
export function SelectedCoffees() {
    const {cartItems} = UseCart();
    const {cartItemsTotal} = UseCart();
    
    if(cartItems.length >=1 ){
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
    } else{
        return(
            <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>
            <DetailsContainer>
            
            <RegularText size="s" >Carrinnho Vazio!</RegularText>
            <img  src={emptyCart} className="empty"/>
            </DetailsContainer>
            
        </SelectedCoffeesContainer>
        )
    }
 
}