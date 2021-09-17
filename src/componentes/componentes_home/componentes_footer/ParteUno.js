import React from 'react'
import styled from 'styled-components';


const ParteUno = () => {
 return ( 
    <ContentFoo>
        <h4>David Leonel Abrán</h4>
        <p>Estudiante de la diplomatura en programación web full stack con React JS en
           la Universidad Tecnológica Nacional, Facultad Regional Buenos Aires. </p>
    </ContentFoo>
  ); 
}    


const ContentFoo = styled.div`
    max-width: 145px;
    min-width: 220px;

    & > h4 {
        color: #fff;
        border-bottom: 3px solid #f2c640;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }

    & > p {
        color: #ccc;
    }
`;

export default ParteUno;