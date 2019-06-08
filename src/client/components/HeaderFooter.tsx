import * as React from 'react'
import { Link, NavLink } from 'react-router-dom';

const css = require('./HeaderFooter.scss');
const homeCss = require('../sass/main.scss');

type FooterMenuProps = {
    header: string,
    children?: React.ReactNode
}

export class Navigation extends React.Component<{ fixed?: boolean }, { openMenu: boolean }> {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        }
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(e: React.ChangeEvent) {
        this.setState({
            openMenu: (e.target as any).checked
        });
    }

    render() {
        return <nav className={`${css.navigation} ${this.props.fixed ? css.fixed : ""} ${this.state.openMenu ? css.active : ""}`}>
            <div className={`${css.bkg} ${this.state.openMenu ? css.active : ""}`} />
            <Link to="/" className={css.logo}>RIOT</Link>
            <input className={css['menu-btn']} type="checkbox" id="menu-btn" onChange={this.onChange} />
            <label className={css['menu-icon']} htmlFor="menu-btn">
                <span className={css.navicon}></span>
            </label>
            <ul className={css.menu}>
                <li><NavLink to="/" exact activeClassName={css.active}>Home</NavLink></li>
                <li><NavLink to="/blog" activeClassName={css.active}>Blog</NavLink></li>
                <li><NavLink to="/developers" activeClassName={css.active}>Developers</NavLink></li>
                {/* <ul>
                        <li><a href="x">Get Started</a></li>
                        <li><a href="x">Developer Portal</a></li>
                        <li><a href="x">Open Source</a></li>
                    </ul> */}
                <li><NavLink activeClassName={css.active} to="/download">Download</NavLink></li>
            </ul>
        </nav>
    }
}

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
    let year = "2019";
    if(new Date().getFullYear().toString() !== year) year = `${year} - ${new Date().getFullYear()}`;
    return <footer>
        <div id="footer" className={css.wrapper}>
            <div className={css.logoWrapper}>
                <h1 className={css.logo}>RIOT</h1>
                <span className={css.copyright}>&copy;{year} Riot Communications</span>
            </div>
            <div className={css.social}>
                <a href="https://facebook.com" target="_blank"><img src="/assets/images/social/facebook.svg" title="Facebook" height="25px" /></a>
                <a href="https://twitter.com/riotchat_" target="_blank"><img src="/assets/images/social/twitter.svg" title="Twitter" height="25px" /></a>
                <a href="https://instagram.com/riotchat" target="_blank"><img src="/assets/images/social/instagram.svg" title="Instagram" height="25px" /></a>
            </div>
            <FooterMenu header="Riot">
                <Link to="/download">Download</Link>
                <Link to="/#lightweight">Features</Link>
                <Link to="/branding">Branding</Link>
                <Link to="/pro">Riot Pro<span className={homeCss.new}>New!</span></Link>
            </FooterMenu>
            <FooterMenu header="Developers">
                <Link to="/developers">Developer Portal</Link>
                <Link to="/developers/documentation">Documentation</Link>
                <Link to="/developers/applications">Applications</Link>
                <a href="/#open-source">Open-source</a>
            </FooterMenu>
            <FooterMenu header="Company">
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/jobs">Jobs</Link>
            </FooterMenu>
        </div>
    </footer>
}