import { BenefitsContainer, IntroContainer, IntroContent, IntroText, IntroTitle } from "./styles";
import CoffeeIntro from "../../../assets/IntroCoffee.png";
export function Intro() {
  return (
    <>
      <IntroContainer>
        <IntroContent className="container">
          <div>
            <section>
              <IntroTitle size="xl" color="subtitle" as="h3">
                Encontre o café perfeito para qualquer hora do dia
              </IntroTitle>
            </section>
           <IntroText size="l">
            Com o Coffe Delivery você recebe seu café onde estiver a qualquer hora
           </IntroText>

           <BenefitsContainer>
          <p>DOri</p>
          <p>DOri</p>
          <p>DOri</p>
          <p>DOri</p> 
        </BenefitsContainer>
        
          </div>

          
          <img src={CoffeeIntro} />
        </IntroContent>
        
      </IntroContainer>
    </>
  );
}
