{/* ESTYLO CSS DO MODAL*/}

import styled from 'styled-components'

export const Background = styled.div`
 height: 100vh;
 width: 100vw;
 background: rgba(0,0,0, 0.6);
 z-index: 999;
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
`

export const Container = styled.div`
background: #000000;
width: 70%; 
display: flex; 
position: fixed; 
justify-content: center; 
align-items: center;
padding: 30px;
max-width: 600px;

 iframe{
    border: none;
 }

 button {
   margin-left: 25px;
   margin-top: -350px;
   width: 30px; 
   background-color: red;
   border: none;
   border-radius: 3px;
   cursor: pointer;
   color: #ffffff;
 }
`