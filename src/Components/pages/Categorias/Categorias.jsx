import Footer from "../../Footer/Footer";
import Header from '../../Header/Header'
import { Link } from "react-router-dom";
import PRODUCTS from "../../../data";

import './Categorias.scss';

export default function Categorias() {
    return (
        <section className="CategoriasConteiner">

            <Header />

<<<<<<< HEAD

=======
            {/*Parte da marcação da pagina*/}
>>>>>>> 33dad7a (Projeto site de vendas)
            <section className="marcaçãoPage">
                <div className="tituloPage">
                    <h1>Produtos</h1>
                </div>

                <nav className="spaceConteiner">
                    <ol className="listaConteiner">
                        <li>
                            <a href="/" className='pageLocalisation'>Home</a>
                        </li>
                        <li> /Produtos</li>
                    </ol>
                </nav>

            </section>

<<<<<<< HEAD
            <section className="corpoDaPagina">

=======

            {/*Parte do body da pagina*/}
            <section className="corpoDaPagina">
                
>>>>>>> 33dad7a (Projeto site de vendas)
                <div className="configItens">
                    <h1>Vai ficar aqui</h1>
                </div>

                <section className='itensConteiner'>


                    {PRODUCTS.map((product) => {
                        return (
                            <div className="unidadesItens" key={product.id}>

                                <Link className="cardItem" to={`/categorias/${product.id}`}>
                                    <div className="itemImageConteiner">
                                        <img src={product.image} alt="" className="imagensItens" />
                                    </div>

                                    <div className="corpoCard">
                                        <h5> {product.name} </h5>
                                        <p> {product.price} no PIX </p>
                                        <p> {product.desconto} </p>
                                    </div>

                                </Link>

                            </div>
                        )
                    })}


                </section>

            </section>



            <Footer />

        </section>
    )
}