import React from 'react'
import HomeParteUno from './componentes_home/HomeParteUno';
import HomeParteDos from './componentes_home/HomeParteDos';
import HomeParteTres from './componentes_home/HomeParteTres';
import HomeParteCuatro from './componentes_home/HomeParteCuatro';
import Footer from './componentes_home/Footer';


const Home = () => {
 return ( 
         <>
             <HomeParteUno/>
             <HomeParteDos/>
             <HomeParteTres />
             <HomeParteCuatro />
             <Footer />
         </>
     ); 
}    

export default Home;