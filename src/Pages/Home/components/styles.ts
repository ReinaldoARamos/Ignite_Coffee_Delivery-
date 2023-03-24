import styled from 'styled-components'
import introUrlPngImg from '../../../assets/Background.png'
export const IntroContainer =  styled.section`

    width: 100%;
    height: 34rem;
    background: ${()=> `url(${introUrlPngImg}) no-repeat center`};
    background-size: cover
`;

export const IntroContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 3.5rem;
`
