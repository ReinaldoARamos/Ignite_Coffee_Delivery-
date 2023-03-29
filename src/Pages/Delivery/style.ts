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
  width: 32.875rem;
  height: 16.875rem;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  margin-right: 6.375rem ;
  border-radius: 6px 44px 6px 44px;
`;
