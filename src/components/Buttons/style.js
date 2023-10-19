{/* ESTYLO CSS DO BUTTON */}

import styled, { css } from 'styled-components'

const buttonStyle = css`
     border: 4px solid #ffffff;
     background: transparent;
     color: #ffffff;
     border-radius: 30px;
     padding: 10px 20px;
     font-size: 20px; 
     font-weight: 500;
     cursor: pointer;

     &:hover{
        color: #ff0000;
        background: #ffffff;
     }

`
export const ButtonBranco = styled.button` 
  ${buttonStyle}

`
export const ButtonRed = styled.button`
   ${buttonStyle}
   background: #ff0000;
   border: 4px solid transparent;
   
  &:hover{
   background: #ff0000;
   border: 4px solid transparent;
   box-shadow: 10px 10px 20px 0px rgba(196,2,2,1);
   color: #000;
  }
`
export const ContainerButton = styled.div`
   display: flex;
   gap: 30px;
   margin-top: 30px;
`