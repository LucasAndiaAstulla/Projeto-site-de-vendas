        import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SlidePrincipal.scss'




export default function SlidePrincipal({img1, img2, img3}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div className='slideConteiner'>
            <Slider {...settings} className='slider'>
                <div className='imageConteiner'>
                    <img src={img1} alt="" />
                </div>
                <div className='imageConteiner'>
                    <img src={img2} alt="" />
                </div>
                <div className='imageConteiner'>
                    <img src={img3} alt="" />
                </div>
            </Slider>
        </div>
    )
}