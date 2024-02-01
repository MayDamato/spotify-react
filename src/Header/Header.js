import React from "react"; //importando o react
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLefth from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';
//exportando a função header do código HTML:
const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLefth} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>
            <div className="header_search">
                    <img src={search} alt=""/>
                    <input id="search-input" maxlength="800"  autoCorrect="off"  autoCapitalize="off" spellCheck="false" placeholder="O que você quer ouvir?" value=""/>
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;