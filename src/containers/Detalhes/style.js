{/* ESTYLO CSS DO DETALHES */}

import styled from 'styled-components'

export const BackgroundDetalhes = styled.div` 
   background-image: url(${(props) => props.image});
   height: 50vh;
   background-position: center;
   //background-size: cover;
   //background-repeat: no-repeat;

    &::before {
        content: '';
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%;
        height: 100%; 
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000, rgba(0,0,0, 0));
    }

`

export const ContainerDetalhes = styled.div`

`
