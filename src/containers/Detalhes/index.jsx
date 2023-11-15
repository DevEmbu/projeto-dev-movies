{/* INDEX DO DETLHES */}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerDetalhes} from './style'


function Detalhes() {
     const { id } = useParams()
     const [movie, setMovie] = useState()
     const [movieVideos, setMovieVideos] = useState()
     const [movieCredits, setMovieCredits] = useState()
     const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {
        async function getAllData(){
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
            .then(([movie,videos,credits,similar]) => {
                 console.log(([movie,videos,credits, similar]))                 
                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
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