import React from 'react'
import styled from 'styled-components';
import './../../index.css';
import Burian from './jugadores/Burian';
import Piovi from './jugadores/Piovi';
import Mura from './jugadores/Mura';
import Garces from './jugadores/Garces';
import Delgado from './jugadores/Delgado';
import Lertora from './jugadores/Lertora';
import Aliendro from './jugadores/Aliendro';
import Castro from './jugadores/Castro';
import Bernardi from './jugadores/Bernardi';
import Morelo from './jugadores/Morelo';
import Farias from './jugadores/Farias';
import Dominguez from './jugadores/Dominguez';


const HomeParteDos = () => {
 return ( 
      <ContenedorHomeDos>
         <ContenedorFondo>

             <Contenedor1>
                <h2 className="titulo" >Plantilla de Jugadores de Colón</h2>
                
                <ContenedorArticulo>  {/* Aqui van todos los jugadores */}
                    <Burian />
                    <Piovi />
                    <Mura />
                    <Garces />
                    <Delgado />
                    <Lertora />
                    <Aliendro />
                    <Castro />
                    <Bernardi />
                    <Morelo />
                    <Farias />
                    <Dominguez />
                </ContenedorArticulo>

             </Contenedor1>
             
         </ContenedorFondo>
      </ContenedorHomeDos>
  ); 
}    

const ContenedorHomeDos = styled.section`
    background-color: #fff;
`; 


const ContenedorFondo = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    margin: 0px auto;
`;


const Contenedor1 = styled.div`
    width: 90%;
    max-width: 1024px;
    margin: 0px auto;
    overflow: hidden;
    padding: 60px 0px;
`;

const ContenedorArticulo = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    justify-content: space-around;
`;

export default HomeParteDos;