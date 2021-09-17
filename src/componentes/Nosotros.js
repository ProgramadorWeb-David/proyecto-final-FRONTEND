import React from 'react'
import styled from 'styled-components';


const Nosotros = () => {
 return ( 
        <ContenedorNosotros>
            <P>Gracias por seguirnos, estamos en proceso de actualizaciones, disculpe las molestias!</P>
        </ContenedorNosotros>
     ); 
}   

const ContenedorNosotros = styled.div`
    width: 100%;
    height: 10rem;
    max-width: 1000px;
    margin: 10rem auto;
    padding-top: 3.5rem;
    background-color: #f2f2f2;
    text-align: center;
`;

const P = styled.p`
   font-size: 2.2rem;
   padding: 3rem auto;
   color: #0062cc;
`;

export default Nosotros;