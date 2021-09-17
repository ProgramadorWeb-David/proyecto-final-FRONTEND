import React from 'react'
import styled from 'styled-components';
import ParteUno from './componentes_footer/ParteUno';
import ParteDos from './componentes_footer/ParteDos';
import ParteTres from './componentes_footer/ParteTres';
import ParteCuatro from './componentes_footer/ParteCuatro';


const FooterParteUno = () => {
 return ( 
     <FooterContainer>
         <ParteUno />
         <ParteDos />
         <ParteTres />
         <ParteCuatro />
     </FooterContainer>
  ); 
}    


const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: 25px;
    margin-left: 25px;
`;

export default FooterParteUno;