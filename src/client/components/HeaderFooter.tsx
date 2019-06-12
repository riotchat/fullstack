import * as React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation, Translation } from 'react-i18next';
import Scrollbars from 'react-custom-scrollbars';

const css = require('./HeaderFooter.scss');
const homeCss = require('../sass/main.scss');

type FooterMenuProps = {
    header: string,
    children?: React.ReactNode
}

const Language: React.FunctionComponent<{code: string}> = (props) => {
    let { i18n } = useTranslation();
    let countryCode = props.code.split(/-|_/)[1].toLowerCase();
    return (
        <div onClick={(e) => {
            i18n.loadLanguages(props.code).then(() => {
                i18n.changeLanguage(props.code);
            });
        }} className={`${css.language} ${i18n.language === props.code ? css.active : ""}`}>
            <img src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/${countryCode}.svg`} height="16px" style={{marginRight: "10px", borderRadius: "2px"}}/>{props.children}
        </div>
    )
}

export class Navigation extends React.Component<{ fixed?: boolean }, { openMenu: boolean, openLanguageMenu: boolean }> {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            openLanguageMenu: false
        }
        
        this.onMenuChange = this.onMenuChange.bind(this);
        this.onLanguageMenuChange = this.onLanguageMenuChange.bind(this);

        (this as any).languageCheckbox = React.createRef();
    }

    onMenuChange(e: React.ChangeEvent) {
        this.setState({
            openMenu: (e.target as any).checked,
            openLanguageMenu: false
        });
        (this as any).languageCheckbox.current.isSelected = false;
    }

    onLanguageMenuChange(e: React.ChangeEvent) {
        if(!this.state.openMenu) {
            (this as any).languageCheckbox.current.isSelected = false;
            return;
        }
        this.setState({
            openMenu: this.state.openMenu,
            openLanguageMenu: (e.target as any).checked
        });
    }

    render() {
        //let { t, i18n } = useTranslation();
        return (
            <Translation>
                { (t, { i18n }) =>
                    <nav className={`${css.navigation} ${this.props.fixed ? css.fixed : ""} ${this.state.openMenu ? css.active : ""}`}>
                        <div className={`${css.bkg} ${this.state.openMenu ? css.active : ""}`} />
                        <Link to="/" className={css.logo}>RIOT</Link>
                        <input className={css['menu-btn']} type="checkbox" id="menu-btn" onChange={this.onMenuChange} />
                        <input className={css['language-menu-btn']} type="checkbox" id="languagemenu-btn" onChange={this.onLanguageMenuChange} ref={(this as any).languageCheckbox} />
                        <label className={css['menu-icon']} htmlFor="menu-btn">
                            <span className={css.navicon}></span>
                        </label>
                        <label className={`${css['menu-icon']} ${css.languageButton}`} htmlFor="languagemenu-btn"></label>
                        <ul className={css.menu}>
                            <li><NavLink to="/" exact activeClassName={css.active}>{t('navigation.home')}</NavLink></li>
                            <li><NavLink to="/blog" activeClassName={css.active}>{t('navigation.blog')}</NavLink></li>
                            <li><NavLink to="/developers" activeClassName={css.active}>{t('navigation.developers')}</NavLink></li>
                            {/* <ul>
                                    <li><a href="x">Get Started</a></li>
                                    <li><a href="x">Developer Portal</a></li>
                                    <li><a href="x">Open Source</a></li>
                                </ul> */}
                            <li><NavLink activeClassName={css.active} to="/download">{t('navigation.download')}</NavLink></li>
                            <li>
                                <div className={`${css.languageSelector} ${this.state.openLanguageMenu ? css.active : ""}`}>
                                    <a className={`${css.languageButton} ${css.mobileHide}`}></a>
                                    <div className={css.dropdown}>
                                        <div className={css.languageList}>
                                            <Language code="cs-CZ">Čeština</Language>
                                            <Language code="en-GB">English (GB)</Language>
                                            <Language code="en-US">English (US)</Language>
                                        </div>
                                        <Link to="/translate" className={css.translate}><i className={`${css.icon} bx bx-globe-alt`} style={{color: '#7abf7c', fontSize: "24px"}}></i> {t('navigation.helptranslate')}</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                }
            </Translation>
        )
    }
}

export const Overlay: React.FunctionComponent<FooterMenuProps> = (props) => (
    <div className={css.opacity} />
);

export const FooterMenu: React.FunctionComponent<FooterMenuProps> = (props) => (
    <div className={css['footer-menu']}>
        <h5>{props.header}</h5>
        <ul>
            {props.children && React.Children.map(props.children, (child, index) =>
                <li key={index}>{child}</li>)}
        </ul>
    </div>
);

export const Footer: React.FunctionComponent = (props) => {
    let { t, i18n } = useTranslation();

    let year = "2019";
    if(new Date().getFullYear().toString() !== year) year = `${year} - ${new Date().getFullYear()}`;
    return <footer>
        <div id="footer" className={css.wrapper}>
            <div className={css.logoWrapper}>
                <h1 className={css.logo}>RIOT</h1>
                {/*<span className={css.copyright}>&copy;{year} Riot Communications</span>*/}
            </div>
            <div className={css.social}>
                <a href="https://facebook.com" target="_blank"><img src="/assets/images/social/facebook.svg" title="Facebook" height="25px" /></a>
                <a href="https://twitter.com/riotchat_" target="_blank"><img src="/assets/images/social/twitter.svg" title="Twitter" height="25px" /></a>
                <a href="https://instagram.com/riotchat" target="_blank"><img src="/assets/images/social/instagram.svg" title="Instagram" height="25px" /></a>
            </div>
            <FooterMenu header="Riot">
                <Link to="/download">{t('navigation.download')}</Link>
                <Link to="/#lightweight">{t('navigation.features')}</Link>
                <Link to="/branding">{t('navigation.branding')}</Link>
                <Link to="/pro">Riot Pro<span className={homeCss.new}>{t('string.new')}</span></Link>
            </FooterMenu>
            <FooterMenu header={t('navigation.developers')}>
                <Link to="/developers">{t('navigation.devportal')}</Link>
                <Link to="/developers/documentation">{t('navigation.documentation')}</Link>
                <Link to="/developers/applications">{t('navigation.applications')}</Link>
                <a href="/#open-source">{t('navigation.opensource')}</a>
            </FooterMenu>
            <FooterMenu header={t('navigation.developers')}>
                <Link to="/developers">{t('navigation.devportal')}</Link>
                <Link to="/developers/documentation">{t('navigation.documentation')}</Link>
                <Link to="/developers/applications">{t('navigation.applications')}</Link>
                <a href="/#open-source">{t('navigation.opensource')}</a>
            </FooterMenu>
            <FooterMenu header={t('navigation.company')}>
                <Link to="/about">{t('navigation.about')}</Link>
                <Link to="/blog">{t('navigation.blog')}</Link>
                <Link to="/jobs">{t('navigation.jobs')}</Link>
            </FooterMenu>
        </div>
    </footer>
}