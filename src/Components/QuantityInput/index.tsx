import { QuantityContainer } from "./styles";

export function QuantityInput() {
    return(
        <QuantityContainer>
            <input type="number" readOnly value={1}/>
        </QuantityContainer>
    )
}