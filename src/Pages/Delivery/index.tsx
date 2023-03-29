import { useTheme } from "styled-components";
import { TitleText } from "../../Components/Header/Typography";
import { DeliveryContainer } from "./style";

export function Delivery() {
  const colors = useTheme();
  return (
    <DeliveryContainer className="container">
      <TitleText size="l">Ihu, seu pedido foi confirmado</TitleText>
    </DeliveryContainer>
  );
}
