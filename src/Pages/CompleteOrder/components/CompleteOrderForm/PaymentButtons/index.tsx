import { ReactNode } from "react"
import { PaymentButtonStyle } from "./style"

interface PayButtonProps{
 icon: ReactNode,
 text: string  
}

export function PaymentButton({icon, text} : PayButtonProps) {
    
        return(
        <PaymentButtonStyle >
           {icon} {text}
        </PaymentButtonStyle>
        )
}