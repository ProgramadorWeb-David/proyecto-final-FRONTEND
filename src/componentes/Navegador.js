import React from 'react'
import styled from 'styled-components';
import './../index.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nosotros from './Nosotros';
import Galeria from './Galeria';
import Novedades from './Novedades';
import Contacto from './Contacto';
import escColon from './../img/escColon.png';


const Navegador = () => {
 return ( 
     <HeaderNav>
         <Menu>
          <MenuEst>
            <NavLink className="Menu__link Menu__link__img" to="/"> <img className="Menu__logo" src={escColon} alt="escudo colon" /> </NavLink>
            <NavLink className="Menu__link" to="/">Home</NavLink>
            <NavLink className="Menu__link" to="/nosotros">Nosotros</NavLink>
            <NavLink className="Menu__link" to="/galeria">Galería</NavLink>
            <NavLink className="Menu__link" to="/novedades">Novedades</NavLink>
            <NavLink className="Menu__link" to="/contacto">Contacto</NavLink>
          </MenuEst>
       </Menu>  

       <main>
          <Switch>
             <Route path="/" exact={true} component={Home} />
             <Route path="/nosotros" component={Nosotros} />
             <Route path="/galeria" component={Galeria} />
             <Route path="/novedades" component={Novedades} />
             <Route path="/contacto" component={Contacto} />
          </Switch>
       </main>
     </HeaderNav>
  ); 
}    


const HeaderNav = styled.div`
   &:before {
    content: "";
    display: block;
    margin-bottom: 8rem;
   }
`;

const Menu = styled.nav`
    width: 100%;
    height: 8rem;
    background-color: white;
    border-bottom: 1px solid transparent;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, .3);
    /* un navegador fixed para que esté siempre en la página */
    position: fixed;
    top: 0px;
    z-index: 100;
`;


const MenuEst = styled.section`
    width: 90%;
    height: 8rem;
    max-width: 1024px;
    margin: 0px auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;


export default Navegador;