import React from 'react';
import './App.css'
import { HashRouter } from 'react-router-dom';

import Logo from '../components/template/Logo';
import Header from '../components/template/Header';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import Routes from './Routes';

export default props =>
        <HashRouter >
        <div className="app">
                <Logo />
                <Header />
                <Nav />
                <Routes />
                <Footer />
        </div>
        </HashRouter>
        