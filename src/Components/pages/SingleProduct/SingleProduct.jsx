import { Link, useParams } from 'react-router-dom';
import PRODUCTS from '../../../data';
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import './SingleProduct.scss';

import iconLoja from '../../assets/informaçãoLoja.svg';
import iconCartao from '../../assets/informaçãoCartão.svg';
import iconCaminhao from '../../assets/informaçãoCaminhão.svg';
import iconCelular from '../../assets/informaçãoCelular.svg';



export default function SingleProduct() {

    //Puxa os dados direto para meu codigo principal
    const { productId } = useParams();
    const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId))
    const { id, name, price, img, verso, ItemExemplo } = singleProduct

    //Colocar outras imagens secundarias na parte principal
    document.addEventListener('DOMContentLoaded', function(){
        var MainImg = document.getElementById('produtUnicoImg');
        var smallImg = document.getElementsByClassName('imgSmall');

        smallImg[1].addEventListener('click', function() {
            MainImg.src = smallImg[1].src;
        });

        smallImg[2].addEventListener('click', function() {
            MainImg.src = smallImg[2].src;
        });

        smallImg[3].addEventListener('click', function() {
            MainImg.src = smallImg[3].src;
        });
    })
    

    
    return (
        <section className='singleItenPage'>

            <Header />

            <section className='productBody'>

                <section className='imgProductConteiner'>

                    <div className="imgSmallGroup">
                        <div className='imgSmallCol'>
                            <img src={verso} alt="" className="imgSmall" />
                        </div>

                        <div className="imgSmallCol">
                            <img src={verso} alt="" className="imgSmall" />
                        </div>

                        <div className="imgSmallCol">
                            <img src={verso} alt="" className="imgSmall" />
                        </div>
                    </div>
                    <img src={img} alt="" id='produtUnicoImg' />
                </section>

                <section className='informationConteiner'>

                    <nav className="spaceConteiner">
                        <ol className="listaConteiner">
                            <li>
                                <Link to={'/'} className='pageLocalisation'>Home</Link>
                            </li>
                            <li>
                                <Link to={'/categorias'} className='pageLocalisation'>/Categorias</Link>
                            </li>
                            <li>
                                <p className='ficouDefora'>/{name}</p>
                            </li>
                        </ol>
                    </nav>

                    <div className="tituloPage">
                        <h1>{name}</h1>
                    </div>

                    <p id='outPrice'>DE: R$XX,xx</p>

                    <div className='descontoConteiner'>
                        <p className='price'>POR: {price}</p>
                        <p className='desconto'>-Y%</p>
                    </div>
                    <p id='parcelamento'>6x de R$ 33,32 sem juros</p>

                    <div className='tamanhoItem'>
                        <button className='buttonSize'>P</button>
                        <button className='buttonSize'>M</button>
                        <button className='buttonSize'>G</button>
                        <button className='buttonSize'>GG</button>
                    </div>

                    <div className='espaçoComprar'>
                        <div className='quantidadeItem'>
                            <button className='buttonQunatidade'>-</button>
                            <div className='buttonQunatidade'>

                            </div>
                            <button className='buttonQunatidade'>+</button>
                        </div>

                        <button id='buttonComprar'>Adicionar</button>
                    </div>

                    <ul className="informationCompra">
                        <li className='unidadeInformation'>
                            <img src={iconLoja} alt="" className='infoImage'/>
                            <div className='colCompra'>
                                <p><strong>Retirada em loja em até 1 dia</strong></p>
                                <p>*Consulte lojas disponíveis no carrinho</p>
                            </div>
                        </li>
                        <li className='unidadeInformation'>
                            <img src={iconCartao} alt="" className='infoImage'/>
                            <div className='colCompra'>
                                <p><strong>Até 10x sem juros</strong></p>
                                <p>No Cartão de Crédito</p>
                            </div>
                        </li>
                        <li className='unidadeInformation'>
                            <img src={iconCaminhao} alt="" className='infoImage'/>
                            <div className='colCompra'>
                                <p><strong>Frete Grátis</strong></p>
                                <p>Nas compras acima de R$ 400,00</p>
                            </div>
                        </li>
                        <li className='unidadeInformation'>
                            <img src={iconCelular} alt="" className='infoImage'/>
                            <div className='colCompra'>
                                <p><strong>10% OFF no Site ou APP na primeira compra</strong></p>
                                <p>Use o cupom DESCONTO10. *Não cumulativo</p>
                            </div>
                        </li>
                    </ul>

                </section>

            </section>

            <Footer />

        </section>
    )
}