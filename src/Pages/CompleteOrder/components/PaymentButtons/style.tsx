import styled from "styled-components";

export const PaymentButtonStyle = styled.button`

 input{
  
margin-right: 200rem ;
visibility: hidden ;
  appearance: none;
  border: none ;
  display: none ;
  overflow: hidden ;
 }
 
`;

export const ContentContainer  = styled.div`
 
  border: none;
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
user-select: none ;

`