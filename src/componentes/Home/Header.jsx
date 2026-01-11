import React from 'react';
import Banner from '../../assets/banner.png';
import estilos from '../../componentes/Home/Header.module.css';

function Header() {
   return(
      <header className={estilos.header}>
         <img src={Banner} alt="banner" />
         <div className={estilos.bannerTexto}>
            <h1>RESTAURANT</h1>
            <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
         </div>
      </header>
   );
}
export default Header;