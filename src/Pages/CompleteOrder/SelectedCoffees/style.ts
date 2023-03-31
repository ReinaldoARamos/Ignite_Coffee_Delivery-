import styled from "styled-components";
import { SectionBaseStyle } from "../components/CompleteOrderForm/style";

export const SelectedCoffeesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.75rem;
width: 40rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
border-radius: 6px 44px 6px 44px;
display: flex;
flex-direction: column;

.empty{
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5rem
}
`

export const ConfirmationSectionContainer = styled.section`
display: flex;
flex-direction: column;
gap: 0.8rem;

>div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}


`