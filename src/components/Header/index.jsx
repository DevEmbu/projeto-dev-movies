import { useState } from 'react'
import LogoHeader from '../../assets/DevEmbu.png'
import { ContainerHeader, Menu, Li } from './style'
import { Link, useLocation } from 'react-router-dom'

function Header(){
    const [changeBackground, setChangeBackground] = useState(false)
    const {pathname} = useLocation()
      
  
    window.onscroll = () => {
        if(!changeBackground && window.pageYOffset > 125) {
            setChangeBackground(true)
        }
        if(changeBackground && window.pageYOffset <= 125) {
            setChangeBackground(false)
        }
        }
    
   
    return(
        <ContainerHeader changeBackground={changeBackground}>
        
         <img src={ LogoHeader } alt='Logo-Devembu'/> 
         
         <Menu>
                <Li isActive={pathname === '/'}> <Link to="/">Home</Link>  </Li>
                <Li isActive={pathname.includes('filmes')}> <Link to="/filmes">Filmes</Link> </Li>
                <Li isActive={pathname.includes('series')}> <Link to="/series">Series</Link> </Li>
        </Menu>
        </ContainerHeader>
    )
}

export default Header