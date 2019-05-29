import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const css = require('./Home.css');
const { logo } = require('./HeaderFooter.css');

export const Home: React.FunctionComponent = () => (
    <div>
        <Helmet>
            <title>Riot | It's time to speak up.</title>
        </Helmet>
        <main>
            <header>
                <nav>
                    <Link to="/" className={logo}>RIOT</Link>
                    <input className={css['menu-btn']} type="checkbox" id="menu-btn" />
                    <label className={css['menu-icon']} htmlFor="menu-btn">
                        <span className={css.navicon}></span>
                    </label>
                    <ul className={css.menu}>
                        <li><Link to="/" className={css.active}>Home</Link></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/developers">Developers</a></li>
                        {/* <ul>
                            <li><a href="x">Get Started</a></li>
                            <li><a href="x">Developer Portal</a></li>
                            <li><a href="x">Open Source</a></li>
                        </ul> */}
                        <li><a className={css.download} href="/download">Download</a></li>
                    </ul>
                </nav>
                <div className={css.header}>
                    <div className={css['header-info']}>
                        <div className={css.text}>
                            <h1>Let your voice be heard.</h1>
                            <p>Let's riot together.</p>
                        </div>
                        <div className={css.buttons}>
                            {/* <a id="download" href="riot.html" class="button" style="background-color: mediumslateblue"><i class='bx bxl-windows'></i> Download</a> */}

                            <a href="#sign-up" className={css['btn-purple']}>Sign up to test</a>
                            <a href="#learn-more" className={css.button}>Learn More</a>
                        </div>
                    </div>
                </div>
            </header>
        </main>
    </div>
);
