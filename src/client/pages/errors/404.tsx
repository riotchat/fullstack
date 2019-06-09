import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import { Navigation } from '../../components/HeaderFooter';

const css = require('../../sass/main.scss');

export const Error404: React.FunctionComponent = () => {
    let { t, i18n } = useTranslation();
    return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(-20deg, #00D1D8, #009FA8)" }}>
        <Navigation />
        <div style={{ textAlign: "center" }}>
            <img src="/assets/images/404.png" width="100%" style={{ maxWidth: "600px" }} />
            <h2>{t('error.404')}</h2>
            <p><Trans i18nKey='error.goback'>
                <Link to="/"></Link>
            </Trans></p>
            {/*<div className={css.buttons}>
                <a style={{textTransform: "uppercase", cursor: "pointer"}} className={css['btn-purple']}>Play Sokoban Muliplayer instead</a>
            </div>*/}
        </div>
    </div>
    )
};

class Sokoban extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            yeet
        </div>
    }
}