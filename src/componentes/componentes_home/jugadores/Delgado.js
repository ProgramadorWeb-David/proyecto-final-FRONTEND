import React from 'react'
import styled from 'styled-components';
import DelgadoImg from './../../../img/delgado.png';


const Delgado = () => {
 return ( 
       <Articulo>
           <Imagen src={DelgadoImg} alt="delgado - jugador" />
           <Ah3>Rafael Delgado</Ah3>
           <Ap>Debutó en el primer equipo de Rosario Central el 4 de abril de 2011 en ...</Ap>
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


export default Delgado;