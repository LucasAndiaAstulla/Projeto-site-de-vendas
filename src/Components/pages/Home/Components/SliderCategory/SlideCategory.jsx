import './SlideCategory.scss';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import foto01 from '../../assets/blusinhas.svg'
import foto02 from '../../assets/calsas.svg'
import foto03 from '../../assets/camiseta.svg'
import foto04 from '../../assets/regatas.svg'
import foto05 from '../../assets/saias.svg'
import foto06 from '../../assets/vestidos.svg'

export default function SlideCategory() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className='SliderConteiner'>
            <h3>Categorias</h3>
            <div className='linhaDecorativa'></div>

            <Slider {...settings} className='slider'>
                <div className='imageConteiner'>
                    <img src={foto01} alt="" className='imagem' />
                    <h2>Blusinhas</h2>
                </div>
                <div className='imageConteiner'>
                    <img src={foto02} alt="" className='imagem' />
                    <h2>calças</h2>
                </div>
                <div className='imageConteiner'>
                    <img src={foto03} alt="" className='imagem' />
                    <h2>camisetas</h2>
                </div>
                <div className='imageConteiner'>
                    <img src={foto04} alt="" className='imagem' />
                    <h2>regatas</h2>
                </div>
                <div className='imageConteiner'>
                    <img src={foto05} alt="" className='imagem' />
                    <h2>saias</h2>
                </div>
                <div className='imageConteiner'>
                    <img src={foto06} alt="" className='imagem' />
                    <h2>vestidos</h2>
                </div>
            </Slider>
        </div>
    )
}