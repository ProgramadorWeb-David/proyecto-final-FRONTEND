import React from 'react'
import styled from 'styled-components';
import imgNoticia1 from './../../img/noticias1.jpg';
import imgNoticia2 from './../../img/noticias2.jpg';
import imgNoticia3 from './../../img/noticias3.jpg';
import imgNoticia4 from './../../img/noticias4.jpg';
import imgNoticia5 from './../../img/noticias5.jpg';
import imgNoticia6 from './../../img/noticias6.jpg';


const MainNovedades = () => {
 return ( 
      <ContenidoPrincipal>
          <H2>Últimas Noticias</H2>

          <ContenedorPadre>
                <article>
                   <Contenido>
                       <Imagen src={imgNoticia1} alt="imagen noticias 1" />
                       <h3>Comienzan los entrenamientos del campeón</h3>
                       <p>Publicado el: <span>27 Agosto, 2021</span></p>
                       <p>Por: <span>Tyc Sports</span></p>
                       <Boton> Leer más</Boton>
                   </Contenido>
                </article>

                <article>
                    <Contenido> 
                        <Imagen src={imgNoticia2} alt="imagen noticias 2" /> 
                        <h3>La reserva se mantiene puntera</h3>
                        <p>Publicado el: <span>23 Agosto, 2021</span></p>
                        <p>Por: <span>Prensa sabalera</span></p>
                        <Boton> Leer más</Boton>
                    </Contenido>
                </article>

                <article>
                    <Contenido> 
                        <Imagen src={imgNoticia3} alt="imagen noticias 3" /> 
                        <h3>Eduardo Dominguez considerado el mejor DT</h3>
                        <p>Publicado el: <span>19 Agosto, 2021</span></p>
                        <p>Por: <span>El Litoral</span></p>
                        <Boton> Leer más</Boton>
                    </Contenido>
                </article>

                <article>
                    <Contenido> 
                        <Imagen src={imgNoticia4} alt="imagen noticias 4" /> 
                        <h3>Presidente de colón habla sobre lo que viene</h3>
                        <p>Publicado el: <span>10 Agosto, 2021</span></p>
                        <p>Por: <span>La Voz del interior</span></p>
                        <Boton> Leer más</Boton>
                    </Contenido>
                </article>

                <article>
                    <Contenido> 
                        <Imagen src={imgNoticia5} alt="imagen noticias 5" /> 
                        <h3>Remodelaciones en el Brigadier Estanislao López</h3>
                        <p>Publicado el: <span>2 Agosto, 2021</span></p>
                        <p>Por: <span>Prensa sabalera</span></p>
                        <Boton> Leer más</Boton>
                    </Contenido>
                </article>

                <article>
                    <Contenido> 
                        <Imagen src={imgNoticia6} alt="imagen noticias 6" /> 
                        <h3>Los nuevos protocolos para ingresar al estadio</h3>
                        <p>Publicado el: <span>28 Julio, 2021</span></p>
                        <p>Por: <span>Infobae</span></p>
                        <Boton> Leer más</Boton>
                    </Contenido>
                </article>
          </ContenedorPadre>
      </ContenidoPrincipal>
  ); 
}    


const ContenidoPrincipal = styled.main`
    margin: 1rem auto;
`;


const H2 = styled.h2`
    flex: 0 1 100%;
    text-align: center;
    font-size: 3.5rem;
    font-family: 'Krub', sans-serif;
    color: #3f485b;
    margin: 2rem;
    padding-top: 2rem;
`; 


const ContenedorPadre = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;


const Contenido = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 3rem;
    text-transform: uppercase;
    width: 350px;
    height: 350px;
    margin: 2rem;
    border-radius: 2rem;

    & p span {
        color: #0097a7;
    }

    & > h3 {
        font-size: .9rem;
        line-height: 1.4rem;
        font-family: 'LibreBaskerville', sans-serif;
        margin: 1rem;
        font-weight: 700;
    }
`;


const Imagen = styled.img`
    object-fit: cover;
    max-width: 100%;
`;


const Boton = styled.p`
    background-color: #0097a7;
    color: #fff;
    padding: .8rem 2rem;
    margin-top: 1rem;
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    border-radius: .5rem;

    &:hover {
        transform: translateY(-3px) scale(1);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, .4);
        background-color: #01b0c4;
        cursor: pointer;
    }
`;

export default MainNovedades;