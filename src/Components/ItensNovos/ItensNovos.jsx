import './ItensNovos.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LANCAMENTOS from "../../dataLancamentos.jsx"
import CAMISETASIMPLES from "../../dataCamisetas.jsx"

import { Link } from 'react-router-dom';

export default function ItensNovos({title, numCards, imgCards}) {
    let data = [];

    if(imgCards == "LANCAMENTOS") {
        data = LANCAMENTOS
    } else if (imgCards == "CAMISETASSIMPLES") {
        data = CAMISETASIMPLES
    } else {
        console.error("O tipo de dado foi inválido!!")
    }

    const settings = {
        dots: true,
        isfinite: true,
        speed: 500,
        slidesToShow: numCards,
        slidesToScroll: 1,
    }

    return (
        <div className='ItensNovosConteiner'>
            <h3>{title}</h3>
            <div className='linhaDecorativa'></div>
            
            <Slider {
                //... = está buscando todos os valores do promp (settings) que está sendo passado no js
               
                ...settings
                } className='content_slider'>


                {data.map((product) => {
                    return (

                        <div className="conteinerMain" key={product.novo}>

                            <Link className='cardIndividual' to={`/categorias/${product.novo}`}>

                                <div className='itemImageConteiner'>
                                    <img src={product.image} alt="" className='imageCard' />
                                </div>

                                <div className='bodyCard'>
                                    <h5> {product.name}</h5>
                                    <p className='priceAntigo'>De: {product.price}</p>
                                    <p className='novoprice'>Por: {product.newprice}</p>
                                    <p className='descontoprice'>{product.desconto}</p>
                                </div>

                            </Link>

                        </div>



                    )
                })}


            </Slider>

        </div >
    )
}