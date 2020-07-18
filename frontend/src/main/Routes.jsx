import React from 'react';
import { Switch,Route,Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';
import Lista from '../components/user/Lista';


export default props =>
    <Switch>
        <Route exact path='/' component={Home}/>;
        <Route path='/players' component={UserCrud}/>
        <Route path='/lista' component={Lista} />
        <Redirect from='*' to='/'/>
    </Switch>