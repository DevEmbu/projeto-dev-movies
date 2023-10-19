
import {Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import Defaultlayout from '../layout/DefaultLayout'


function Rotas(){

    return (
        <Routes>
          <Route element={<Defaultlayout />}>
          
            <Route path="/" element={<Home />} />
            <Route path="/filmes" element={<Movies />} />
            <Route path="/series" element={<Series />} />
          </Route>
         
        </Routes>

    )
} 
export default Rotas