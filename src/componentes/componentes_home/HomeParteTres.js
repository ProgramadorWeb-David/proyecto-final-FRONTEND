import React from 'react'
import styled from 'styled-components';
import Copa from './../../img/copa.png';


const HomeParteTres = () => {
 return ( 
      <ContenedorHomeTres>
          <ContenedorQuestions>
               <TexosQuestions>
                   <h1>Colón de Santa Fe</h1>
                   <TextosP>
                        La Copa de la Liga Profesional de Fútbol de AFA 2021, 
                        conocida como Copa de la Liga Profesional 2021, Copa 
                        de la Liga 2021 o simplemente Copa 2021,​ fué la segunda
                        edición de esta competición organizada por la Liga 
                        Profesional de Fútbol, órganizmo interno de la Asociación 
                        del Fútbol Argentino. Comenzó el 12 de febrero y 
                        finalizó el 4 de junio. La disputaron los veintiséis 
                        equipos habilitados para el Campeonato de Primera 
                        División 2021. El campeón fue el Club Atlético Colón, 
                        que obtuvo así su primera copa nacional y su primer 
                        título de primera categoría, y clasificó a la Copa 
                        Libertadores 2022 y disputará el Trofeo de Campeones 
                        2021 con el campeón del torneo de Primera División...
                   </TextosP>
                   <p>Saber más...</p>
               </TexosQuestions>

              <Imagen src={Copa} alt="Imagen de la copa" />
          </ContenedorQuestions>
      </ContenedorHomeTres>
  ); 
}    


const ContenedorHomeTres = styled.div`
    border-top: 0.5px solid #ccc;
    border-bottom: 0.5px solid #ccc;
`;

const ContenedorQuestions = styled.section`
    width: 90%;
    max-width: 1024px;
    margin: 0px auto;
    overflow: hidden;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Imagen = styled.img`
    width: 300px;
    display: block;
    margin-right: 68px;
`;

const TexosQuestions = styled.section`
    margin: -60px 0px 0px 50px;
    width: 40%;
`;

const TextosP = styled.p`
    font-family: 'Times New Roman',Times,serif;
    font-weight: 200;
    color: #2d323d;
    padding-bottom: 10px;
    line-height: 2.3rem;
    margin-top: 3rem;
`;  

export default HomeParteTres;