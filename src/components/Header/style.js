{/* ESTYLO CSS DO HEADER */}

import styled from 'styled-components'

export const ContainerHeader = styled.div`
min-height: 100px;
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 50px;
background-color: ${(props) => props.changeBackground ? '#000' : 'transparent'};
transition: background-color 0.6s ease-in-out;

   img{
      width: 20%;

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
font-size: 22px;
position: relative;



   a{
      text-decoration: none;
      color: #ffffff;
    
      
   }

   &::after {
      content: '';
      height: 3px;
      width: ${(props) => (props.isActive ? '100%' : 0)};
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