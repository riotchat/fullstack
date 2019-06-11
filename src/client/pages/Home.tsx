import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation, Trans } from 'react-i18next';

import { ScrollToTopOnMount, smoothScroll } from '../utils/Utils';
import { Content, ContentOpacityLayer } from '../components/Content';
import { Navigation, Footer } from '../components/HeaderFooter';
import { PriceTable } from '../components/PriceTable';

const css = require('../sass/main.scss');
const { logo } = require('../components/HeaderFooter.scss');

class TestingSignUpForm extends React.Component<{url: string, emailName: string, t}, {email: string, submission: 0 | 1 | 2}> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            submission: 0
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e: React.FormEvent) {
        e.preventDefault();
        let email = this.state.email;
        this.setState({
            email: this.state.email,
            submission: 1
        });

        try {
            let form = new FormData();
            form.append(this.props.emailName, this.state.email)

            let response = await axios(this.props.url, {
                method: 'POST',
                data: form
            })

            this.setState({
                email: this.state.email,
                submission: 2
            });
        } catch(e) {
            console.error(e);
            this.setState({
                email: this.state.email,
                submission: 2
            });
        }
    }

    render() {
        if(this.state.submission !== 2) {
            return <form className={css.testingSignUpForm} onSubmit={this.onSubmit}>
                <input type="email" disabled={this.state.submission !== 0} required placeholder="yourmail@mail.com" onChange={
                    (e) => this.setState({email: e.target.value, submission: this.state.submission})
                } />
                <input type="submit" disabled={this.state.submission !== 0} value="Sign up" />
            </form>;
        } else {
            return <h4>{this.props.t('homepage.signup.success')}</h4>;
        }
    }
}

