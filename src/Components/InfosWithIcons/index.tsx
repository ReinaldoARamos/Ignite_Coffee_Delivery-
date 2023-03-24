import { ReactNode } from "react";
import { IconContainer, InfoWithContainer } from "./styles";

interface infoWithIconProps{
    icon: ReactNode,
    text: string | ReactNode;
    iconBg: string

}

export function InfoWithIcon({iconm text, iconBg} : infoWithIconProps) {
  return (
  <>
  <InfoWithContainer>
    <IconContainer>{icon}</IconContainer>
  </InfoWithContainer>
  </>
  )
}
