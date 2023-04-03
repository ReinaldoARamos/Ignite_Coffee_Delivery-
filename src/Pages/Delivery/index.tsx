import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../Components/Header/Typography";
import { DeliveryContainer, OrderDetailsContainer } from "./style";
import GuyOnABike from "../../../public/coffees/Illustration.png";
import { IconContainer } from "../../Components/InfosWithIcons/styles";
import { InfoWithIcon } from "../../Components/InfosWithIcons";
import { Clock, CurrencyCircleDollar, MapPin } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { orderData } from "../CompleteOrder";
import { unknown } from "zod";
import { PaymentMethod } from "../CompleteOrder/components/CompleteOrderForm/PaymentForm";


interface LocationType{
  state: orderData
}
export function Delivery() {
  const { colors } = useTheme();
  const {state} = useLocation() as unknown as LocationType; //pega os dados

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
            icon={<MapPin weight="fill" />}
            text={
              <RegularText size="s">
                Entrega em {state.street} <br />{" "}
                <strong> {state.city} - Santa Catarina,  {state.uf}</strong>
              </RegularText>
            }
            iconBg={colors["brand-purple-dark"]}
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            text={
              <RegularText >
                Previsão de entrega <br /> <strong>20-30 minutos</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow"]}
          />
          <InfoWithIcon
            icon={<CurrencyCircleDollar weight="fill" />}
            text={
              <RegularText size="s" color="subtitle">
                Forma de pagamento <br /> <strong> {PaymentMethod[state.paymentMethod].label}</strong>
              </RegularText>
            }
            iconBg={colors["brand-yellow-dark"]}
          />
        </OrderDetailsContainer>
        <img src={GuyOnABike} />
      </section>
    </DeliveryContainer>
  );
}
