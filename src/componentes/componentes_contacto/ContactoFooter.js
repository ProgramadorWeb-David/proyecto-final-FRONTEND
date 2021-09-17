import React from 'react'
import styled from 'styled-components';


const ContactoFooter = () => {
 return ( 
      <FOOTER>
          <p>Todos los derechos reservados. David Leonel &copy; - UTN.BA</p>
      </FOOTER>
  ); 
}    


const FOOTER = styled.footer`
    text-align: center;

    & > p {
        margin-bottom: 1rem;
    }
`;

export default ContactoFooter;