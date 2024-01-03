{/* INDEX DO DETLHES */}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerDetalhes, BackgroundDetalhes, Cover, Info } from './style'
import { getModalById, getModalCreditos, getModalSimilar, getModalVideos } from '../../services/coletaDadosDaApi'
import { getImages } from '../../utils/getImages'
import SpanGenres from '../../components/SpanGenres'



function Detalhes() {
     const { id } = useParams()
     const [movie, setMovie] = useState()
     const [movieVideos, setMovieVideos] = useState()
     const [movieCredits, setMovieCredits] = useState()
     const [movieSimilar, setMovieSimilar] = useState()

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
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            })
             .catch((error) => console.error(error))
        }
      
        getAllData()
    
    }, [])

    return(
        <>
        
         {movie && (
           <> 
           <BackgroundDetalhes image={getImages(movie.backdrop_path)} />
           <ContainerDetalhes> 
            <Cover>
                <img src={getImages(movie.poster_path)} />
            </Cover>
              <Info>
                <h2>{movie.tilte}</h2>
                <SpanGenres genres={movie.genres} />
                <p>{movie.overview}</p>
                <div>Creditos</div>
              </Info>
          </ContainerDetalhes>
          </>
         )}
        </>
    )
}

export default Detalhes