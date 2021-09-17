import React from 'react'
import styled from 'styled-components';
import Revista from './../../img/revista.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const HomeParteCuatro = () => {
 return ( 
        <ContenedorHomeCuatro>
            <Imagen src={Revista} alt="imagen de revista" />
            
            <BoxSkills>
                <h4> <FontAwesomeIcon className="icono" icon={faCheckCircle} /> Incluye poster del campeón </h4>
                <h4> <FontAwesomeIcon className="icono" icon={faCheckCircle} /> Entrevistas exclusivas con jugadores </h4>
                <h4> <FontAwesomeIcon className="icono" icon={faCheckCircle} /> Fotos ineditas! </h4>
                <h4> <FontAwesomeIcon className="icono" icon={faCheckCircle} /> El camino de colón a la copa </h4>
                <h4> <FontAwesomeIcon className="icono" icon={faCheckCircle} /> Lo que no se vio de la final </h4>
                <h4> <FontAwesomeIcon className="icono" icon={faCheckCircle} /> Puntaje de cada jugador </h4>
                <h4> <FontAwesomeIcon className="icono" icon={faCheckCircle} /> Proximas copas que juega el sabalero </h4>
            </BoxSkills>
        </ContenedorHomeCuatro>
  ); 
}    


const ContenedorHomeCuatro = styled.section`
    width: 90%;
    max-width: 1024px;
    margin: 0px auto;
    overflow: hidden;
    padding: 60px 0px;
    /* -------------- */
    display: flex;
    justify-content: space-between;
`;


const Imagen = styled.img`
    width: 36rem;
    margin-left: 26px;
`;


const BoxSkills = styled.div`
    margin: 3px 60px 0 0;

    & > h4 {
        font-size: 1.9rem;
        background-color: #f2f2f2;
        width: 350px;
        border-radius: 6px;
        padding: 10px 0 10px 15px;
        margin-bottom: 15px;
    }

    & > h4 .icono {
        color: #105032;
        font-size: 20px;
    }
`;

export default HomeParteCuatro;