import React from 'react'
import styled from 'styled-components';
import './../../index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter, faPinterest, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


const FooterParteDos = () => {
 return ( 
     <FooterContainerDos>
         <h2>2021 &copy; Copyright: Derechos Reservados</h2>
         <p>Página con React por David Leonel</p>

         <RedesContainer>
            <ul>
                <RedesLI><RedesP className="facebook"> <FontAwesomeIcon icon={faFacebook} /> </RedesP></RedesLI>

                <RedesLI><RedesP className="instagram"> <FontAwesomeIcon icon={faInstagram} /> </RedesP></RedesLI>

                <RedesLI><RedesP className="twitter"> <FontAwesomeIcon icon={faTwitter} /> </RedesP></RedesLI>

                <RedesLI><RedesP className="pinterest"> <FontAwesomeIcon icon={faPinterest} /> </RedesP></RedesLI>

                <RedesLI><RedesP className="linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /> </RedesP></RedesLI>
            </ul>
         </RedesContainer>
     </FooterContainerDos>
  ); 
}    


const FooterContainerDos = styled.div`
    background-color: #1f2b40;
    padding: 15px 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    & > h2 {
       font-size: 24px;
       margin: 15px 0 15px 35px;
       color: #ccc;
    }

    & > p {
       margin: 30px 0 15px 35px;
       color: #ccc;
       font-size: 18px;
    }
`;


const RedesContainer = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 7px 12px 30px 35px;
`;


const RedesLI = styled.li`
    display: inline-block;
    margin: 0px 5px;
    width: 45px;
    height: 45px;
    text-align: center;
`;

const RedesP = styled.p`
    padding: 0px 10px;
    color: #fff;
    line-height: 50px;
    font-size: 18px;
    border-radius: 50%;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, .2);
    transition: .3s;

    &:hover {
        transform: translateY(-5px) scale(1.15);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, .4);
        cursor: pointer;
    }
`;

export default FooterParteDos;