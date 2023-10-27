{/* ESTYLO CSS DO MODAL*/}

import styled from 'styled-components'

export const Background = styled.div`
 height: 100vh;
 width: 100vw;
 background: #000;
 opacity: 0.5;
 z-index: 999;
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;

`

export const Container = styled.div`
background: #000;
width: 50%; 
display: flex; 
position: fixed; 
justify-content: center; 
align-items: center;
padding: 50px;
max-width: 1200px;

`