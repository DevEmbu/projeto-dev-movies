{/* INDEX DO BUTTON */}

import { ButtonBranco, ButtonRed } from "./style"

function Button({children, red}){

    return(
        <> 
           {red ? (<ButtonRed>{children}</ButtonRed>) 
           : (<ButtonBranco>{children}</ButtonBranco>)}
        </>
    )
}

export default Button