import styled from 'styled-components'

export const Background = styled.div`
      
      background-image: url(${props => props.img} );
      height: 100vh;
      background-position: center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;

 &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;  
    background-color: rgba(0,0,0, 0.4);
 
} 

`
export const Container = styled.div`
       display: flex;
       justify-content: space-around;
       align-items: center;
       height: 100%;
       max-width: 1500px;
`


export const Info = styled.div`
   z-index: 2;
   padding: 20px;
   width: 50%;

   h2{
    font-size: 3rem;
    width: 400px;
    font-weight: 700;
    color: #fff;
    margin-left: 30px;
   }

   p{
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin: 30px 0 0 20px;
    text-align: justify;
    text-indent: 50px;
   }

   h4{
     font-size: 12px;
     font-weight: 100;
     color: #FFD700;
     margin-left: 50px;
   }
`
export const Poster = styled.div`
    z-index: 2;
    img{
        width: 400px;
        border-radius: 30px;
        

    }
`