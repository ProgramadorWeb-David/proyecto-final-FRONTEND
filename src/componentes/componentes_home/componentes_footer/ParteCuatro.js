import React from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faEnvelope, faPhone, faHeadset} from '@fortawesome/free-solid-svg-icons';
import './../../../index.css';


const ParteCuatro = () => {
 return ( 
    <ContentFoo>
       <h4> Contactanos </h4> 
        <ContentUL>
            <ContentLi> <FontAwesomeIcon className="iconoDos" icon={faHome} />  Juan del Campillo 1000  </ContentLi>
            <ContentLi> <FontAwesomeIcon className="iconoDos" icon={faEnvelope} />  davidx6x@hotmail.com  </ContentLi>
            <ContentLi> <FontAwesomeIcon className="iconoDos" icon={faPhone} />  +54 351 155155005  </ContentLi>
            <ContentLi> <FontAwesomeIcon className="iconoDos" icon={faHeadset} />  +54 351 8828398  </ContentLi>
        </ContentUL>
    </ContentFoo>
  ); 
}    


const ContentFoo = styled.div`
    max-width: 145px;
    min-width: 220px;

    & > h4 {
        color: #fff;
        border-bottom: 3px solid #f2c640;
        padding-bottom: 5px;
        margin-bottom: 10px;
    }
`;


const ContentUL = styled.ul`
    color: #ccc;
    list-style: none;
`;


const ContentLi = styled.li`
    padding: 5px;
`;

export default ParteCuatro;