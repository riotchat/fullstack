import * as React from 'react'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { ScrollToTopOnMount, smoothScroll } from '../utils/Utils';
import { Content } from '../components/Content';
import { Navigation, Footer } from '../components/HeaderFooter';

const css = require('../sass/main.scss');
const formCss = require('../sass/Form.scss');

export const SwitchToRiot: React.FunctionComponent<RouteComponentProps> = (props) => {
    let { t, i18n } = useTranslation();
    console.log(props.location.search);
    if (props.location.search != undefined) return (
        <div style={{ width: "100%", minHeight: "100%", background: "linear-gradient(#D468EE, #7B68EE)" }}>
            <Navigation fixed={false} />
            <div style={{ textAlign: 'center', paddingTop: '100px' }}>
                <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{t('switch.completion.title')}</h1>
                <p style={{ marginBottom: '40px' }}>{t('switch.completion.subtitle')}</p>
            </div>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className={formCss.form} style={{ margin: "0 auto" }}>
                    <form action="/action_page.php">
                        <div className="discord-import">
                            <div className="picture">

                            </div>
                            <div className={formCss.user}>
                                <div className={formCss.profilePicture}>
                                    <div className={formCss.edit}>
                                        <i className={`${formCss.icon} bx bxs-pencil`} style={{color: '#FFFFFF'}}></i>
                                    </div>
                                    <img className={formCss.picture} src="/assets/images/header.png" />
                                </div>
                                <div>
                                    <input className={formCss.nickname} type="text" name="username" placeholder={t('string.username')} required /><br />
                                    <span className={formCss.welcome}>{t('string.welcome')}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${formCss.input} ${formCss.email}`} style={{ marginTop: '30px' }}>
                            <input className={formCss.inputField} type="email" name="email" autoComplete="email" placeholder={t('string.email')} required />
                        </div>
                        <div className={`${formCss.input} ${formCss.pass}`}>
                            <input className={formCss.inputField} type="password" name="password" autoComplete="current-password" placeholder={t('string.password')} required />
                        </div>
                        <div className={formCss.tos}>
                            <div className={formCss.checkbox}>
                                <input type="checkbox" id="tosCheckbox" />
                                <label htmlFor="tosCheckbox"></label>
                            </div>
                            <p className={formCss.tos}>I agree to the Terms of Service and the community guidelines.</p>
                        </div>
                        <input type="submit" value="Create account" />
                    </form>
                </div>
            </div>
        </div>
    ); else return (
        <div style={{ background: "linear-gradient(#D468EE, #7B68EE)" }}>
            <ScrollToTopOnMount />
            <Helmet>
                <title>Riot | {t('switch.name')}</title>
            </Helmet>
                <main>
                <header style={{ background: "transparent" }}>
                <Navigation fixed={true} />
                <div style={{ textAlign: 'center', paddingTop: '100px' }}>
                    <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{t('switch.title')}</h1>
                    <img src="/assets/svg/switch-to-riot.svg" height="98px" style={{ margin: "50px 0" }}></img>
                    <p style={{ marginBottom: '40px' }} >{t('switch.subtitle')}</p>
                    <a href="#step1" className={css.buttonGradient} onClick={smoothScroll}>{t('switch.button')}</a>
                </div>
                </header>
                    <section id="step1">
                        <Content>
                        <div className={css['content-image']}>
                            <img className={css.image} src="/assets/images/security.png" />
                        </div>
                        <div className={css.hook}>
                            <span className={css.step}>1</span>
                            <h2>{t('switch.step1.title')}</h2>
                            <p>{t('switch.step1.text')}</p>
                            <a href="discord-login" className={css.buttonGradient} onClick={smoothScroll}>{t('switch.step1.button')}</a>
                        </div>
                        </Content>
                    </section>
                    <section id="step2">
                        <Content>
                        <div className={css.hook}>
                            <span className={css.step}>2</span>
                            <h2>{t('switch.step2.title')}</h2>
                            <p>{t('switch.step2.text')}</p>
                        </div>
                        <div className={css['content-image']}>
                            <img className={css.image} style={{ padding: "0 50px" }} src="/assets/images/security.png" />
                        </div>
                        </Content>
                    </section>
                </main>
            <Footer />
        </div>
    )
}