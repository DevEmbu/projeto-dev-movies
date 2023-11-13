{/* INDEX DO MODAL */}

import { useEffect, useState} from "react"
import { Container, Background } from "./style"
import { getModalVideos } from "../../services/coletaDadosDaApi"



function Modal({movieId, setMostrarModal}){
    const [movie, setMovie] = useState()

    useEffect(() => {
      //foi chamado la na coleta de dados
        async function getMovies(){            
              setMovie(await getModalVideos(movieId))        
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