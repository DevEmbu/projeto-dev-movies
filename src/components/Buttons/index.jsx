{/* INDEX DO BUTTON */}

import { ButtonBranco, ButtonRed } from "./style"

function Button({children, red,...rest}) {

    return(
        <> 
           {red ? (<ButtonRed {...rest}>{children}</ButtonRed>) 
           : (<ButtonBranco {...rest}>{children}</ButtonBranco>)}
        </>
    )
}

export default Button