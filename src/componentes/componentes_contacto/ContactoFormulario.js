import React from 'react'
import styled from 'styled-components';


const ContactoFormulario = () => {
 return ( 
     <section>
         <ContenedorFormulario>
             <ContenedorFieldset>
                 <LEGEND>Contáctanos llenando todos los campos</LEGEND>

                 <ContenedorCampos>
                        <Campos>
                            <LABEL>Nombre</LABEL>
                            <INPUT type="text" placeholder="tu nombre"></INPUT>
                        </Campos>

                        <Campos>
                            <LABEL>Teléfono</LABEL>
                            <INPUT type="tel" placeholder="tu teléfono" required></INPUT>
                        </Campos>

                        <Campos>
                            <LABEL>Correo</LABEL>
                            <INPUT type="email" placeholder="tu email" required></INPUT>
                        </Campos>

                        <Campos>
                            <LABEL>Mensaje</LABEL>
                            <TEXTAREA></TEXTAREA>
                        </Campos>
                 </ContenedorCampos>

                 <div>
                    <Boton type="submit" value="Enviar"></Boton>
                 </div>
             </ContenedorFieldset>
         </ContenedorFormulario>
     </section>
  ); 
}    


const ContenedorFormulario = styled.form`
   background-color: rgba(0, 0, 0, .4);
   width: min(60rem, 100%); /* utiliza el más pequeño */
   margin: 0px auto;
   padding: 2rem;
   border-radius: 1rem;
`;

const ContenedorFieldset = styled.fieldset`
   border: none;
`;

const LEGEND = styled.legend`
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #ffc107;
    width: 100%;
    text-align: center;
`;

const ContenedorCampos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto 20rem;
    column-gap: 1rem;
`;


const Campos = styled.div`
    margin-bottom: 1rem;

    &:nth-child(3),
    &:nth-child(4) {
        grid-column: 1 / 3;
    }
`;


const LABEL = styled.label`
   color: #fff;
   font-weight: bold;
   margin-bottom: .5rem;
   display: block;
`;


const INPUT = styled.input`
    width: 100%;
    border: none;
    padding: 1.5rem;
    border-radius: .5rem;
`;


const TEXTAREA = styled.textarea`
    width: 100%;
    height: 16rem;
    max-width: 56rem;
    max-height: 16rem;
    border: none;
    padding: 1.5rem;
    border-radius: .5rem;
`;


const Boton = styled.input`
    background-color: #0097a7;
    color: #fff;
    padding: 1rem 3rem;
    margin-top: 1rem;
    font-size: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: .5rem;
    text-align: center;
    border: none;
    width: 100%;
    /* padding: 1.5rem; */

    &:hover {
        transform: translateY(-3px) scale(1);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, .4);
        background-color: #01b0c4;
        cursor: pointer;
    }
`;

export default ContactoFormulario;