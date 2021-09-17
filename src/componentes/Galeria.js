import React from 'react'
import styled from 'styled-components';
import ContactoFooter from './componentes_contacto/ContactoFooter';
import MainGaleria from './componentes_galeria/MainGaleria';


const Galeria = () => {
 return ( 
        <ContenedorGaleria>
             <MainGaleria />
            <ContactoFooter />
        </ContenedorGaleria>
     ); 
}    


const ContenedorGaleria = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    margin: 0px auto;
    padding: 1rem;
`;

export default Galeria;