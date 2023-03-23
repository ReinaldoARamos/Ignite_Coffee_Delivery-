import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  align-items: center;
  justify-content: center;

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
`;

export const HeaderButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 4rem;
   min-width: 2.3rem;
   height: 2.3rem;
   border: none;
   padding: 0 0 0.5rem;
   position: relative;
`;
