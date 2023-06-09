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
width: 0.875rem ;
height: 0.875rem ;
background: none ;
border: none ;
color: ${({theme}) =>  theme.colors["brand-purple-dark"]} ;
display: flex;
transition: 0.4s ;

&:disabled{
    opacity: 0.4 ;

}

&:not(:disabled){
    color: ${({theme}) =>  theme.colors["brand-purple"]} ;
    
    
}

&:hover{
    color: ${({theme}) =>  theme.colors["brand-purple"]} ;
}
`