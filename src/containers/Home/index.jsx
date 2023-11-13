{/* Index do Home Containers */ }
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Buttons'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container } from './styles'
import { ContainerButton } from '../../components/Buttons/style'
import { getMovies, getPessoasPopulares, getPopularSeries, getTopMovies, getTopSeries } from '../../services/coletaDadosDaApi'



function Home() {
  const [mostrarModal, setMostrarModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [pessoasPopulares, setPessoasPopulares] = useState()
  const navigate = useNavigate()


  useEffect(() => {
    async function getAllData() {     
      Promise.all([ //Fica esperando o resultado da API
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPessoasPopulares()
      ])
        .then(([movie, topMovies, topSeries, popularSeries, pessoasPopulares]) => {
            setMovie(movie)  
            setTopMovies(topMovies)
            setTopSeries(topSeries)
            setPopularSeries(popularSeries)
            setPessoasPopulares(pessoasPopulares) 

      } )
        .catch((error) => console.error(error))
                               
    }

    getAllData()

  }, [])


  return (
    <>
      {movie && (

        <Background img={getImages(movie.backdrop_path)}>
          {mostrarModal && <Modal movieId={movie.id} setMostrarModal={setMostrarModal} />}
          <Container>
            <Info>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <h4> ----- Organizando dados da tela de detalhes - React III ----</h4>

              <ContainerButton>
                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                <Button red={false} onClick={() => setMostrarModal(true)} >Assista o Trailler</Button>
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