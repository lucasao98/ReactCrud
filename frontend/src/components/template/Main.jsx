import React from 'react';
import './Main.css';
import Header from './Header';

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <div className="content">
        <div className="conteudo p-3 mt-2 ml-1">
               {props.children}
        </div>
        </div>
    </React.Fragment>