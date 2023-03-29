import { useTheme } from "styled-components";
import { RegularText, TitleText } from "../../Components/Header/Typography";
import { DeliveryContainer } from "./style";

export function Delivery() {
  return (
    <DeliveryContainer className="container">
      <div>
        <TitleText size="l">Ihu, seu pedido foi confirmado</TitleText>
        <RegularText size="s" color="subtitle">
          Agora é só aguardar
        </RegularText>
      </div>
    </DeliveryContainer>
  );
}