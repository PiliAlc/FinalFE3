// import React from 'react'
import { Link } from "react-router-dom";
// import { useContext } from "react";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  // const {theme , handleChangeTheme} = useContext(ContextGlobal);

  return (
    <nav className="barraNavegacion">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <p>FE3 Consultorio</p>
      <div className="linksNavegacion">
        <Link to="/" >Inicio</Link>
        <Link to="/favs" >Favoritos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <button /*onClick={handleChangeTheme}*/ >Cambiar Tema</button>
    </nav>
  )
}

export default Navbar