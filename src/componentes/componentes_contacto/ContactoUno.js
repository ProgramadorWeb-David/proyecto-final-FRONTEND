import React from 'react'
import ContactoFormulario from './ContactoFormulario';
import ContactoFooter from './ContactoFooter';


const ContactoUno = () => {
 return ( 
     <>
        <main className="contenedorContacto">
            <ContactoFormulario />
        </main>
        
        <ContactoFooter />
     </>
  ); 
}    



export default ContactoUno;