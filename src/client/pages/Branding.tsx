import * as React from 'react'

import { ContentOpacityLayer } from '../components/Content';
import { Navigation } from '../components/HeaderFooter';

const css = require('../sass/main.scss');
const brandingCss = require('./Branding.scss');

function componentToHex(c: number): string {
    let hex = c.toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
}

// http://www.javascripter.net/faq/rgb2cmyk.htm
function toCmyk(r: number, g: number, b: number): { c: number, m: number, y: number, k: number } {
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;

    // BLACK
    if (r == 0 && g == 0 && b == 0)
        return {c: 0, m: 0, y: 0, k: 100};

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    var minCMY = Math.min(computedC, Math.min(computedM, computedY));
    computedC = (computedC - minCMY) / (1 - minCMY);
    computedM = (computedM - minCMY) / (1 - minCMY);
    computedY = (computedY - minCMY) / (1 - minCMY);
    computedK = minCMY;

    return { c: Math.round(computedC * 100), m: Math.round(computedM * 100),
        y: Math.round(computedY * 100), k: Math.round(computedK * 100) };
}

// https://awik.io/determine-color-bright-dark-using-javascript/
function isLight(r: number, g: number, b: number): boolean {
    let hsp;

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    console.log(`${r} ${g} ${b}: ${hsp}`)

    // Using the HSP value, determine whether the color is light or dark
    return hsp > 140;
}

const Font: React.FunctionComponent<{ fontFamily: string, fontWeight?: number, description?: string }> = (props) => (
    <div>
        <h1 style={{fontFamily: `"${props.fontFamily}", sans-serif`, fontWeight: props.fontWeight}}>
            The quick brown fox jumps over the lazy dog.
        </h1>
        <p>{props.description ? `${props.fontFamily} | ${props.description}` : props.fontFamily}</p>
    </div>
)

const ColorBox: React.FunctionComponent<{name: string, red: number, green: number, blue: number, isLight?: boolean}> = (props) => {
    let hex = "#" + componentToHex(props.red) + componentToHex(props.green) + componentToHex(props.blue);
    let cmyk = toCmyk(props.red, props.green, props.blue);
    let light = props.isLight !== undefined ? props.isLight : isLight(props.red, props.green, props.blue)

    return <div className={brandingCss.colorBox}>
        <div className={`${brandingCss.colorBoxInner} ${light ? brandingCss.light : brandingCss.dark}`}
            style={{backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`}}
        >
            <div className={brandingCss.colorCodesMobile}>
                <div><span className={brandingCss.colorCode}>HEX</span>{hex}</div>
                <div><span className={brandingCss.colorCode}>RGB</span>{props.red}, {props.green}, {props.blue}</div>
                <div><span className={brandingCss.colorCode}>CMYK</span>{cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%</div>
            </div>
            <div className={brandingCss.colorCodeOverlay}>
                <div className={brandingCss.colorCodes}>
                    <div><span className={brandingCss.colorCode}>HEX</span>{hex}</div>
                    <div><span className={brandingCss.colorCode}>RGB</span>{props.red}, {props.green}, {props.blue}</div>
                    <div><span className={brandingCss.colorCode}>CMYK</span>{cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%</div>
                </div>
            </div>
            <span className={brandingCss.colorLabel}>{props.name}</span>
        </div>
    </div>;
}

export const Branding: React.FunctionComponent = () => (
    <main>
        <header>
            <Navigation fixed={true} />
        </header>
        <section id="logo" style={{backgroundImage: 'url(login/developer.jpg)'}}>
            <ContentOpacityLayer>
                <div className={css.hook}>
                    <h2>Our logo</h2>
                    <p>Use our logo in any of your promotional material, just don't stretch it.</p>
                    <p>Want to color our logo? We've got a couple of good recommendations:</p>
                    <p>(We recommend using bright colors with light backgrounds, and toned-down colors with darker backgrounds)</p>
                </div>
            </ContentOpacityLayer>
        </section>
        <section className={css.test} id="font" style={{backgroundColor: "#FF7EC7", backgroundImage: "url('/assets/images/pattern/pattern.png')", backgroundSize: "contain"}}>
            <ContentOpacityLayer>
                <div className={css.hook}>
                    <h2>Fonts</h2>
                    <p>What truly makes us unique.</p>
                    <p></p>
                </div>
                <div className={css.hook} style={{ marginLeft: '200px' }}>
                    <Font fontFamily="VX Rocket" fontWeight={400} />
                    <Font fontFamily="Poppins" description="only used in promotional material" />
                    <Font fontFamily="Open Sans" />
                </div>
            </ContentOpacityLayer>
        </section>
        <section id="colors">
            <div className={css.content}>
                <h1>Brand Colors</h1>
                <p>Here are some of the colors we use the most.</p>
                <div className={brandingCss.colorWrapper}>
                    <ColorBox name="Rioting" red={123} green={104} blue={238} />
                    <ColorBox name="Melting Popsicle" red={255} green={187} blue={0} isLight={false} />
                    <ColorBox name="Almost White" red={239} green={239} blue={239} />
                    <ColorBox name="Actually White" red={255} green={255} blue={255} />
                    <ColorBox name="Not Black" red={51} green={50} blue={52} />
                </div>
            </div>
        </section>
        <section id="icons">
            <div className={css.content}>
                <h1>Iconography</h1>
                <p>We use Atisa's gorgeous Boxicons</p>
                <a className={css.btnPurple} href="https://github.com/atisawd/boxicons" target="_blank">View on GitHub</a>
            </div>
        </section>
        <section id="download">
            <div className={css.content}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABcElEQVRoQ+2ZQW7CQAxF7UpVlzRwkPYI3KRhgZQzwIYNnCFSFw034QjtQSCwREi4ygKaRdOxx55UILNCwuP5/7+JRwoIN/7BG9cPbuC/CTqBuyEwL3YkMbMshyb0TZo0wt2ABF+r1glcwvAj5EcoMgE/QsrgfAr5EerrCM2LbQWAb8r9mMtpvSxHOadY9Az0Y4IvvjEoMrDI6+fTE20A4YWTjriG4OvxiONFle25a0UGmqbJTESIFxO4pDKb1q/wQBtEGHCT+quOCA5wxvHqPfuU9hMTsDahER9N4GqiqHME+pCm1q4nwMmqzKrYHtEELExoxasJ/NzCMXeEbFx2EVITiDNhI96MgGi8Ro7L5ARYJozFmxIIjVftuOyFQJeJVOKTEPhtvFqMy14JtE003zUXVeiCMxujoY1S/e4GUiXL7Xv/BKTvPLnJcetC/yMECbgBbtQddU5AGWDy5cFnILkC5QZuQBmgerkTUEeobPANQYjBMbmRM/QAAAAASUVORK5CYII="/>
                <h1>Download our press kit</h1>
                <p>Includes full size logos, promotional images and more.</p>
                <div className={css.contentImage}>
                    <a className={css.btnPurple} href="/assets/downloads/branding/branding.zip" download="RiotBranding.zip">Download Kit</a>
                </div>
            </div>
        </section>
    </main>
)