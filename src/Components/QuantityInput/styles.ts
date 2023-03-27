import styled from "styled-components"


export const QuantityContainer = styled.div`
flex: 1;
background: ${({theme}) =>  theme.colors["base-button"]};
display: flex ;
align-items:  center;
justify-content: space-between ;
gap: 4px;
border-radius: 6px;
padding: 0.5rem ;
input{
    text-align: center ;
    width:100% ;
    border:  none;
    background: none ;
    color: ${({theme}) =>  theme.colors["base-title"]};

    &ocus{
        outline: none ;
    }
}
`

export const IconWrapper = styled.button.attrs({
    type: "button"
})`

`