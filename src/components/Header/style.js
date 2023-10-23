{/* ESTYLO CSS DO HEADER */}

import styled from 'styled-components'

export const ContainerHeader = styled.div` 
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 50px;
position: relative;
background-color: ${props => props.chaneBackground ? '#000' : 'transparent'};

   img{
      width: 30px;
   }
`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 50px;
`

export const Li = styled.li` 
font-weight: 600;
cursor: pointer;
position: relative;

   a{
      text-decoration: none;
      color: #ffffff;
      font-size: 25px;
    
   }

   &::after{
      content: '';
      height: 3px;
      width: ${props => (props.isActive ? '100%' : 0)};
      background-color: #189b20;
      position: absolute;
      bottom: -5px;
      left: 0;
      transition: width 0.5s ease-in-out;
   }

    &:hover::after{
      width: 100%;
    }

`