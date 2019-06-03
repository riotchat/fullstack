import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getVersion } from '../shared/utils';

import { Error404 } from './pages/errors/404';
// Pages
import { Home } from './pages/Home';
import { Branding } from './pages/Branding';
import { Developers } from './pages/Developers';

console.log(`The App version is ${getVersion()}`);

const AppImpl = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/branding' component={Branding} />
        <Route path='/developers' component={Developers} />
        <Route component={Error404} /> 
    </Switch>
);

export const App = hot(module)(AppImpl);
