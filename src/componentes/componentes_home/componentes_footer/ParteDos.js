import React from 'react'
import styled from 'styled-components';


const ParteDos = () => {
 return ( 
    <ContentFoo>
        <h4>Secciones</h4>
        <p>Inicio de la página</p>
        <p>Plantilla de jugadores</p>
        <p>Copa Liga Profesional</p>
        <p>Revista de colón campeón</p>
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
        font-size: 16px;
        padding: 5px 0;
    }

    & > p:hover {
        color: #f2c640;
        cursor: pointer;
    }
`;

export default ParteDos;