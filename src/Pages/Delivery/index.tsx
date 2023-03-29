import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../Components/Header/Typography";
import { DeliveryContainer, OrderDetailsContainer } from "./style";
import GuyOnABike from "../../../public/coffees/Illustration.png";
import { IconContainer } from "../../Components/InfosWithIcons/styles";
import { InfoWithIcon } from "../../Components/InfosWithIcons";
import { Clock, CurrencyCircleDollar, MapPin } from "phosphor-react";
export function Delivery() {
    const {colors} = useTheme()
  return (
    <DeliveryContainer className="container">
      <div>
        <TitleText size="l">Ihu, seu pedido foi confirmado</TitleText>
        <RegularText size="s" color="subtitle">
          Agora é só aguardar
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
            
        <InfoWithIcon 
          icon={<MapPin weight="fill"/>}
          text="Entregue em Rua Zacarias, 433 "
          iconBg={colors["brand-purple-dark"]}
          
          />
    <InfoWithIcon 
          icon={<Clock weight="fill"/>}
          text="Previsão de entrega"
          iconBg={colors["brand-yellow"]}
          
          />
          <InfoWithIcon 
          icon={<CurrencyCircleDollar weight="fill"/>}
          text="Pagamento na entrega"
          iconBg={colors["brand-yellow-dark"]}
          
          />
       </OrderDetailsContainer>
        <img src={GuyOnABike} />
      </section>
    </DeliveryContainer>
  );
}
