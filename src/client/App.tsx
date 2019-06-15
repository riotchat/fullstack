import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Info } from 'log74/dist/index.web';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getVersion } from '../shared/utils';

import i18next from 'i18next';
import XHRBackend from 'i18next-xhr-backend';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { Error404 } from './pages/errors/404';
// Pages
import Home from './pages/Home';
import { Branding } from './pages/Branding';
import { Developers } from './pages/developers/Developers';
import { Download } from './pages/Download';
import { Pro } from './pages/Pro';
import { Translate } from './pages/Translate';
import { SwitchToRiot } from './pages/SwitchToRiot';
import { Guidelines } from './pages/Guidelines';
import { About } from './pages/About';

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

            Info(t(`common:appversion`, {
                version: getVersion()
            }));
			
			let strings = [], colours = ['red', 'blue', 'green', 'magenta', 'yellow'];
			for (let i=0;i<5;i++)
				strings.push(`color: ${colours[i]}; font-size: 16em; line-height: 1em; text-shadow: 2px 2px 0px white; font-family: Comic Sans MS`);
			
			console.log('%cS%cT%cO%cP%c!', ...strings);
			console.log('%cHey! Got your attention? Good.', 'color: gray; font-size: 2em; line-height: 1em');
			console.log('%cDon\'t copy and paste anything here, especially if someone else told you to do so, chances are it won\'t do any good and it will probably give an attacker access to your account.', 'color: red; font-size: 3em; line-height: 1em');
            console.log('%cA RIOT employee would never ask you to paste anything here.', 'color: gray; font-size: 1.5em; line-height: 1em');
            console.log('%cIf you do know what the code you\'re about to paste in does though, you should either consider contributing to https://github.com/riotchat or come work with us at https://riotchat.gq/jobs.', 'color: gray; font-size: 1.5em; line-height: 1em');
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
                <Route path='/switch' component={SwitchToRiot} />
                <Route path='/guidelines' component={Guidelines} />
                <Route path='/about' component={About} />
                <Route component={Error404} status={404} />
            </Switch>
        );
        else return null;
    }
};

export const App = hot(module)(AppImpl);
