import React from 'react'
import styled from 'styled-components';
import './../../index.css';
import estrella2021 from './../../img/estrella2021.png';


const HomeParteUno = () => {
 return ( 
       <ContenedorHome>
          <ContenidoHeader>
                <TextosHeader>
                    <h1>colón de santa fe, 1905</h1>
                    <p>Campeón Copa de la Liga Profesional del fútbol Argentino. 
                        Día histórico en el fútbol argentino. Colón 
                        de Santa Fe se consagró campeón tras golear en la gran 
                        final a Racing por 3 tantos contra 0.</p>
                    <button className="btnEfecto">Saber Más</button>
                </TextosHeader>

                <ImagenEstrella src={ estrella2021 } alt="estrella de campeón" />
          </ContenidoHeader>   
       </ContenedorHome>
  ); 
}    

const ContenedorHome = styled.div`
    width: 90%;
    max-width: 1024px;
    margin: 0px auto;
    overflow: hidden;
`;


const ContenidoHeader = styled.section`
    width: 100%;
    height: 37.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const TextosHeader = styled.section`
    & > h1 {
       text-transform: uppercase;
       margin-top: 1.25rem;
       margin: 25px auto;
    }

    & > p {
       font-weight: 300;
       margin-top: -5px;
       color: #3f485b;
       max-width: 470px;
       margin-bottom: 8px;
    }
`;


const ImagenEstrella = styled.img`
   width: 35rem;
`;

export default HomeParteUno;