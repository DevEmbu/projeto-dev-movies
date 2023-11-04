{/* INDEX DO MODAL */}

import { useEffect, useState} from "react"
import api from "../../services/api"
import { Container, Background } from "./style"



function Modal({movieId, setMostrarModal}){
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies(){
            const {data: {results} } = await api.get(`movie/${movieId}/videos`)

                console.log(results[0])
              setMovie(results[0])        
          }
          
          getMovies()
        }, [])

    return(
        <Background onClick={() => setMostrarModal(false)}>
            {movie && (
        <Container> 
          <iframe src={`https://www.youtube.com/embed/${movie.key}`}
            title='YouTube video player'
            height="315px"
            width="560px"               

             > 
           </iframe>

        </Container>
          )}
        </Background>
    )
}

export default Modal