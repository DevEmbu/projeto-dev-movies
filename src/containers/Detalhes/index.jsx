{/* INDEX DO DETLHES */}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerDetalhes} from './style'
import { getModalById, getModalCreditos, getModalSimilar, getModalVideos } from '../../services/coletaDadosDaApi'


function Detalhes() {
     const { id } = useParams()
     const [movie, setMovie] = useState()
     const [modalVideos, setModalVideos] = useState()
     const [modalCredits, setModalCredits] = useState()
     const [modalSimilar, setModalSimilar] = useState()

    useEffect(() => {
        async function getAllData(){
            Promise.all([
                getModalById(id),
                getModalVideos(id),
                getModalCreditos(id),
                getModalSimilar(id)
            ])
            .then(([movie,videos,credits,similar]) => {
                 console.log(([movie,videos,credits, similar]))                 
                setMovie(movie)
                setModalVideos(videos)
                setModalCredits(credits)
                setModalSimilar(similar)
            })
             .catch((error) => console.error(error))
        }
      
        getAllData()
    
    }, [])

    return(
        <ContainerDetalhes> 
           <div>Detalhes do Container</div>
        </ContainerDetalhes>
    )
}

export default Detalhes