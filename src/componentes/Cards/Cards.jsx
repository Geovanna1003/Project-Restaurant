import estilos from '../Cards/Cards.module.css';

function Cards({ produtosFiltrados }) {
  return (
    <section className={estilos.secao_cards}>
      <h2>Cardápio</h2>
      <div className={estilos.container_cards}>
        {produtosFiltrados.map(produto => (
          <div key={produto.id} className={estilos.card}>
            <figure>
              <img src={produto.imagem} alt={produto.nome} />
            </figure>
            <div className={estilos.informacoes}>
              <div>
                <h3>{produto.nome}</h3>
                <small>{produto.categoria}</small>
                <p>{produto.descricao}</p>
              </div>
              <div>
                <span>
                  {new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produto.preco)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
