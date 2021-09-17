import React from 'react'
import styled from 'styled-components';


const ParteTres = () => {
 return ( 
    <ContentFoo>
        <h4>Enlaces de interes</h4>
        <p> Términos y Condiciones </p>
        <p> Quien Soy? </p>
        <p> Libro de Reclamos </p>
        <p> Ayuda </p>
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

export default ParteTres;