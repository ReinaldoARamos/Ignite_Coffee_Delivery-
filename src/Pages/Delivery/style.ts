import styled from "styled-components";

export const DeliveryContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const OrderDetailsContainer = styled.div`
/*
display: flex;
border: 1px solid red;
border-radius: 9px;
flex-direction: column;
*/ 
`
