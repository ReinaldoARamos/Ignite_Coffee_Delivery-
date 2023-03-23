import styled from 'styled-components';

export const HeaderLayout = styled.div`
width: 100%;
height:  6.5rem;
background:${({theme}) =>  theme.colors['base-background']};
display: flex;
align-items: center;
justify-content: center;

>div{
    width: 100%;
    display: flex;
    justify-content: space-between;
   
}
`