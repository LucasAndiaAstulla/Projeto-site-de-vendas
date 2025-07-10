import './Filter.scss';

export default function Filter({ filters, atualizarFiltro, limparTodosOsFiltros }) {
  return (
    <div className="configItens">
      <h2>Categorias</h2>

      <div className="filtroGrupo">
        <h3>Cores</h3>
        <div className="filtroCores">
          {['vermelho', 'branco', 'preto', 'azul'].map(cor => (
            <button
              key={cor}
              className={`corItem ${filters.cor === cor ? 'ativo' : ''} ${cor}`}
              onClick={() => atualizarFiltro('cor', cor)}
            ></button>
          ))}
        </div>
      </div>

      <div className="filtroGrupo">
        <h3>Tamanhos</h3>
        <div className="filtroTamanhos">
          {['baby look', 'plus size', 'gg', 'g', 'm', 'p'].map(t => (
            <button
              key={t}
              className={`botaoTamanho ${filters.tamanho === t ? 'ativo' : ''}`}
              onClick={() => atualizarFiltro('tamanho', t)}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="filtroGrupo">
        <h3>Sexo</h3>
        <div className="filtroSexo">
          {['feminino', 'unissex', 'masculino'].map(sexo => (
            <button
              key={sexo}
              className={`botaoSexo ${filters.sexo === sexo ? 'ativo' : ''}`}
              onClick={() => atualizarFiltro('sexo', sexo)}
            >
              {sexo}
            </button>
          ))}
        </div>
      </div>

      <div className="filtroGrupo">
        <h3>Preço</h3>
        <div className="filtroPreco">
          <input type="range" min="0" max="300" />
          <div className="valoresPreco">
            <span>R$ 0,00</span>
            <span>R$ 300,00</span>
          </div>
        </div>
      </div>

      <div className="filtroGrupo">
        <h3>Ordenar</h3>
        <div className="filtroOrdenacao">
          <label>
            <input
              type="radio"
              name="ordenar"
              onChange={() => atualizarFiltro('ordenacao', 'recentes')}
            />
            Lançamentos
          </label>
          <label>
            <input
              type="radio"
              name="ordenar"
              onChange={() => atualizarFiltro('ordenacao', 'mais_vendidos')}
            />
            Mais vendidos
          </label>
          <label>
            <input
              type="radio"
              name="ordenar"
              onChange={() => atualizarFiltro('ordenacao', 'antigos')}
            />
            Mais antigos
          </label>
        </div>
      </div>

      <div className="limparFiltros">
        <button onClick={limparTodosOsFiltros}>Limpar todos os filtros</button>
      </div>
    </div>
  );
}
