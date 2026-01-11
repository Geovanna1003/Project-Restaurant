import estilos from '../CampoDeBusca/CampoDeBusca.module.css';
import Lupa from '../../assets/lupa.png';

function CampoDeBusca({busca, setBusca}) {
    return(
        <div className={estilos.container}>
            <img
                className={estilos.icone} 
                src={Lupa} 
                alt="Lupa" 
            />
            <input 
                type="text"
                placeholder='Pesquise aqui um dos pratos do nosso cardápio'
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
        </div>

    );
}
export default CampoDeBusca;
