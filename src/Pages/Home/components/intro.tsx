import { IntroContainer, IntroContent } from "./styles";
import CoffeeIntro from '../../../assets/IntroCoffee.png'
export function Intro() {
  return (
    <>
      <IntroContainer>
        <IntroContent className="container">
            <div>
                <section>
                    
                </section>
                </div>
                <img src={CoffeeIntro}/>

        </IntroContent>
      </IntroContainer>
    </>
  );
}
