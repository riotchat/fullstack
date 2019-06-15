import * as React from 'react'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { ScrollToTopOnMount, smoothScroll } from '../utils/Utils';
import { Content } from '../components/Content';
import { Navigation, Overlay, Footer } from '../components/HeaderFooter';

const css = require('../sass/main.scss');

export const ProfileCard: React.FunctionComponent<{
    name: string,
    pfp: string,
    position?: string,
    roles: string[],
    contributor?: boolean,
    social?: {
        riot?: string,
        github?: string,
        twitter?: string,
        site?: string
    }
}> = (props) => {
    let { t, i18n } = useTranslation();
    return (
        <div className={css['team-card']}>
            {props.contributor && (
                <div className={css['profile-contributor']} style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "12px" }}><i className={`${css.icon} bx bxl-github`} style={{ color: 'black', margin: "0", fontSize: "20px", verticalAlign: "bottom", marginRight: "5px" }}></i>GitHub Contributor</span>
                </div>
            )}
            <div className={css['profile-picture']}>
                <div className={css['profile-overlay']} />
                <img src={props.pfp} width="100px" />
            </div>
            <h2 className={css['team-name']}>{props.name}</h2>
            {props.position !== undefined && (
                <p>{props.position}</p>
            )}
            {props.roles && (
                <ul style={{ listStyle: "none", padding: "0", color: "grey", textAlign: "center", fontSize: "14px" }}>
                    {props.roles.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            )}
            {props.children && (
                <div className={css['profile-bio']}>
                    <p className={css['profile-description']}>{props.children}</p>
                </div>
            )}
            {props.social && (
                <ul className={css['profile-social-links']}>
                    {props.social.riot && (
                        <li>
                            <a target="_blank" href={`https://twitter.com/${props.social.riot}`}>
                                <img src="/assets/downloads/branding/logo-gradient-r.svg" height="20px" style={{ margin: "4px 24px 0 14px"}}/>
                            </a>
                        </li>
                    )}
                    {props.social.twitter && (
                        <li>
                            <a target="_blank" href={`https://twitter.com/${props.social.twitter}`}>
                                <i className={`${css.icon} bx bxl-twitter`} style={{ color: 'mediumslateblue' }}></i>
                            </a>
                        </li>
                    )}
                    {props.social.github && (
                        <li>
                            <a target="_blank" href={`https://github.com/${props.social.github}`}>
                                <i className={`${css.icon} bx bxl-github`} style={{ color: 'mediumslateblue' }}></i>
                            </a>
                        </li>
                    )}
                    {props.social.site && (
                        <li>
                            <a target="_blank" href={props.social.site}>
                                <i className={`${css.icon} bx bx-globe`} style={{ color: 'mediumslateblue' }}></i>
                            </a>
                        </li>
                    )}
                </ul>
            )}
        </div>
    )
}

export const About: React.FunctionComponent<RouteComponentProps> = (props) => {
    let { t, i18n } = useTranslation();
    return (
        <div>
            <ScrollToTopOnMount />
            <Helmet>
                <title>Riot | {t('about.name')}</title>
            </Helmet>
            <main>
                <header style={{ backgroundImage: "url('/assets/images/about-us.png')", height: "100vh" }}>
                    <Navigation fixed={true} />
                    <div className={css['header-opacity-layer']}/>
                    <div className={css.header}>
                        <div className={css['header-info']}>
                            <img src="/assets/downloads/branding/logo-gradient-r.svg" height="48px" />
                            <h2>Riot was created to bring people back together.</h2>
                            <p>From your first dirt block to the greatest guild you have ever played with, we all play hundreds of games and we know how important communication is, RIOT strives to create a free and open platform which allows communities to thrive and allows us to be fully transparent with our users. We believe everyone should have total freedom over how they talk with each other, our goal is to provide that.</p>
                        </div>
                    </div>
                </header>
                <section id="stats" style={{ background: "linear-graident(black, white)", textAlign: 'center', padding: '100px 0' }}>
                    <div className={css['content-download']}>
                        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>Who's using Riot?</h1>
                        <p style={{ marginBottom: '40px' }} >Hint: it's more people than you might think.</p>
                    </div>
                    <div className={css.team}>

                    </div>
                </section>
                <section id="team" style={{ background: "mediumslateblue", textAlign: 'center', padding: '100px 0' }}>
                    <div className={css['content-download']}>
                        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>Our Team</h1>
                        <p style={{ marginBottom: '40px' }} >The Masterminds behind Riot.</p>
                    </div>
                    <div className={css.team}>
                        <div className={css['team-wrap']}>
                            <ProfileCard name="nizune" pfp="/assets/images/nizune.png" position="Co-founder" roles={["Front-end Developer", "Graphics Designer"]}
                                social={{ riot: "nizune", twitter: "nizune_", github: "nizune", site: "https://renevinter.gq" }}>
                                    Interested in modern web design, and web development. Also peanut butter rocks.
                            </ProfileCard>
                            <ProfileCard pfp="/assets/images/fatalerrorcoded.png" name="FatalErrorCoded" position="Co-founder" roles={["Front-end Developer", "Back-end Developer"]}
                                social={{ twitter: "FatalErrorCoded", github: "FatalErrorCoded", site: "https://fatalerrorcoded.eu" }}>
                                    something something
                                    Oops my system crashed!
                            </ProfileCard>
                            <ProfileCard pfp="/assets/images/insert.png" name="insert" roles={["Back-end Developer"]}
                                social={{ twitter: "insertish", github: "insertish", site: "https://insrt.uk" }}>
                                    insert told me to put nothing here yet so here you go
                            </ProfileCard>
                        </div>
                    </div>
                </section>
                <section id="contributors" style={{ background: "white", textAlign: 'center', padding: '100px 0' }}>
                    <div className={css['section-wrap']}>
                        <div className={css['content-download']}>
                            <h1 style={{ color: "mediumslateblue", fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>Contributors</h1>
                            <p style={{ color: "black", marginBottom: '40px' }}>The amazing people that helped Riot become what it is today.</p>
                        </div>
                        <span style={{ color: "black" }}>We recognize ✨ All Contributors. <a style={{ color: "mediumslateblue" }} href="https://allcontributors.org/" target="_blank">Learn more</a></span>
                    </div>
                </section>
                <section id="jobs" style={{ background: "white", textAlign: 'center', padding: '100px 0' }}>
                    <div className={css['section-wrap']}>
                        <div className={css['content-download']}>
                            <h1 style={{ color: "mediumslateblue", fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>Work</h1>
                            <p style={{ color: "black", marginBottom: '40px' }}>Come make Riot happen with us. Check out our open positions:</p>
                        </div>
                        <a style={{ color: "mediumslateblue" }} href="" target="_blank">View more open positions</a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}