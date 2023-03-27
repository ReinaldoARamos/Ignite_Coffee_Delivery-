import { MapPin } from "phosphor-react";
import { TitleText } from "../../../../Components/Header/Typography";
import { FormSectionContainer } from "../../styles";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer } from "./style";
import { useTheme } from "styled-components";
import { AdressForm } from "./AdressForm";
export function CompleteOrderForm() {
  const colors = useTheme()
    return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer >
        <SectionTitle
          
          icon={<MapPin size={22} weight="fill" color={colors.colors["brand-yellow-dark"]}/>}
          title="Endereço de entrega"
          subtitle="Informe o endereço de entrega"
          
        />
        <AdressForm/>
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
