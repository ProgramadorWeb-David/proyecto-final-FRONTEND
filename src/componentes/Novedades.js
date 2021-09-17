import React from 'react'
import styled from 'styled-components';
import ContactoFooter from './componentes_contacto/ContactoFooter';
import MainNovedades from './componentes_novedades/MainNovedades';


const Novedades = () => {
 return ( 
        <ContenedorNovedades>
              <MainNovedades />
              <ContactoFooter />
        </ContenedorNovedades>
     ); 
}    


const ContenedorNovedades = styled.div`
    background-color: #f2f2f2;
    max-width: 1100px;
    margin: 1rem auto;
    margin-top: 10rem;
`;

export default Novedades;