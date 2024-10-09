import "./Content.scss";
import SlidePrincipal from '../SlidePrincipal/SlidePrincipal'
import SlideCategory from "../SliderCategory/SlideCategory"
import ItensNovos from "../../../../ItensNovos/ItensNovos"
import NotificationEmail from "../../../../NotificationEmail/NotificationEmail";

import image01 from '../../assets/boxcomercial.webp';
import image02 from '../../assets/CamisetasComercial.png';

import imgInicio01 from '../../assets/capaInicio01.webp';
import imgInicio02 from '../../assets/capaInicio02.webp';

export default function Content() {
    return(
        <main className="MainContent">

            <SlidePrincipal 
            img1={imgInicio01}
            img2={imgInicio02}
            img3={"https://zinzane.vtexassets.com/assets/vtex.file-manager-graphql/images/222d313e-05b6-4777-98d3-017d1d8594b9___61e04232e9de8a8f2719b56eb0b43cac.gif"}
            /> 
       
            <SlideCategory />

            <img src={image01} alt="" className='comercialImage'/>
            
            <ItensNovos title="Lançamentos" numCards={3} imgCards="LANCAMENTOS"/>

            <img src={image02} alt="" className=".comercialImage"/>

            <ItensNovos title="Camisetas Simples" numCards={4} imgCards="CAMISETASSIMPLES"/>

            <NotificationEmail/>

        </main>
    )
}