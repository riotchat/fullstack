import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Helmet from 'react-helmet';

import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('react-app'));
