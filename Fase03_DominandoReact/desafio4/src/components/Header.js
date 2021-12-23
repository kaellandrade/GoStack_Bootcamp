import React from "react";
import Logo from "../assets/logo.png";
import LogoPerfil from "../assets/perfil.svg";
const Header = (props) => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <a href="#">
            <img src={Logo} />
          </a>
        </div>
        <div className="perfil-link">
          <a href="#">
            Meu perfil
            <img src={LogoPerfil} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
