import estilos from '../Categorias/Categorias.module.css';
import Entrada from '../../assets/entrada.png';
import Massa from '../../assets/massa.png';
import Carnes from '../../assets/carne.png';
import Bebidas from '../../assets/bebidas.png';
import Saladas from '../../assets/salada.png';
import Sobremesas from '../../assets/sobremesa.png';

function Categorias({setCategoriaSelecionada, categoriaSelecionada}) {
    
    const botoes = [
    { nome: 'Entradas', icone: Entrada },
    { nome: 'Massas', icone: Massa },
    { nome: 'Carnes', icone: Carnes },
    { nome: 'Bebidas', icone: Bebidas },
    { nome: 'Saladas', icone: Saladas },
    { nome: 'Sobremesas', icone: Sobremesas },
  ];
    return (
    <section className={estilos.secao_categorias}>
      <div className={estilos.botoes}>
        {botoes.map(botao => (
          <button
            key={botao.nome}
            onClick={() => setCategoriaSelecionada(botao.nome)}
            className={categoriaSelecionada === botao.nome ? estilos.ativo : ''}
          >
            <img className={estilos.icone} src={botao.icone} alt={botao.nome} />
            <span>{botao.nome}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categorias;