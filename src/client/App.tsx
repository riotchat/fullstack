import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getVersion } from '../shared/utils';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'

import i18next from 'i18next';
import XHRBackend from 'i18next-xhr-backend';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Error404 } from './pages/errors/404';
// Pages
import { Home } from './pages/Home';
import { Branding } from './pages/Branding';
import { Developers } from './pages/Developers';
import { Download } from './pages/Download';
import { Pro } from './pages/Pro';
import { Translate } from './pages/Translate';

let localsLoaded = false;
class AppImpl extends React.Component<{}, {localsLoaded}> {
    constructor(props) {
        super(props);
        this.state = {
            localsLoaded
        }
    }

    componentWillMount() {
        if(this.state.localsLoaded) return;
        i18next.use(initReactI18next).use(LanguageDetector).use(XHRBackend).init({
            fallbackLng: 'en-US',
            ns: ['common'],
            defaultNS: 'common',
            debug: true,
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }
        }).then((t) => {
            localsLoaded = true;
            this.setState({
                localsLoaded: true
            });

            console.log(t(`common:appversion`, {
                version: getVersion()
            }));
        });
    }

    render() {
        if(this.state.localsLoaded) return (
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
        else return null;
    }
};

export const App = hot(module)(AppImpl);
