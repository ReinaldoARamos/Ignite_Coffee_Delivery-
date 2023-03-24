import { IntroContainer, IntroContent, IntroTitle } from "./styles";
import CoffeeIntro from "../../../assets/IntroCoffee.png";
export function Intro() {
  return (
    <>
      <IntroContainer>
        <IntroContent className="container">
          <div>
            <section>
              <IntroTitle size="xl">
                Encontre o café perfeito para qualquer hora do dia
              </IntroTitle>
            </section>
          </div>
          <img src={CoffeeIntro} />
        </IntroContent>
      </IntroContainer>
    </>
  );
}