export const Home: React.FunctionComponent = () => {
    let { t, i18n } = useTranslation();
    return (
        <div>
            <ScrollToTopOnMount />
            <Helmet>
                <title>Riot | {t('homepage.name')}</title>
            </Helmet>
            <main>
                <header>
                    <Navigation fixed={true} />
                    <div className={css.header}>
                        <div className={css['header-info']}>
                            <div className={css.text}>
                                <h1 className={css.headerTitle} style={{fontSize: "55px"}}>
                                    <Trans i18nKey="homepage.title">
                                        Let's riot <span className={css.gradient}>together</span>.
                                    </Trans>
                                </h1>
                                <p>{t('homepage.subtitle')}</p>
                            </div>
                            <div className={css.buttons}>
                                {/* <a id="download" href="riot.html" class="button" style="background-color: mediumslateblue"><i class='bx bxl-windows'></i> Download</a> */}

                                <a href="#sign-up" className={css['btn-purple']} onClick={smoothScroll}>{t('button.testSignup')}</a>
                                <a href="#lightweight" className={css.button} onClick={smoothScroll}>{t('button.learnmore')}</a>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="lightweight" style={{backgroundImage: "url('/assets/images/lightweight.jpg')"}}>
                    <ContentOpacityLayer>
                        <div className={css.hook}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEIklEQVRoQ+2ZTXLTSBTHf202lL0gN8A5wYQTEJYzShXpXIDkBDgnIDkB4QSEC0ROTQzLhBNM5gSYE0xYhGJDmnptybSkltUtaXCliq7ywnZ//P/vq997rbjnQ91z/PwmsG4N9qaB9ANj7niOYdeSUozBfmTMMcyz36cMONd/Zt87SqATgfSSDb7yEth3wIZCElJTRhzrZ9yELirPa0VgCdwwQbHR9nC7znCD4oQhb9oQiSaQvmeXO952Bl5mvSByqBNOYwQSRSCd8Qo4CjlAJ8UIl84wIetkf51wHDg3LIxmJvM6s/WgvTsQkP2nDDkIMakgDaQz3saAFwQdCVgSOkE3SauRQHphHVWkvxwGPgPXCp7XHdADAdn6WCerTXYlAeuwhrQA3vCvGrEt6k0vOEXxoklKQf8bDg3sK8UfhfkKrf9iWrdHLQFr97d8cqONSF4N2XJtsysJA18UbOuEaznT3HJVICHRacRmnT/UE5hZ1UnUcUfFLtOZvcTER6KHEW0q9gV8vjidsWXgSsEjZ8NaU/IS8Enf2exUJxzI987gM1N0mQsBDJeFe2aFFvwE/NJ3z5HL5mNbyWN4p3es5goj/ZttFGnNJenVQh2Bf4CtaJsIW+AFEqDNuU7YLB9RIZBllZ/CsETPOvClCsE3/IDNchZbJeCJ+9EwSwvcSFMxm5hL0nCodzhx96gQOJsxXXVBhZDJAE8YcMVDbvjGRllyWXpyGWOqBs73kqzeyID4CEgIexoC1DfHgh8yXpXH2EizCL1Rfmbg417CdpMGigRKdheQVXrt3I3zlTDpIGpIQa51wpOVBMoAo3Maj6OV4vzKtLrpvPL/VScu5e1NG1bMaAWBkAjXdF4jgbOZvcZ/+kCPJuRLDssCcAFmjv5fPkdSj72dot/07sS2xvUkXw3pSVDMCHXizmFUSBiYqAc23cB856mCk651dFAY9RUwQeL5FZNCLrIQR/sVWL1nhKQSsvDsgutKZbQ21IuDpZjaS5adviWatun0OuhEpNNS2n1lXqqK1gE6l35tehJbUq6LRFxJKShtgV3VwpwhT0IaTm2Y+jLUpuQwuq0i/SAG6L7a48skb9HprqbXbdsqy419Bc6iEfvM7Sa0kXhAhtqtseWQqGtgHbVti+dmmr0vVBvGNYV/WVCNrcXlQbc2Fah24fK0YcR5jG+cXfBCKdt7yl9xfmIzvGPEJGS/IAKOqn3NLlcoUyOvLgPmSvE59xO53Y3hMXeMlbIl4eIZyj8azcZdFkXAauM9u8Zw2vcdkdfR/+sDRyliTGzGWWwBRvtyBlyemE5CTKaVD9ShyuK2ENlX8DgGvW0ULx4yjtoAz8+KNqFaMvLM+p1ds7BxGeOcVPaeYJ9ZlfjIA6Z93SO9EYiRfp9zfxPoU5pt9rr3GvgB/mCzQN0RW1YAAAAASUVORK5CYII=" />
                            <h2>{t('homepage.lightweight.title')}</h2>
                            <p>{t('homepage.lightweight.text')}</p>
                        </div>
                        <div className={css['content-image']}>
                            <img className={css.image} src="/assets/images/security.png" />
                        </div>
                    </ContentOpacityLayer>
                </section>
                <section id="friends" style={{backgroundImage: "url('/assets/images/friends.png')"}}>
                    <ContentOpacityLayer>
                        <div className={css.hook}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVRoQ+1XzVXCQBCeATx4ILaAFagdUIJWoFYAnmWRl80dqECsQO3ADsQKoAXiwYPA+ILCQ0jYmfwQ89xcM3/f983s7CIU/MOC1w8WQN4KWgWsAgkZsC2UkMDE7v9PgU7no1aaTRtI8zogni4oJBoSll7m5Uq/0zkcJ6ZVEECkgKv8KwS43xWfAK7b2hkIakhkygbAKX5ZyT5BsAAEbVOefY4kVM3KB8f7aCcWAN167wFSQwIACPvKqzY3fbTySRRnw1hp51fNTACT19XAcrMTDZV3dPY3AMRkbZOtAEw+ChQdgKv8IQKccLtnsRoA3tra+d4TGX7MGUhviNPGwgJQ+GM0YK3Qi2wpOwcEdwvHPY1i7YH1vl2003TaJKT6crCDgUXCl1ml0uNu39wApDWEFsAPk6xTKLD1bv3LeQnqSHQaea1YvAtwSAhPd67znJZau+IYAeiWf05IXQSsSQoioDES3ijPeZL4SW13AnDVexeBtm6UkiQE2Gvr6o3ER2IbCSDWFToqc8TVWlJolG0ogKBtAOExjQSrGAQXYe0kPY1Ye8BVk5G0501gg5lo66PjpO8DIwDOtjUVG/k/RIXUFdAtfwAIl7GL3OVI8KA852rdJAMAMZ6PXLQRz0yue5jd1hBLGZEmD3tmSmOs21sAUvYyV0BaUN72xrtQ3gWa8lsAJoay/m8VyJphU3yrgImhrP9bBbJm2BT/C3BQ6zFjsmUdAAAAAElFTkSuQmCC" />
                            <h2>{t('homepage.friends.title')}</h2>
                            <p>{t('homepage.friends.text')}</p>
                        </div>
                    </ContentOpacityLayer>
                </section>
                <section id="communities" style={{backgroundImage: "url('/assets/images/communities.jpg')"}}>
                    <ContentOpacityLayer>
                        <div className={css['content-image']}>
                            <img className={css.image} src="/assets/images/invites.png" />
                        </div>
                        <div className={css.hook}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADE0lEQVRoQ+1YXW7aQBD+xoWHSpi2J2hygpITND0A4EjBr6E3ICdoeoLSE4S8mkgxzgFKThBygtATtMFIfYDuVCZ1RMyu1z+hENW8oZmdnW/m2/HMEJ75j565/ygAbDqDRQaKDOSMQEGhnAHMffz/ycD0vHEkBO0TUAOhljt0MgOMEQMjw+Bh5dA7S3KHNgOT87oFYXwhwk4Sg0+lw4wxDHFcPbx042zGApg4zVMitJ/KqWx2uGu2vGPVWSWA7XD+r9vMX03b68hASAEEtCE2LrJFLOUp5iuCsXCOIbogei+3QB/MljuMyuQAnObtv+J8qUS7Lw/cceDYrwtrZz7nW+n7Zoyr9mBXC2Dq1NtMxqnCyJ0B0QFejO7lv2sCRpcIr1LG/UG9UqI3dOD+XGTgwno9nfMPlS0mcRB91CsZ8PsNF6Bm1Agz7swy7YSXhfLgUn/G46wgmNEzy7R4pP6Mg2qnLBoMPqu2vEfyVQBO81pW54nFx4p92ZNFJy5rK/o6zsfJGSPTHuwt25RkoMkyJ5e5GpXHcTeqq+O8Tm62Bo98Tgxgmasr9NJwd1lfx3mdPDMA2QMKHUtTdnWc18mzA2CMzTLtKR7xdeayq3sTkXRnBrAoc0F/QqJTbV0Ogv+Tfr0JXpTRzH2SjvNRuuYCkLXWx53TcX7rAeg4v/UA0mZ16yhUAIhGwO/Lv8RpI7Uu/bVTKGj6CNwjGL2K7S661qlj1RiizaB21qYvDMh6ATDflMqGFfb30p5pJlwQvcuaobUBYOC7WaJa9Est65v8OY8IeJsFxNoAAPKRT+ak37f2Af62HgBOY5Q6xcxXpu3tp3HIdxpD9fyrsMR8Y9reo52UbCI7AehTGmfSRD+0my0L/NlseSexA03aEVE25iUFP+k3egQ6SqKvGmmlW4mkI2LSh6tyME2wVPOIcrEVgIjbOATOG0xWWOuTRFGmE3wjBHio+j4EkQ82Iap5PHa1eL/mEB0wrIeHzXwDglspGV1dyUwKKs892uVuUic2pVcA2FTkw3uLDBQZyBmBgkI5A5j7+B9WbdFAEeO7LQAAAABJRU5ErkJggg==" />
                            <h2>{t('homepage.communities.title')}</h2>
                            <p>{t('homepage.communities.text')}</p>
                            <span className={css.disclaimer}>{t('homepage.communities.note')}</span>
                        </div>
                    </ContentOpacityLayer>
                </section>
                <section id="open-source" style={{backgroundImage: "url('/assets/images/open-source-section.png')"}}>
                    <ContentOpacityLayer>
                        <div className={css.hook}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADeUlEQVRoQ+1YPW/UQBCduYC4hIIUSJFoiH0FlIlAKN4rQFShu/wCLh1UJBI94RckVNDl6JGSDmhQKG4dIVBSQnHnS4OElCJIJByCeJB98sU+2+tdfySyFLf2zr4382berhFK/mDJ8cM5gbOu4HkFZCpAQJWuYTYrhB+0baMns0b2m1OpgMU+zRAe77igiPYA8I3OjaeyIEXfnQ6BuvmIAF4OgRC91zmbLw2Bbt1sAcBDDzARPK9xY6VEBPhXALzhAUabHmgme1cKAt9vfb7av/T3ByBUBj0AdvXPxalrX27vl4KAZfB5quDbE7D0TW+zm3mAd2IU3sQdZq4gwjMf4Nd622iWhkCXmVuAcHeof4DHWtt4deYELIM3NJNtioA4Bmax7V+AMD4kQGOzGr+z618nEytun1QS6tT5KgIuEUGrxo3FuOABA3P7F/b19twUAtremg4z1xGhSUBrtTZbVq2MEgFrZmeSLvc3AODeSUZhUeOGM+dDj5VgYBYzm4Sw7lu4hYfVBW139kCWiDQBN5twvAEI0/7gRPCzclSdjtpUZGBOMuyJfg8RrgTAEvQQxhZGZZZJQoNM0SoATgY3oz2EC424zbp1sYENkvJvExCvBwHSARIux1XW/21iBTy9hzJA8BGPqo24cssamCvLif6mf1J5e8n0RSyBKL0PAxO9qHG2JNKpqoF1GF9DxCcRMYV9EUlAqHeAJZnSpjEwR6o2wJpKX4QIODOZKs5kUNP7aObSGpiwL2xYHPWeEIEuM63RSQMJeh8FL2tgsf4R1xcEPZ0bmrCJu4z3wlMBlOazjIEJ+yfCb9zvifZ0zgJjPFJCNmJLRYejYJIMTAhe5DdEzUQJOcGzzue0N7A0fiMeoynnc5KBRVUgrd8kG5nifJY1MI9EVr9JJDCQlPx8VjGwPPxGikBiXxyOa96RQtbABpn/bWX1G2kCLomI+YwUPE6rGFjoOK3oNw4mJQKebn3nlsD9No2BeROLJM5XUc2fioBbjYgrZVoDO/UrZewRoMBfiJkuNCLn9L9La2Cy8XOVUFSwNAaWBXzqJo7aVNXAsgL31qdu4tABruBfiIX3gKyB5ZX53CugYmB5kshNQq65ATS8yxBG/ELME3juFRieLufMaRvpvm4aLf8vxCLA5zqFigKYFDc3CSVtVNT7cwJFZVY2bukr8B8VZGFPS7rxigAAAABJRU5ErkJggg=="/>
                            <h2>{t('homepage.opensource.title')}</h2>
                            <p>{t('homepage.opensource.text')}</p>
                            <br />
                            <a href="/developers" className={css['btn-purple']}>{t('button.devportal')}</a>
                            <a href="https://github.com/riotchat" className={css.button} target="_blank">{t('button.github')}</a>
                        </div>
                        <div className={css['content-image']}>
                            <img className={css.image} src="/assets/images/open-source.png" />
                        </div>
                    </ContentOpacityLayer>
                </section>
                <section id="cross-chat" style={{background: 'linear-gradient(#667eea, #764ba2)'}}>
                    <ContentOpacityLayer>
                        <div className={css['content-image']}>
                            <img className={css.image} src="/assets/images/open-source.png" />
                        </div>
                        <div className={css.hook}>
                            <span className={css['coming-soon']}>{t('string.comingsoon')}</span>
                            <h2>{t('homepage.crosschat.title')}</h2>
                            <p>{t('homepage.crosschat.text')}</p>
                        </div>
                    </ContentOpacityLayer>
                </section>
                <section id="pro" style={{background: 'linear-gradient(#9987F5, #EA86F3)'}}>
                    <Content>
                        <div className={css.hook}>
                            <h2 className={css['pro-title']}>Riot<span className={css.pro}>PRO</span></h2>
                            <h3>{t('homepage.pro.title')}</h3>
                            <p>{t('homepage.pro.text')}</p>
                            <Link to="/pro" className={css.more}>{t('button.learnmore')}</Link>
                        </div>
                        <PriceTable />
                    </Content>
                </section>
                <section id="sign-up" style={{backgroundImage: "url('/assets/images/signup.png')"}}>
                    <ContentOpacityLayer>
                        <div className={css.hook}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB1ElEQVRoQ+1ZUU7CQBB9Q/nXG4g3wBvACfQIcgOJ1cSUDz8gfkCCR8Ab6EmsN4AbwLfAGCoSC7QD29namu0XCczMe/PebJddQskfKjl+OAJ/raBT4F8pwE/DGpaLIYA6gJoSuTGAEBWvTQ/t1efYo2ahCPxi8Q7CqRLweBrGFJ53sU1Cj0C3/wqiSyvgf5Iyv1Hn7up3DT0Cvf4UoBOrBIAxBf65JQIDjiUOfJXmcC89r0qRFXCpkKkyUl5HYDNfgtROgXUHaGu2nIUOtRB3ByPq+NfHWqkwQ/wNhEN8Vpv02J4eSiQ3AhKgDZDVloCWTQruQynmkOVZbQYkMNudBKhFwe3o2DhrQ3wskPXvRxT4rbTY4lloB236XGQmsCu91GuD71PmohwENpx358IRyMVC4BnAjX1La2YFDBy9NySxEYwPzL1G0sut2AQYL9L2osAESvsiS/b7Pu/lpoBUKPpe8HuxCZR9O226mknKqu1GpUKOgPtPLHjAWSihQVJjFIc4h8NdxoQ6fuzeQY9A6Y/Xo9uZeWjviJ1nqFTr1i44oiOQ6JZm/gxQHYQz07U/FseYROdJXvXG6hWTCliDJGozYFBbJcQRUGljhiROgQzNUwn9AjSlVkCDe2zVAAAAAElFTkSuQmCC" />
                            <h2>{t('homepage.signup.title')}</h2>
                            <p>{t('homepage.signup.text')}</p>
                            <TestingSignUpForm t={t} url="https://docs.google.com/forms/d/e/1FAIpQLSejUcWSxFS8vDsQbKjp1-BPOgmOSGkznimy6CysmrHa6oY_Uw/formResponse" emailName="emailAddress" />
                        </div>
                    </ContentOpacityLayer>
                </section>
            </main>
            <Footer />
        </div>
    );
};
