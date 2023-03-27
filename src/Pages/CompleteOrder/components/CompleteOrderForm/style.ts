import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div`
display: flex ;
flex-direction: column ;
gap:0.75rem;
width: 40rem ;
`

export const SectionBaseStyle = styled.div`
width: 100% ;
background: ${({theme}) => theme.colors["base-card"]} ;
border: 6px ;
padding: 2.5rem ;
` 

export const AdressFormContainer = styled.div`
width: 100% ;
display: grid ;
grid-template-columns: 12.5rem 17.25rem 3.75rem ;
row-gap: 1rem ;
grid-auto-flow: dense
`