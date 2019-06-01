import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Content, ContentOpacityLayer } from '../components/Content';
import { Navigation, Footer } from '../components/HeaderFooter';
import { PriceTable } from '../components/PriceTable';

const css = require('./Home.css');
const { logo } = require('../components/HeaderFooter.css');

class TestingSignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <input type="email" placeholder="yourmail@mail.com" onChange={(e) => this.setState({email: e.target.value})} />
            <input type="submit" value="Sign up" />
        </form>;
    }
}

export const Home: React.FunctionComponent = () => (
    <div>
        <Helmet>
            <title>Riot | It's time to speak up.</title>
        </Helmet>
        <main>
            <header>
                <Navigation fixed={true}></Navigation>
                <div className={css.header}>
                    <div className={css['header-info']}>
                        <div className={css.text}>
                            <h1>Let your voice be heard.</h1>
                            <p>Let's riot together.</p>
                        </div>
                        <div className={css.buttons}>
                            {/* <a id="download" href="riot.html" class="button" style="background-color: mediumslateblue"><i class='bx bxl-windows'></i> Download</a> */}

                            <a href="#sign-up" className={css['btn-purple']}>Sign up to test</a>
                            <a href="#lightweight" className={css.button}>Learn More</a>
                        </div>
                    </div>
                </div>
            </header>
            <section id="lightweight" style={{backgroundImage: "url('/assets/images/lightweight.jpg')"}}>
                <ContentOpacityLayer image="/assets/images/security.png" imageAlign="RIGHT">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEIklEQVRoQ+2ZTXLTSBTHf202lL0gN8A5wYQTEJYzShXpXIDkBDgnIDkB4QSEC0ROTQzLhBNM5gSYE0xYhGJDmnptybSkltUtaXCliq7ywnZ//P/vq997rbjnQ91z/PwmsG4N9qaB9ANj7niOYdeSUozBfmTMMcyz36cMONd/Zt87SqATgfSSDb7yEth3wIZCElJTRhzrZ9yELirPa0VgCdwwQbHR9nC7znCD4oQhb9oQiSaQvmeXO952Bl5mvSByqBNOYwQSRSCd8Qo4CjlAJ8UIl84wIetkf51wHDg3LIxmJvM6s/WgvTsQkP2nDDkIMakgDaQz3saAFwQdCVgSOkE3SauRQHphHVWkvxwGPgPXCp7XHdADAdn6WCerTXYlAeuwhrQA3vCvGrEt6k0vOEXxoklKQf8bDg3sK8UfhfkKrf9iWrdHLQFr97d8cqONSF4N2XJtsysJA18UbOuEaznT3HJVICHRacRmnT/UE5hZ1UnUcUfFLtOZvcTER6KHEW0q9gV8vjidsWXgSsEjZ8NaU/IS8Enf2exUJxzI987gM1N0mQsBDJeFe2aFFvwE/NJ3z5HL5mNbyWN4p3es5goj/ZttFGnNJenVQh2Bf4CtaJsIW+AFEqDNuU7YLB9RIZBllZ/CsETPOvClCsE3/IDNchZbJeCJ+9EwSwvcSFMxm5hL0nCodzhx96gQOJsxXXVBhZDJAE8YcMVDbvjGRllyWXpyGWOqBs73kqzeyID4CEgIexoC1DfHgh8yXpXH2EizCL1Rfmbg417CdpMGigRKdheQVXrt3I3zlTDpIGpIQa51wpOVBMoAo3Maj6OV4vzKtLrpvPL/VScu5e1NG1bMaAWBkAjXdF4jgbOZvcZ/+kCPJuRLDssCcAFmjv5fPkdSj72dot/07sS2xvUkXw3pSVDMCHXizmFUSBiYqAc23cB856mCk651dFAY9RUwQeL5FZNCLrIQR/sVWL1nhKQSsvDsgutKZbQ21IuDpZjaS5adviWatun0OuhEpNNS2n1lXqqK1gE6l35tehJbUq6LRFxJKShtgV3VwpwhT0IaTm2Y+jLUpuQwuq0i/SAG6L7a48skb9HprqbXbdsqy419Bc6iEfvM7Sa0kXhAhtqtseWQqGtgHbVti+dmmr0vVBvGNYV/WVCNrcXlQbc2Fah24fK0YcR5jG+cXfBCKdt7yl9xfmIzvGPEJGS/IAKOqn3NLlcoUyOvLgPmSvE59xO53Y3hMXeMlbIl4eIZyj8azcZdFkXAauM9u8Zw2vcdkdfR/+sDRyliTGzGWWwBRvtyBlyemE5CTKaVD9ShyuK2ENlX8DgGvW0ULx4yjtoAz8+KNqFaMvLM+p1ds7BxGeOcVPaeYJ9ZlfjIA6Z93SO9EYiRfp9zfxPoU5pt9rr3GvgB/mCzQN0RW1YAAAAASUVORK5CYII=" />
                    <h1>Fast and light</h1>
                    <p>Riot is built with old hardware support in mind. Whether you game on an ultra-high
                        powered computer that can shoot lasers, or on an old Tefal toaster, Riot runs the same way
                        on any computer.</p>
                </ContentOpacityLayer>
            </section>
            <section id="friends" style={{backgroundImage: "url('/assets/images/friends.png')"}}>
                <ContentOpacityLayer>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVRoQ+1XzVXCQBCeATx4ILaAFagdUIJWoFYAnmWRl80dqECsQO3ADsQKoAXiwYPA+ILCQ0jYmfwQ89xcM3/f983s7CIU/MOC1w8WQN4KWgWsAgkZsC2UkMDE7v9PgU7no1aaTRtI8zogni4oJBoSll7m5Uq/0zkcJ6ZVEECkgKv8KwS43xWfAK7b2hkIakhkygbAKX5ZyT5BsAAEbVOefY4kVM3KB8f7aCcWAN167wFSQwIACPvKqzY3fbTySRRnw1hp51fNTACT19XAcrMTDZV3dPY3AMRkbZOtAEw+ChQdgKv8IQKccLtnsRoA3tra+d4TGX7MGUhviNPGwgJQ+GM0YK3Qi2wpOwcEdwvHPY1i7YH1vl2003TaJKT6crCDgUXCl1ml0uNu39wApDWEFsAPk6xTKLD1bv3LeQnqSHQaea1YvAtwSAhPd67znJZau+IYAeiWf05IXQSsSQoioDES3ijPeZL4SW13AnDVexeBtm6UkiQE2Gvr6o3ER2IbCSDWFToqc8TVWlJolG0ogKBtAOExjQSrGAQXYe0kPY1Ye8BVk5G0501gg5lo66PjpO8DIwDOtjUVG/k/RIXUFdAtfwAIl7GL3OVI8KA852rdJAMAMZ6PXLQRz0yue5jd1hBLGZEmD3tmSmOs21sAUvYyV0BaUN72xrtQ3gWa8lsAJoay/m8VyJphU3yrgImhrP9bBbJm2BT/C3BQ6zFjsmUdAAAAAElFTkSuQmCC" />
                    <h1>Find your friends easily.</h1>
                    <p>You probably know your friends name in real life, maybe even their nickname. On Riot, you
                        just need to type in your friends name, and you're good to go, so you don't have to deal
                        with some random number tags.</p>
                </ContentOpacityLayer>
            </section>
            <section id="communities" style={{backgroundImage: "url('/assets/images/communities.jpg')"}}>
                <ContentOpacityLayer image="/assets/images/invites.png">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADE0lEQVRoQ+1YXW7aQBD+xoWHSpi2J2hygpITND0A4EjBr6E3ICdoeoLSE4S8mkgxzgFKThBygtATtMFIfYDuVCZ1RMyu1z+hENW8oZmdnW/m2/HMEJ75j565/ygAbDqDRQaKDOSMQEGhnAHMffz/ycD0vHEkBO0TUAOhljt0MgOMEQMjw+Bh5dA7S3KHNgOT87oFYXwhwk4Sg0+lw4wxDHFcPbx042zGApg4zVMitJ/KqWx2uGu2vGPVWSWA7XD+r9vMX03b68hASAEEtCE2LrJFLOUp5iuCsXCOIbogei+3QB/MljuMyuQAnObtv+J8qUS7Lw/cceDYrwtrZz7nW+n7Zoyr9mBXC2Dq1NtMxqnCyJ0B0QFejO7lv2sCRpcIr1LG/UG9UqI3dOD+XGTgwno9nfMPlS0mcRB91CsZ8PsNF6Bm1Agz7swy7YSXhfLgUn/G46wgmNEzy7R4pP6Mg2qnLBoMPqu2vEfyVQBO81pW54nFx4p92ZNFJy5rK/o6zsfJGSPTHuwt25RkoMkyJ5e5GpXHcTeqq+O8Tm62Bo98Tgxgmasr9NJwd1lfx3mdPDMA2QMKHUtTdnWc18mzA2CMzTLtKR7xdeayq3sTkXRnBrAoc0F/QqJTbV0Ogv+Tfr0JXpTRzH2SjvNRuuYCkLXWx53TcX7rAeg4v/UA0mZ16yhUAIhGwO/Lv8RpI7Uu/bVTKGj6CNwjGL2K7S661qlj1RiizaB21qYvDMh6ATDflMqGFfb30p5pJlwQvcuaobUBYOC7WaJa9Est65v8OY8IeJsFxNoAAPKRT+ak37f2Af62HgBOY5Q6xcxXpu3tp3HIdxpD9fyrsMR8Y9reo52UbCI7AehTGmfSRD+0my0L/NlseSexA03aEVE25iUFP+k3egQ6SqKvGmmlW4mkI2LSh6tyME2wVPOIcrEVgIjbOATOG0xWWOuTRFGmE3wjBHio+j4EkQ82Iap5PHa1eL/mEB0wrIeHzXwDglspGV1dyUwKKs892uVuUic2pVcA2FTkw3uLDBQZyBmBgkI5A5j7+B9WbdFAEeO7LQAAAABJRU5ErkJggg==" />
                    <h1>The whole gang is here.</h1>
                    <p>With Riot Communities, you can join a server based on your favorite game. Communities
                        have their own events and even giveaways. It's a match made in heaven. So be there or be
                        square.</p>
                    <span className={css.disclaimer}>Overwatch and the Overwatch logo are trademarks of Blizzard Entertainment.</span>
                </ContentOpacityLayer>
            </section>
            <section id="open-source">
                <ContentOpacityLayer>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADaUlEQVRoQ+1YPW/TUBQ91xVDhW2KhFQRXNFOMMIvADGVoU76C0g3mGgldsovaJhga9iRmrgDsKDyC2CEqalqBSFVosRGDAhflBCnjuOP9xy7xVKz5r377rkf59xrQsl/VHL/cQ7grDN4ngGhDDArptOtKxeU963Zqx2hO4KHTiUDNde+xYyPA58YBwy8tnTjiaCPicdOBYDp2A8JeHHiCb9rawvL5QHQs5tEeOA7zOBnlrawWSYAn4lwYwSAlPuWWnlbCgArve4VhbxvAJShw57HyvyuXjkqBQDT7S4Te29G0Wd8sXTjZh7O920U3sSmc7hJoKcBAK8s3aiXCcAege6cNDAeWZrx8swBrPS6tV290kp0hFmpurYL0Kx/jgi3W6rxKXhPyFbMQ5lKyHTsLQLWwWi2dWMtDsSYgA00DEeWem0eRJ5/p9qzt0GoM9CwNGNDNjNSAGr8fY7dnzsA7voPeYS1XdVoRj2cJmArrl1XGNuBu3ukXlxt0eVjUSDCAAbR9LADwuKYceYfpKmLUY+aCQI2CIbjdkB0adweOqRgNVxmcYCEAAwi5fEWiOZCjx2QglrcY2bPThSwYVBaIFwPBeXYU2gjLrPBs6kARvUeCgGDPyiqWotLt6iA9TPhuW4ryFQBxkrti1gAUfUeMPzc0oz1pDqVFTDTsRsEPI6wmdgXkQCS6t1TaF0ktVkEbFiqDZm+mADQ52QFf7Zl6z0cOdM5zCRgiX2BmbWw9kwAqPbs/TDTpNX7RNoFBSxWP+L6gtFp68ZSYhNXe3ZnghUAKX4WEbCk/ontP8ZBWzfGaDyuhJoydThZPtk3sMT+w0w9tYT6zkzLz0kClhT5LHqTSKNZ+TlNwGLGjn/zlaTeiAiZFD+LCpjv57R6kwqg/5AMP8sIWB56IwQgrS9IU5f8kUJUwIbD3P60eiMMYAAigp/D47SMgIXHaWm9yboT+3MLM8b32wwC5jMWA6nzVVTzS2UgaCBqDcwqYKe+UsZxedoGJrplyZzLnIFILi/wE+JUG5loRLIImKjtwgHICti0jvv3cyshGQHLy/m+nfwAFPwJsfASkhGw/zQDdoMYNX8ZivqEmKfjuffAaLr89XXR++3ds7RKfykafUIswvlce6AoB9Ps5tbEaQ8V9f85gKIiK2q39Bn4C29gYE/zgMRDAAAAAElFTkSuQmCC" />
                    <h1>Open-source</h1>
                    <p>There's more to it than just code. By having Riot open source to the public, means that
                        we can create a transparent layer between us and the user. Contribute, create your own
                        bot or make your own version of the Riot client.</p>
                    <br />
                    <a href="/developers" className={css['btn-purple']}>Log into the Developer Portal</a>
                    <a href="https://github.com/riotchat" className={css.button} target="_blank">View on Github</a>
                </ContentOpacityLayer>
            </section>
            <section id="pro" style={{background: 'linear-gradient(#9987F5, #EA86F3)'}}>
                <Content image={<PriceTable />} imageAlign="RIGHT">
                    <h1 className={logo}>Riot<span className={css.pro}>PRO</span></h1>
                    <h2>Take your riot to the next level.</h2>
                    <p>Want your server to stand out? With Riot PRO, get the latest, cutting edge technology, right
                        for your community.</p>
                    <Link to="/pro" className={css.more}>Learn More</Link>
                </Content>
            </section>
            <section id="sign-up" style={{backgroundImage: "url('/assets/images/signup.png')"}}>
                <ContentOpacityLayer>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB1ElEQVRoQ+1ZUU7CQBB9Q/nXG4g3wBvACfQIcgOJ1cSUDz8gfkCCR8Ab6EmsN4AbwLfAGCoSC7QD29namu0XCczMe/PebJddQskfKjl+OAJ/raBT4F8pwE/DGpaLIYA6gJoSuTGAEBWvTQ/t1efYo2ahCPxi8Q7CqRLweBrGFJ53sU1Cj0C3/wqiSyvgf5Iyv1Hn7up3DT0Cvf4UoBOrBIAxBf65JQIDjiUOfJXmcC89r0qRFXCpkKkyUl5HYDNfgtROgXUHaGu2nIUOtRB3ByPq+NfHWqkwQ/wNhEN8Vpv02J4eSiQ3AhKgDZDVloCWTQruQynmkOVZbQYkMNudBKhFwe3o2DhrQ3wskPXvRxT4rbTY4lloB236XGQmsCu91GuD71PmohwENpx358IRyMVC4BnAjX1La2YFDBy9NySxEYwPzL1G0sut2AQYL9L2osAESvsiS/b7Pu/lpoBUKPpe8HuxCZR9O226mknKqu1GpUKOgPtPLHjAWSihQVJjFIc4h8NdxoQ6fuzeQY9A6Y/Xo9uZeWjviJ1nqFTr1i44oiOQ6JZm/gxQHYQz07U/FseYROdJXvXG6hWTCliDJGozYFBbJcQRUGljhiROgQzNUwn9AjSlVkCDe2zVAAAAAElFTkSuQmCC" />
                    <h1>Sign-up for testing</h1>
                    <p>Want to help us out with testing Riot? Sign-up to get into our testing team.</p>
                    <TestingSignUpForm />
                </ContentOpacityLayer>
            </section>
        </main>
        <Footer />
    </div>
);
