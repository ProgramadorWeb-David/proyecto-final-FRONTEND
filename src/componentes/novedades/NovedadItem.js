
import React from 'react';
import styled from 'styled-components';


const NovedadItem = (props) => {

    const { img, title, date, author, description, body } = props;

    return (
        <ContenidoPrincipal>
            <ContenedorPadre>
                    <Contenido>
                        <Imagen src={img} alt="No se cargo ninguna imagen!" />
                        <h3> {title} </h3>
                        <p>Publicado el: <span> {date} </span></p>
                        <p>Por: <span> {author} </span></p>
                    <Boton onClick={() => {alert( JSON.stringify(description) )}}> Leer más</Boton>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                    </Contenido>
            </ContenedorPadre>
        </ContenidoPrincipal>
    ); 
}    


const ContenidoPrincipal = styled.main`
    background-color: #f2f2f2;
    margin: auto;
`;
    

const ContenedorPadre = styled.div`
    display: flex;
    flex-direction: row;
    float: left;
    align-items: center;
`;


const Contenido = styled.div`
    background-color: #f2f2f2;
    text-align: center;
    padding: 2rem;
    text-transform: uppercase;
    width: 330px;
    height: 370px;
    margin: 2rem 1rem 2rem 5rem;
    border-radius: 2rem;
    margin-top: 5px;

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
    color: red;
    text-transform: capitalize;
`;


const Boton = styled.button`
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



export default NovedadItem;