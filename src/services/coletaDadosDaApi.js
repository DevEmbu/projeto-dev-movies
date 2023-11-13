/* COLETANDO OS DADOS DA API (que vem da HOME) */

import api from "./api";

export async function getMovies(){
    const {data: {results} 
    } = await api.get('/movie/popular')

    return results[0]
}

//chama os top-filmes
export async function getTopMovies(){
    const {data: {results} 
    } = await api.get('/movie/top_rated')

    return results
}

// chama top-serie
export async function getTopSeries(){
    const {data: {results} 
    } = await api.get('/tv/top_rated')

    return results
}

//chama as series populares
export async function getPopularSeries(){
    const {data: {results} 
    } = await api.get('/tv/popular')

    return results
}

//chama os artistas populares
export async function getPessoasPopulares(){
    const {data: {results} 
    } = await api.get('/person/popular')

    return results 
}

//chama o player do Modal
export async function getModalVideos(movieId){
    const {data: {results} 
    } = await api.get(`movie/${movieId}/videos`)

                
    return results[0]
}

export async function getModalCreditos(movieId){
    const {data: {results} 
 } = await api.get(`movie/${movieId}/credits`)
    
   return results[0]
} 

export async function getModalSimilar(movieId){
    const { data: { results }
} = await api.get(`movie/${movieId}/similar`)
    
    return results[0]
  
}

export async function getModalById(movieId){
    const { data: { results }
} = await api.get(`/movie/${movieId}`)

   return results[0]
}
