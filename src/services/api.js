
import axios from 'axios'

const api = axios.create({
      baseURL:'https://api.themoviedb.org/3/',
      params:{
              api_key: '199c90afabe374492787e7801dc85d9e',
              language: 'pt-BR',
              pages: 1

             }     

})
export default api