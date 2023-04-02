import styled, { css } from "styled-components";

export const PaymentButtonStyle = styled.button`

 input{
  

visibility: hidden ;
  appearance: none;

  display: none ;

 }
 
 input:checked + label div{
${(theme) => css`
background: ${({ theme }) => theme.colors["brand-purple"]}; 
border: 1px solid ${({ theme }) => theme.colors["brand-purple"]};
`}
 }
 &:hover {
    background: 1px solid ${({ theme }) => theme.colors["brand-purple-light"]};

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

  }
user-select: none ;

`