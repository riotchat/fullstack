import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getVersion } from '../shared/utils';
// Pages
import { Home } from './pages/Home';
import { Branding } from './pages/Branding';

console.log(`The App version is ${getVersion()}`);

const AppImpl = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/branding' component={Branding} />
    </Switch>
);

export const App = hot(module)(AppImpl);
