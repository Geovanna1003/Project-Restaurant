import { useState } from 'react';
import Home from './componentes/Home/Header';
import Categorias from './componentes/Categorias/Categorias';
import CampoDeBusca from './componentes/CampoDeBusca/CampoDeBusca';
import Cards from './componentes/Cards/Cards';
import produtos from './data/produtos';
import './App.css'

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [busca, setBusca] = useState("");
  const handleCategoria = (categoria) => {
  setCategoriaSelecionada(categoria);
  setBusca(""); 
 };

  const produtosFiltrados = produtos.filter(produto => {
  if (busca.length > 0) {
    const texto = busca.toLowerCase();
    const nomeMatch = produto.nome.toLowerCase().includes(texto);
    const categoriaMatch = produto.categoria.toLowerCase().includes(texto);
    return nomeMatch || categoriaMatch; 
  }
    return categoriaSelecionada === 'Todas' || produto.categoria === categoriaSelecionada;
  });

  return (
    <>
     <Home />
     <Categorias setCategoriaSelecionada={handleCategoria} 
       categoriaSelecionada={categoriaSelecionada}
     />
     <CampoDeBusca busca={busca} setBusca={setBusca} />
     <Cards produtosFiltrados={produtosFiltrados}
     />
    </>
  )
}

export default App;
