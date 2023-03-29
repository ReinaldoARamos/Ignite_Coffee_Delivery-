import styled from "styled-components";

export const DeliveryContainer = styled.div`
display: flex;
margin-top: 5rem;
flex-direction: column;
gap: 2.5rem;

h1{
color: ${({theme}) => theme.colors["brand-yellow-dark"]};
}

`