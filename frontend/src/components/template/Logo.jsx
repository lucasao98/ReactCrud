import React from 'react';
import './Logo.css';

import logo from '../../assets/images/logo.png';

export default props =>
    <aside className="logo">
       <img src={logo} alt="Logo" />
    </aside>