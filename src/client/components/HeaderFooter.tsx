import * as React from 'react'
import { Link } from 'react-router-dom';

const css = require('./HeaderFooter.css');
const homeCss = require('../pages/Home.css');

type FooterMenuProps = {
    header: string,
    children?: React.ReactNode
}

export const FooterMenu: React.FunctionComponent<FooterMenuProps> = (props) => (
    <div className={css['footer-menu']}>
        <h3>{props.header}</h3>
        <ul>
            {props.children && React.Children.map(props.children, (child, index) =>
                <li key={index}>{child}</li>)}
        </ul>
    </div>
);

export const Footer: React.FunctionComponent = (props) => (
    <footer>
        <div id="footer" className={css['footer-wrapper']}>
            <div className={css['footer-logo']}>
                <h1 className={css.logo}>RIOT</h1>
                <span className={css.copyright}>&copy;2019 Riot Communications</span>
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
                <Link to="/#open-source">Open-source</Link>
            </FooterMenu>
            <FooterMenu header="Company">
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/jobs">Jobs</Link>
            </FooterMenu>
        </div>
    </footer>
)