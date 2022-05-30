//Router
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import App from '../App';
import Descarga from './Descargar';
import About from './About';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={App} />
            <Route exact path="/descargar" component={Descarga} />
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>
);

export default Router;