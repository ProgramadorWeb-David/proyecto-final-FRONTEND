import React from 'react'
import styled from 'styled-components';
import FooterParteUno from './FooterParteUno';
import FooterParteDos from './FooterParteDos';


const Footer = () => {
 return ( 
       <ContenedorFooter>
            <FooterParteUno />
            <FooterParteDos />
       </ContenedorFooter>
  ); 
}    


const ContenedorFooter = styled.footer`
    font-family: 'Open Sans', sans-serif;
    background-color: #3f485b;
    padding-top: 30px;
    margin: auto;
    overflow: hidden;
`;

export default Footer;