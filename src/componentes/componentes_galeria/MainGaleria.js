import React from 'react'
import styled from 'styled-components';
import Foto1 from './../../img/c1.jpg';
import Foto2 from './../../img/c2.jpg';
import Foto3 from './../../img/c3.jpg';
import Foto4 from './../../img/c4.jpg';
import Foto5 from './../../img/c5.jpg';
import Foto6 from './../../img/c6.jpg';
import Foto7 from './../../img/c7.jpg';
import Foto8 from './../../img/c8.jpg';
import Foto9 from './../../img/c9.jpg';
import Foto10 from './../../img/c10.jpg';
import Foto11 from './../../img/c11.jpg';
import Foto12 from './../../img/c12.jpg';
import Foto13 from './../../img/c13.jpg';
import Foto14 from './../../img/c14.jpeg';
import Foto15 from './../../img/c15.jpg';
import Foto16 from './../../img/c16.jpg';


const MainGaleria = () => {
 return ( 
     <SectionGaleria>
         <H2>Galería de Imágenes</H2>

         <CajaPadre>
              <CajaHija> <Imagen src={Foto1} alt="colon foto 1" /> </CajaHija>
              <CajaHija> <Imagen src={Foto2} alt="colon foto 2" /> </CajaHija>
              <CajaHija> <Imagen src={Foto3} alt="colon foto 3" /> </CajaHija>
              <CajaHija> <Imagen src={Foto4} alt="colon foto 4" /> </CajaHija>
              <CajaHija> <Imagen src={Foto5} alt="colon foto 5" /> </CajaHija>
              <CajaHija> <Imagen src={Foto6} alt="colon foto 6" /> </CajaHija>
              <CajaHija> <Imagen src={Foto7} alt="colon foto 7" /> </CajaHija>
              <CajaHija> <Imagen src={Foto8} alt="colon foto 8" /> </CajaHija>
              <CajaHija> <Imagen src={Foto9} alt="colon foto 9" /> </CajaHija>
              <CajaHija> <Imagen src={Foto10} alt="colon foto 10" /> </CajaHija>
              <CajaHija> <Imagen src={Foto11} alt="colon foto 11" /> </CajaHija>
              <CajaHija> <Imagen src={Foto12} alt="colon foto 12" /> </CajaHija>
              <CajaHija> <Imagen src={Foto13} alt="colon foto 13" /> </CajaHija>
              <CajaHija> <Imagen src={Foto14} alt="colon foto 14" /> </CajaHija>
              <CajaHija> <Imagen src={Foto15} alt="colon foto 15" /> </CajaHija>
              <CajaHija> <Imagen src={Foto16} alt="colon foto 16" /> </CajaHija>
         </CajaPadre>
     </SectionGaleria>
  ); 
}    


const SectionGaleria = styled.section`
    width: 90%;
    max-width: 1200px;
    border-radius: 1rem;
    margin: 1rem auto;
    /* gradiente de fondo echo en página: */
    /* https://www.cssmatic.com */
    background: rgba(255,255,255,1);
    background: -moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)));
    background: -webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -o-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -ms-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
    
    /* opacidad */
    -webkit-box-shadow: 2px 2px 15px 0px rgba(74,74,74,0.44);
    -moz-box-shadow: 2px 2px 15px 0px rgba(74,74,74,0.44);
    box-shadow: 2px 2px 15px 0px rgba(74,74,74,0.44);
`;


const H2 = styled.h2`
    color: #1d273b;
    font-weight: 300;
    font-size: 200%;
    border-bottom: 5px solid #f2c640;
    padding-bottom: 7px;
    padding-top: 3rem;
    margin: 1.50rem auto;
    width: 40%;
    text-align: center;
`;


const CajaPadre = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    row-gap: 3rem;
    width: 92%;
    margin: 5rem auto 2rem auto;
`;


const CajaHija = styled.div`
    width: 100%;
    max-width: 1200px;
    border-radius: 1.6rem;
    transition: 0.5s;
`;


const Imagen = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 1.6rem;
    opacity: 0.6;
    object-fit: cover;

    &:hover {
        border: 1px solid rgb(134, 222, 116);
        -webkit-box-shadow: 2px 2px 15px -4px rgba(134, 222, 116,0.64);
        -moz-box-shadow: 2px 2px 15px -4px rgba(134, 222, 116,0.64);
        box-shadow: 2px 2px 15px -4px rgba(134, 222, 116,0.64);
        opacity: 1;
        transition: all 1s ease;
        cursor: pointer;
    }
`;

export default MainGaleria;