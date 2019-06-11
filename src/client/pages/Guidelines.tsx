import * as React from 'react'
import { useTranslation } from 'react-i18next';

import { ScrollToTopOnMount, smoothScroll } from '../utils/Utils';
import { Content } from '../components/Content';
import { Navigation, Footer } from '../components/HeaderFooter';

const css = require('../sass/main.scss');
const downloadCss = require('./Download.scss');

export const Guidelines: React.FunctionComponent = () => {
    let { t, i18n } = useTranslation();
    return (
        <div style={{ background: "linear-gradient(#D468EE, #7B68EE)" }}>
            <ScrollToTopOnMount />
                <main>
                <Navigation fixed={true} />
                    <section style={{ paddingTop: '100px' }}>
                        <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
                            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{t('guidelines.title')}</h1>
                            <p style={{ marginBottom: '40px' }} >{t('guidelines.lastupdated')}</p>
                        </div>
                    </section>
                    <section id="guidelines" style={{ background: "white" }}>
                        <Content>
                            <div className={css.guidelines} style={{ color: "black", background: "white", margin: "0 auto", maxWidth: "1200px" }}>

                            </div>
                        </Content>
                    </section>
                </main>
            <Footer />
        </div>
    )
}