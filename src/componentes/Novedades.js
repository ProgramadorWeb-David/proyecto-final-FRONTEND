import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from './novedades/NovedadItem';
import styled from 'styled-components';



const Novedades = () => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);


    return (
        <section className="holder">
            <H2> Nuevas Novedades </H2>
            {loading ? (<p>Cargando...</p>) : (
                novedades.map(item => <NovedadItem key={item.id_noticia} img={"http://res.cloudinary.com/dx5npv2gc/image/upload/c_fill,h_190,w_200/"+item.img_id} title={item.titulo} date={item.fecha} author={item.autor} description={item.descripcion} body={item.cuerpo} />)
            )}
        </section>
    );
}

const H2 = styled.h2`
flex: 0 1 100%;
text-align: center;
font-size: 3.5rem;
font-family: 'Krub', sans-serif;
color: #3f485b;
margin: 2rem;
padding-top: 2rem;
`;


export default Novedades;