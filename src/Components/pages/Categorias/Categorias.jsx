import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import PRODUCTS from '../../../data';

import './Categorias.scss';
import Filter from './Components/Filter';

export default function Categorias() {
  const [filters, setFilters] = useState({
    categoria: '',
    cor: '',
    tamanho: '',
    ordenacao: '',
    sexo: '',
  });

  const [produtosFiltrados, setProdutosFiltrados] = useState(PRODUCTS);

  function atualizarFiltro(tipo, valor) {
    const novosFiltros = { ...filters, [tipo]: valor };
    setFilters(novosFiltros);

    let resultado = PRODUCTS;

    if (novosFiltros.categoria)
      resultado = resultado.filter(p => p.categoria === novosFiltros.categoria);

    if (novosFiltros.cor)
      resultado = resultado.filter(p => p.cor === novosFiltros.cor);

    if (novosFiltros.tamanho)
      resultado = resultado.filter(p => p.tamanho === novosFiltros.tamanho);

    if (novosFiltros.sexo)
      resultado = resultado.filter(p => p.sexo === novosFiltros.sexo);

    if (novosFiltros.ordenacao === 'recentes')
      resultado = [...resultado].sort((a, b) => b.id - a.id);

    if (novosFiltros.ordenacao === 'antigos')
      resultado = [...resultado].sort((a, b) => a.id - b.id);

    setProdutosFiltrados(resultado);
  }

  function limparTodosOsFiltros() {
    setFilters({
      category: '',
      color: '',
      tamanho: '',
      ordenacao: '',
      sexo: ''
    });
    setProdutosFiltrados(PRODUCTS);
  }

  return (
    <section className="CategoriasConteiner">
      <Header />

      {/* Marcação da página */}
      <section className="marcaçãoPage">
        <div className="tituloPage">
          <h1>Produtos</h1>
        </div>

        <nav className="spaceConteiner">
          <ol className="listaConteiner">
            <li>
              <a href="/" className="pageLocalisation">Home</a>
            </li>
            <li> /Produtos</li>
          </ol>
        </nav>
      </section>

      {/* Corpo da página */}
      <section className="corpoDaPagina">
        <Filter
          filters={filters}
          atualizarFiltro={atualizarFiltro}
          limparTodosOsFiltros={limparTodosOsFiltros}
        />

        <section className="itensConteiner">
          {produtosFiltrados.map((product) => (
            <div className="unidadesItens" key={product.id}>
              <Link className="cardItem" to={`/categorias/${product.id}`}>
                <div className="itemImageConteiner">
                  <img src={product.img} alt={product.name} className="imagensItens" />
                </div>

                <div className="corpoCard">
                  <h5>{product.title}</h5>
                  <p>{product.prevPrice} no PIX</p>
                  <p>{product.desconto}</p>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </section>

      <Footer />
    </section>
  );
}
