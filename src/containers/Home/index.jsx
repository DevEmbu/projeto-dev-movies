{/* Index do Home Containers */}
import { useState, useEffect } from 'react'

import Button from '../../components/Buttons'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container } from './styles'
import {ContainerButton} from '../../components/Buttons/style'



function Home(){
  const [mostrarModal, setMostrarModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [pessoasPopulares, setPessoasPopulares] = useState()
  

 


  useEffect(() => {
    async function getMovies(){
        const {data: {results} } = await api.get('/movie/popular')
            console.log(results)
          setMovie(results[5])               
                     
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

      async function getPessoasPopulares(){
        const {data: {results} } = await api.get('/person/popular')
                
              setPessoasPopulares(results)
      }

    
      getMovies()
      getTopMovies()
      getTopSeries()
      getPopularSeries() 
      getPessoasPopulares()       


     }, [])
 

    return(
     <>
        {movie && (

         <Background img={getImages(movie.backdrop_path)}>
             {mostrarModal && <Modal movieId={ movie.id } setMostrarModal={setMostrarModal} />}
          <Container>
            <Info>
             <h2>{movie.title}</h2>
             <p>{movie.overview}</p>
             <h4> ----- Controlando a visibilidade do Modal de Filmes - React III ----</h4>
         
              <ContainerButton>                
                <Button red={ true }>Assista Agora</Button>
                <Button red={ false } onClick={() => setMostrarModal(true)} >Assista o Trailler</Button>
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
          {pessoasPopulares && <Slider info={pessoasPopulares} title={'Artistas Populares'} />}
          

     </>
    )
}
export default Home