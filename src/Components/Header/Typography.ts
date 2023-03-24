import styled from 'styled-components'


interface TitleTextPros{

    color?: "title" | "subtitle" | "text",
    size?: "xl" | "l" | "m" | "s" | "xs"
 }
export const TitleText = styled.h1<TitleTextPros>`
color: ${({theme, color})=> theme.colors[`base-${color ?? "title"}`]};
font-size: ${({theme, size})=> theme.textSizes[`title-title-${size ?? "m"}`]};
`