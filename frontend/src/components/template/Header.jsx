import React from 'react';
import './Header.css';

export default props =>
    <header className="header">
        <h1 className="ml-2 text-light">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>

        <h4 className="ml-2 text-light p-4">
        <i className={`fa fa-${props.iconsub}`}></i> {props.subtitle}
        </h4>
    </header>