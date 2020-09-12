import React from 'react';
import './Header.css'

function Header() {
    return (
      <div className="header">
        <div className="iconFluke">
            <a href='#'>
            <img src="https://flu.ke/imagens/logotipo/logoAtivo.webp"></img>
            </a>
        </div>
        <div className="iconMenu">
            <a href='#'>
            <img src="https://flu.ke/imagens/menu/menu-mob.webp"></img>
            </a>
        </div>
      </div>
    );
  }

export default Header;