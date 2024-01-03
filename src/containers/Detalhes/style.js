{/* ESTYLO CSS DO DETALHES */}

import styled from 'styled-components'

export const BackgroundDetalhes = styled.div` 
   background-image: url(${(props) => props.image});
   height: 50vh;
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

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
      display: flex;
      justify-content: center;
      align-items: center; 
      height: 100%; 
      max-width: 1500px; 
      margin-top: -100px;

`
export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;

    img {
        width: 450px;
        border-radius: 30px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        z-index: 99;
    }

`

export const Info = styled.div`
    padding: 20px; 
    width: 50%; 
    z-index: 99; 
    display: flex;
    align-items: flex-start; 
    flex-direction: column; 


    h2{ 
        font-size: 30px;
        font-weight: 700;
        color: #ffffff;
    }

    p{ 
        font-weight: 700; 
        color: #ffffff;
        margin-top: 20px;
        margin-bottom: 30px;
    }

`