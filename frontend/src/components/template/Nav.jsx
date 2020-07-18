import React from 'react';
import './Nav.css';

export default props =>
   <aside className="menu">
       <nav className="menu-txt mt-2 ml-2">
            <a href="#/">
              <i className="fa fa-home p-3 text-dark"></i> Home
            </a>

            <a href="#/players">
              <i className="fa fa-address-book p-3 text-dark"></i> Cadastro
            </a>

            <a href="#/lista">
              <i className="fa fa-user p-3 text-dark"></i> Jogadores
            </a>
       </nav>
   </aside>