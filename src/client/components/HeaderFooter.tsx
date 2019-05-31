import * as React from 'react'

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
            {props.children && React.Children.map(props.children, (child) => <li>{child}</li>)}
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
                <a href="https://facebook.com"><img src="assets/facebook.svg" title="Facebook" height="25px" /></a>
                <a href="https://twitter.com/riotchat_"><img src="assets/twitter.svg" title="Twitter" height="25px" /></a>
                <a href="https://instagram.com/riotchat"><img src="assets/instagram.svg" title="Instagram" height="25px" /></a>
            </div>
            <FooterMenu header="Riot">
                <a href="/download">Download</a>
                <a href="/#lightweight">Features</a>
                <a href="/branding">Branding</a>
                <a href="/pro">Riot Pro<span className={homeCss.new}>New!</span></a>
            </FooterMenu>
            <FooterMenu header="Developers">
                <a href="/developers">Developer Portal</a>
                <a href="/developers/documentation">Documentation</a>
                <a href="/developers/applications">Applications</a>
                <a href="/developers/open-source">Open-source</a>
            </FooterMenu>
            <FooterMenu header="Company">
                <a href="about.html">About</a>
                <a href="blog.html">Blog</a>
                <a href="jobs.html">Jobs</a>
            </FooterMenu>
        </div>
    </footer>
)