import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getVersion } from '../shared/utils';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'

import { Error404 } from './pages/errors/404';
// Pages
import { Home } from './pages/Home';
import { Branding } from './pages/Branding';
import { Developers } from './pages/Developers';
import { Download } from './pages/Download';
import { Pro } from './pages/Pro';
import { Translate } from './pages/Translate';

console.log(`The App version is ${getVersion()}`);

const AppImpl = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/branding' component={Branding} />
        <Route path='/developers' component={Developers} />
        <Route path='/download' component={Download} />
        <Route path='/pro' component={Pro} />
        <Route path='/translate' component={Translate} />
        <Route component={Error404} />
    </Switch>
);

export const App = hot(module)(AppImpl);
