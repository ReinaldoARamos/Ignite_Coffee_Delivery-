import styled from "styled-components";

export const PaymentButtonStyle = styled.button`
  border: 1px solid ${({ theme }) => theme.colors["brand-purple-dark"]};
  width: 14rem;
  height: 3.188rem;
  display: flex;
  align-items: center;
  gap: 0.725rem;
  justify-content: center;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  color: ${({ theme }) => theme.colors["base-label"]};
  transition: 0.4s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors["brand-purple"]};
    background: ${({theme}) => theme.colors["base-white"]} ;
  }
`;
