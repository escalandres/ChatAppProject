//Router
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/home" element={<Home/>} />
             */}
        </Switch>
    </BrowserRouter>
);

export default Router;