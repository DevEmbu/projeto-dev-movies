{/* INDEX DO CARDS */}

import { getImages } from '../../utils/getImages'
import { Container } from './style'

function Cartao({item }){

    return(
        
           <Container>
             <img src={getImages(item.poster_path)} />
               <h3> {item.original_title} </h3>
            </Container>
       
    )
}

export default Cartao