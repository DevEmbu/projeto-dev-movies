{/* INDEX DO MODAL */}

import { useEffect, useState} from "react"
import api from "../../services/api"
import { Container, Background } from "./style"



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
        <Background>
            {movie && (
        <Container> 
          <iframe src={`https://www.youtube.com/embed/${movie.key}`}
            title='YouTube video player'
            height="315px"
            width="560"

             > 
           </iframe>

        </Container>
          )}
        </Background>
    )
}

export default Modal