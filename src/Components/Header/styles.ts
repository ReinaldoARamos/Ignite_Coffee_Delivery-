import styled, { css } from "styled-components";

export const HeaderLayout = styled.div`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky ;
  top: 0;
  left:  0;
  z-index: 5;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border: none;
  padding: 0 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
     svg  color: ${theme.colors[`brand-purple`]};
    `}

    span{

    display: flex;
    border-radius: 50%;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    background: ${({theme}) => theme.colors["brand-yellow-dark"]};
    color: ${({theme}) => theme.colors["base-white"]};
    align-items: center;
    justify-content: center;


    }
`;
