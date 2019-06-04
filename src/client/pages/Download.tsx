import * as React from 'react'
import { Helmet } from 'react-helmet';
import { Route, Link } from 'react-router-dom';

import { ScrollToTopOnMount, smoothScroll } from '../utils/Utils';
import { Content, ContentOpacityLayer } from '../components/Content';
import { Navigation, Footer } from '../components/HeaderFooter';

import { DeveloperDocs } from './developers/Docs';

const css = require('../sass/main.scss');
const brandingCss = require('./Branding.scss');

export const Developers: React.FunctionComponent = () => (
    <div>
        <Route exact path="/developers" render={() => (
            <div>
                <ScrollToTopOnMount />
                <main>
                    <header style={{ backgroundImage: 'url("/assets/images/developer-portal.png")', backgroundColor: '#160C58' }}>
                        <Navigation fixed={true} />
                        <div className={css.header}>
                            <div className={css['header-info']}>
                                <div className={css.text}>
                                    <h2 style={{ fontSize: "16px" }}>Welcome to the</h2>
                                    <h1 style={{ fontSize: "40px", marginBottom: "7px", fontFamily: "'Source Code Pro', monospace" }}>Developer Portal</h1>
                                    <p style={{ marginBottom: "20px" }}>Get started developing for Riot, from bots that can help with your server to custom clients.</p>
                                </div>
                                <div className={css.buttons}>
                                    <Link to="/developers/applications" className={css['btn-purple']}>Open Developer Portal</Link>
                                    <Link to="/developers/documentation" className={css['button']}>Documentation</Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section id="blog" style={{ background: "linear-gradient(120deg, #ff9a9e, #fad0c4 )" }}>
                        <Content>
                            <div className={css.hook}>
                                <h2 style={{ fontSize: "40px", fontFamily: "'Source Code Pro', monospace" }}>What's New?</h2>
                                <p>June 4th, 2019 (add current date and time)</p>
                                <p>Add blog post cards</p>
                                <Link to="/pro" className={css.more}>View Blog</Link>
                            </div>
                            <div className={css.contentImage}>
                                <div className={css.logoGrid}>
                                    <div className={css.logoBig}>
                                        <div className={css.logoSmall}>
                                            <div className={css.logoSmall}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </section>
                    <section id="github" style={{ color: "black", background: "linear-gradient(120deg, #fdfbfb, #ebedee )" }}>
                        <Content>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEh0lEQVRoQ+1ZXXLTSBDuVqTkcUVZch4xJ1hzAsIJSE6w4QSQEyScAHOCmBNgToA4AeYEJI+2xrXiMZasplqxgjKaGY0Uebeoih6tmVZ//fP1jxH+8Af/cP3hEcD/7cHePBCG4dgBeEFER4A4QoBxFRwBzJEoIYAoB4iEEF/7AP8gAL7v+/uu+wYRTwFg1FKhq5xolmbZhyRJrlrevTveCQAr7rnuuYP4tuuHJe9M12l6liRJ0lZeawDDweAYEC8R0W/7MdN54vAiOotXq2kbua0AhEHwvi+r65QkgOkyjl/bgrAGMAzDSwTgWN/9QxTdZNmJTUhZAfhPlS/NQxQthHjZZK1GAMMguEDE8yZBu3hvE05GAEEQHO0hfpGVI4CPOdHUATgqwgrxaRcARPQTiaYbxNke0TE4zhtZTp7nr02JrQXAVHnged9U/L4heimEiMqPhYPBKSJOEPEv/o0AvnPRukeViD4C/F28Z8UBLhZCTMozvu+PDjzvR81YRMk6y57p8kELwBQ6iziu3WPAruuOq8BUXmGvZlk2Vyl0GIakusMeX8axkkCUALYV9oeO61UAuoSQfEcHgM/dpCl7oVaxlQAOg+AtIL7XKXWTpk9sKK4tKBMAyPMPi9WqVvmVAIZh+E1uxqrKyDnQVlHV+W0zyDmne64WcfxMfqmKZWUy/aZn+rwU4rgPpWshNBhMVExUnlMZrgaAGcVxnEtD+ChjsQ9A29y7KtlMwUjvlkJcVH+vATg0WIFod9YvlRqG4RQB/lGykeL7dQBBEAHiC42AmgX6sHxVBne76DifNHQ6X8bxc7MHTADy/GS5Ws36VroqT1f9yzMyhdc9EIZcDZXTVVNZ7wPYgwEMw3BelnybJOpDadsQ4nPNHjCEkK6Y9AnC2P0SXS+EuBcd7ZIYoJZEfSrPsoZBMEPEV0q5RF8XQhx1plG+qOtJ+gCy7YD/1clS0XjNAyYaY8GmzvChIBqHJ6KzagvO31O2xQeep7UCX9pVL4REX0zbjhzgeRzHc2MI8ctDUyLfDiRJDnDS1PvbeoSp0wH4ZFzVKBJY6QH+sdYPEV0TYiLTK8+s6zR913WzxlPYvuedW207FOGjBbBlg+RuRCSaLYU4KZLMdWdyq8F7TyKKgGiebjafdbNCsdHb23sFiGNE5Hn63v7UkLw/11k2UsnVjpTyUMNKrtO0WHPse16kKnY8Cy/j2KhUU3gqeyAibQ9m3ErIVblkIB4+kCiS216bVqOJ5WoAiK5vsmzceqgvcuF2ZX5vSirrwBYE9+YcCgkhRus0vbDJB+PoKCFoYrzGxZac0LTNB1uGUZ2zBqBJ3EYalT8qDzk50SQW4qwrCBsAtgWz0QOlkopJjVcckw1RUViQaBSvVh9tQDUBsFXeSKMqRZrmZdt9kRGARdi0DqHqhSJ5AXhuLdaE1edBAIiuNwCnbau7dQjV8oKXXwC8ALtb7HYBwHtSDkV522ATiq1DSBtWt3/ygdyr65TgYkaIPuX5pO1fSrLMzh6wtdCuzz0C2LWFm+Q/eqDJQrt+/wt19G5PCqGzHwAAAABJRU5ErkJggg==" />
                                <h2 style={{ fontSize: "28px", fontFamily: "'Source Code Pro', monospace" }}>GitHub</h2>
                                <p>We use GitHub to host Riot and its core components.</p>
                                <p>Contributions are always welcome. Please read our commit policy before submitting an issue request.</p>
                                <a href="https://github.com/riotchat" className={css.button}>View on GitHub</a>
                            </div>
                            <div className={css.contentImage}>
                                <div className={css.logoGrid}>
                                    <div className={css.logoBig}>
                                        <div className={css.logoSmall}>
                                            <div className={css.logoSmall}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </section>
                    <section id="docs" style={{ background: "linear-gradient(120deg, #0A0056, #160D58)" }}>
                        <Content>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABXElEQVRoQ+2Z7U0DMQyGn26AJwAmKGxQNmADGKFMAN0EJihMABvACN3A3aDIUioFdB9KArlc5Ugn9ccleb9yteIFMx+LmePHCUzt4KgDqnoG3AH3wFVFwDvgC3gQEfvdOQYJqKoB3gIXFYH/3moPXPeR6CUQlP+cGPyRzJuI3HaJOETgCXicUPl4652IXKYSMPX/LfMiMhbfQwy47/0hB34s8NdOOIGgqDuQGy2PkEcoNzthnkfII+QROpFSQlVXUdG4EZEPM1dV266FgJsA3AjEwwhsgPemi7nUI9RcNeoEpv4fcAfcgdQMFL7vX6FCAYunuwPFEhYu4A4UClg83R0AXoC1iNh1dzMj5WZOWgNvKp40AWvvLKOsPId2z2wi1FKDg5yvkDX3zIXzFk5sMoFwM2AdmtcWSGQRCCTMCWux2hOfiarGZBOoijJjs9FGd8aaVac4gapyd2z2DaYt6TEzBOYiAAAAAElFTkSuQmCC"/>
                                <h2 style={{ fontSize: "28px", fontFamily: "'Source Code Pro', monospace" }}>Documentation</h2>
                                <p>Read up on how Riot works and functions.</p>
                                <p>Use our documentation to create bots for your community, create custom clients or integrate your game with Riot Integrations.</p>
                                <Link to="/developers/documentation" className={css['btn-purple']}>View Documentation</Link>
                            </div>
                            <div className={css.contentImage}>
                                <img src="/assets/images/documentation.png" width="300px" />
                            </div>
                        </Content>
                    </section>
                    <section id="integrations" style={{ backgroundImage: 'url(/assets/images/riot-integrations.jpg)', backgroundColor: "white" }}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <span className={css['coming-soon']}>Coming Soon</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACW0lEQVRoQ+1ZQU7bQBT9PwYWsCBVwqJyJOAGya6bWPQE5Qa0N0hvkBuQG9DegJ6Aytl0F+cGQUroIkFxF7AgiT8ay0ghtcffmTE4ynj95897/3175n0jbPiDG44fDIH3VlCrAhVneFECbAFAPSLmBUCde7f2My+iWgiUz6bl3eDxZgn4Kl5vVtr/7P/+4OsmooXAkTPqScC/YPbGrt0oHIFq866FSJccYAHRt/tu7QcnlhujrACz+rmpoIMAcasl4saurbzn8n7SZOVPf092doNLxPCrcpIF6BqxAyLw5rPSd//PxwF3fSKBEPzeooeAZW4yHXEE5M+frAaXRCKBanN0jQhfdIDKmoMIfk269jlnXTIBZzh96+ovAR6MXftUicCRM8r0cnI2yxLDfdkTFTAEspQ7JtYoYFpo21uI6ydk54CPgIeKhdS1PNFPSO9ClebwKwK2EeFYFxKFPLF+IvVmKNzWzuLRKwKJOD+RSkBUTChRQrxSqJ6upf+pwCIQed6pLhQqeVYPuO0gUJgWIuqPu7WXkU0oZKoCUfuIqUPejiy1szK/xNGgql0E8BBTfakC1fc1NK/VIOrPrIOzuMFYYf1AyICoHwB0ZLOkwhIwfsD4gdSPojzAtNDGt1DVGWY2NERwS0DthXVwLRrEWjycr+MnRJ5J12ad/NpGi2LTubVfXz1s1vETWkaL0XDX49pK2c+LLJdBAvo3f7LqysNd0QLReL0jfh/JHJnYdOLWpFPstJYUCgKE4/UWFzzrNqr4Ncx9eep1OncEihsYAooFVF5uFFAuoWKCZ4iyHUBrDEdFAAAAAElFTkSuQmCC" />
                                <h2 style={{ fontSize: "28px", fontFamily: "'Source Code Pro', monospace" }}>Riot Integrations</h2>
                                <h3>Connect your game to Riot.</h3>
                                <p>Integrate things like game statistics, or a spectate match button, straight into Riot.</p>
                                <p>Contributions are always welcome. Please read our commit policy before submitting an issue request.</p>
                            </div>
                            <div className={css.contentImage}>
                                <img src="/assets/images/lol-logo.png" width="200px" />
                            </div>
                        </ContentOpacityLayer>
                    </section>
                </main>
                <Footer />
            </div>
        )}></Route>
        <Route path="/developers/documentation" component={DeveloperDocs} />
    </div>
)