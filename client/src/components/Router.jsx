//Router
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import App from '../App';
import Descarga from './Descargar';
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={App} />
            <Route exact path="/descargar" component={Descarga} />
            
        </Switch>
    </BrowserRouter>
);

export default Router;