{/* Index do Home Containers */}

import Button from '../../components/Buttons'
import { ContainerButton } from '../../components/Buttons/style'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { Background, Info, Poster, Container } from './styles'
import { useState, useEffect } from 'react'
import { getImages } from '../../utils/getImages'


function Home(){
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
 


  useEffect(() => {
    async function getMovies(){
        const {data: {results} } = await api.get('/movie/popular')
            
          setMovie(results[11])               
                     
      }
     
      async function getTopMovies(){
        const {data: {results} } = await api.get('/movie/top_rated')
           console.log(results) 
           setTopMovies(results)  
                                  }

      async function getTopSeries(){
        const {data: {results} } = await api.get('/tv/top_rated')
           
              setTopSeries(results)  
                                   } 
      
      async function getPopularSeries(){
         const {data: {results} } = await api.get('/tv/popular')
             
             setPopularSeries(results)
      }

      

     

      getMovies()
      getTopMovies()
      getTopSeries()
      getPopularSeries()

     

  }, [])
 

    return(
     <>
        {movie && (

         <Background img={getImages(movie.backdrop_path)}>
         
          <Container>
            <Info>
             <h2>{movie.title}</h2>
             <p>{movie.overview}</p>
             <h4> ----- Criando Carrossel de Artista - React III ----</h4>

              <ContainerButton>                
                <Button red={ true }>Assista Agora</Button>
                <Button red={ false }>Assista o Trailler</Button>
              </ContainerButton>

            </Info> 

               <Poster>
                 <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
               </Poster>
               
               </Container>
         </Background>

        )}
          {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
          {topSeries && <Slider info={topSeries} title={'Top Series'} />}
          {popularSeries && <Slider info={popularSeries} title={'Series Populares'} />}
          

     </>
    )
}
export default Home