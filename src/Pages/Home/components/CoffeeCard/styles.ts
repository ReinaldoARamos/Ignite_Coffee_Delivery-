import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
width: 100% ;
background: ${({theme}) =>  theme.colors["base-card"]};
border-radius: 6px 36px 6px 36px ;
padding: 1.25rem ;
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
padding-top:0 ;
img{
    width: 7.5rem ;
    height: 7.5rem;
    margin-top: -1.25rem ;
}
`

export const Tags = styled.div`
width: 100% ;
display: flex ;

align-items: center ;
gap: 4rem;
margin-top: 1rem;
margin-bottom: 1.25rem;
flex-wrap: wrap ; //caso hajam muitas tags ele quebra e nao buga o layout

span{
    background: ${({theme}) =>  theme.colors["brand-yellow-light"]};
    color: ${({theme}) =>  theme.colors["brand-yellow-dark"]};
    font-size:  ${({theme}) =>  theme.textSizes["components-tag"]};
    text-transform: uppercase ;
    padding: 0.25rem 0.25rem ;
    border-radius: 9999px ;
    font-weight: 700 ;
}
`