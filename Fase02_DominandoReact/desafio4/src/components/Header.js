import React from "react";
import propTypes from "prop-types";
import Logo from "../assets/logo.png";
import LogoPerfil from "../assets/perfil.svg";
const Header = ({ name }) => {
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
            {name}
            <img src={LogoPerfil} />
          </a>
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  name: "Meu perfil",
};
Header.propTypes = {
  name: propTypes.string,
};
export default Header;
