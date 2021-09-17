import React from 'react'
import styled from 'styled-components';
import MoreloImg from './../../../img/morelo.png';


const Morelo = () => {
 return ( 
       <Articulo>
           <Imagen src={MoreloImg} alt="morelo - jugador" />
           <Ah3>Wilson Morelo</Ah3>
           <Ap>Morelo nació en Montería de una familia humilde de un barrio llamado Cantaclaro ...</Ap>
           <p> Saber más...</p>
       </Articulo>
  ); 
}    

const Articulo = styled.div`
    width: 29%; 
    background-color: #fff;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 45px 30px 60px 30px;
    transition: 0.5s;
    text-align: center;

    &:hover {
       box-shadow: 0px 4px 10px rgba(17, 29, 48, .26);
       border: 1px solid #86DE74;
    }
`;

const Imagen = styled.img`
    font-size: 30px;
    width: 50%;
    height: 50%;
    border-radius: 50%;
`;

const Ah3 = styled.h3`
    font-size: 25px;
    margin-top: 18px;
`;

const Ap = styled.p`
    font-weight: 200;
    margin-top: 15px;
    padding-bottom: 20px;
`;


export default Morelo;