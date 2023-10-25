{/* INDEX DO MODAL */}

import { useEffect, useState} from "react"
import api from "../../services/api"
import { Container } from "./style"

function Modal ({movieId}){
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies(){
            const {data: {results} } = await api.get(`/movie/${movieId}/videos`)
                console.log(results)
              setMovie(results)        
          }
          
          getMovies()
        }, [])

    return(
        <Container> 
          <div>{movieId}</div>
        </Container>
    )
}

export default Modal