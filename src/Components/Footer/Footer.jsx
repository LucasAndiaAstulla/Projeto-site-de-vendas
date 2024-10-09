import { Link } from 'react-router-dom';
import './Footer.scss';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Estrelas from "../Estrelas.jsx";

import googleSelo from './assets/selo-google.svg';
import googleAvaliation from './assets/selo-google-avaliacoes.svg';
import procon from './assets/procon.svg';
import certificado from './assets/certificado.webp';
import reclameaqui from './assets/selo-reclameaqui.png';

import boleto from './assets/boleto-bancario.svg';
import cardBoleto from './assets/boleto-cartoes.svg';
import americanCard from './assets/cartao-american-express.svg';
import cardElo from './assets/cartao-elo.svg';
import hipercard from './assets/cartao-hipercard.svg';
import mastercard from './assets/cartao-mastercard.svg';
import visa from './assets/cartao-visa.svg';
import choiseCard from './assets/multiplos-cartoes.svg';
import pixParcelado from './assets/pix-parcelado.svg';
import pix from './assets/pix.svg';




export default function Footer() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

    return (

        // bannerComentarios
        <footer className='footerContent'>

            <section className='comentsClientes'>

                <h3 className='titleComentarios'>Avaliações de clientes</h3>
                <div className='linhaDecorativa'></div>

                <Slider {...settings} className='sliderComents'>

                    <div className='unidadeComentario'>

                        <h4 className='nome settingComent'>Maria Silva</h4>
                        <p className='dataAvaliacao settingComent'>Data de avaliação: 15/03/2024</p>
                        <p className='localAvaliacao settingComent'>São Paulo - SP</p>

                        <Estrelas numberStars={5} />

                        <p className='comentarioCLiente settingComent'>
                            Adorei as roupas! Ótima variedade e atendimento.
                        </p>

                    </div>

                    <div className='unidadeComentario'>

                        <h4 className='nome settingComent'>Pedro Oliveira</h4>
                        <p className='dataAvaliacao settingComent'>Data de avaliação: 07/04/2024</p>
                        <p className='localAvaliacao settingComent'>Rio de Janeiro - RJ</p>
                        <Estrelas numberStars={4} />
                        <p className='comentarioCLiente settingComent'>
                            Boa seleção de moda masculina. Preços justos.
                        </p>

                    </div>
                    <div className='unidadeComentario'>

                        <h4 className='nome settingComent'>Ana Santos</h4>
                        <p className='dataAvaliacao settingComent'>Data de avaliação: 22/02/2024</p>
                        <p className='localAvaliacao settingComent'>Porto - Portugal</p>
                        <Estrelas numberStars={5} />
                        <p className='comentarioCLiente settingComent'>
                            Entrega rápida, roupas de qualidade.
                        </p>

                    </div>
                    <div className='unidadeComentario'>

                        <h4 className='nome settingComent'>João Carvalho</h4>
                        <p className='dataAvaliacao settingComent'>Data de avaliação: 03/05/2024</p>
                        <p className='localAvaliacao settingComent'>Lisboa - Portugal</p>
                        <Estrelas numberStars={3} />
                        <p className='comentarioCLiente settingComent'>
                            Preços um pouco altos, mas boas opções.
                        </p>

                    </div>
                    <div className='unidadeComentario'>

                        <h4 className='nome settingComent'>Laura Garcia</h4>
                        <p className='dataAvaliacao settingComent'>Data de avaliação: 10/04/2024</p>
                        <p className='localAvaliacao settingComent'>Barcelona - Espanha</p>
                        <Estrelas numberStars={3} />
                        <p className='comentarioCLiente settingComent'>
                            Peças bonitas e envio rápido. Satisfeita com a compra.
                        </p>

                    </div>




                </Slider>

            </section>

            {/*Banner de segurança*/}
            <ul className="bannerSeguranca">
                <li className='unidadeInformation'>
                    <span class="material-symbols-outlined">
                        pace
                    </span>
                    <div className='rowCompra'>
                        <p>ATENDIMENTO</p>
                        <p>Seg. à sex das 8h 12h e das 13h-17h
                        </p>
                    </div>
                </li>

                <li className='unidadeInformation'>
                    <span class="material-symbols-outlined">
                        package_2
                    </span>
                    <div className='rowCompra'>
                        <p>TROCAS E DEVOLUÇÕES</p>
                        <p>Até 7 dias para devolver a compra
                        </p>
                    </div>
                </li>

                <li className='unidadeInformation'>
                    <span class="material-symbols-outlined">
                        local_shipping
                    </span>
                    <div className='rowCompra'>
                        <p>FRETE</p>
                        <p>Frete Grátis Sul e Sudeste acima de R$ 299 e Demais Regiões acima de R$ 399</p>
                    </div>
                </li>

                <li className='unidadeInformation'>
                    <span class="material-symbols-outlined">
                        credit_card
                    </span>
                    <div className='rowCompra'>
                        <p>PARCELAMENTO</p>
                        <p>Em até 12x no cartão</p>
                    </div>
                </li>
            </ul>


            { /* Banner information*/}

            <section className='informationFooter'>
                <div className="contato sectionFooter">
                    <h3 className='informationTitle'>ATENDIMENTO</h3>
                    <Link className='textlink'>Atendimento</Link>
                </div>

                <div className="institucional sectionFooter">
                    <h3 className='informationTitle'>INSTITUCIONAL</h3>
                    <Link className='textlink'>Politicas de entrega</Link>
                    <Link className='textlink'>Trocas e devoluções</Link>
                    <Link className='textlink'>Avaliação Loja</Link>
                    <Link className='textlink'>Política e Privacidade</Link>
                </div>

                <div className="selosDeSeguranca sectionFooter">
                    <h3 className='informationTitle'>SELOS DE SEGURANÇA</h3>
                    <div id='imgsSecurity'>
                        <img src={googleSelo} alt="" className='imgInformation' />
                        <img src={googleAvaliation} alt="" className='imgInformation' />
                        <img src={procon} alt="" className='imgInformation' />
                        <img src={certificado} alt="" className='imgInformation' />
                        <img src={reclameaqui} alt="" className='imgInformation' />
                    </div>
                </div>

                <div className="formaPagamento sectionFooter">
                    <h3 className='informationTitle'>FORMAS DE PAGAMENTO</h3>
                    <div id=' imgPagamento'>
                        <img src={boleto} alt="" className=' imgTipoPagamento' />
                        <img src={cardBoleto} alt="" className=' imgTipoPagamento' />
                        <img src={americanCard} alt="" className=' imgTipoPagamento' />
                        <img src={cardElo} alt="" className=' imgTipoPagamento' />
                        <img src={hipercard} alt="" className=' imgTipoPagamento' />
                        <img src={mastercard} alt="" className=' imgTipoPagamento' />
                        <img src={visa} alt="" className=' imgTipoPagamento' />
                        <img src={choiseCard} alt="" className=' imgTipoPagamento' />
                        <img src={pixParcelado} alt="" className=' imgTipoPagamento' />
                        <img src={pix} alt="" className=' imgTipoPagamento' />
                    </div>
                </div>
            </section>
        </footer>
    )
}