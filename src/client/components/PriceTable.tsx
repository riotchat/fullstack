import * as React from 'react';
import { Link } from 'react-router-dom';

const css = require('../sass/main.scss');

export const PriceTable: React.FunctionComponent = () => (
    <div className={css['price-table']}>
        <div className={css.column}>
            <div id={css['pro-table']} className={css.table}>
                <div className={css.bkg}>
                    <span className={css.price}>$5</span>
                    <span className={css.sub}>/month</span>
                    <span className={`${css.title} ${css.riot}`}>RIOT<span>PRO</span></span>
                    <img src="login/y1ostvqnr4711.jpg" draggable={false} />
                    <div className={css.opacity}></div>
                </div>
                <div>
                    <ul>
                        <li><i className={[css.icon, css.bx, css['bxs-user-voice']].join(" ")} style={{color: '#A291F3'}}></i><b>256kbps </b>
                            voice servers</li>
                        <hr />
                        <li><i className={[css.icon, css.bx, css['bxs-brush']].join(" ")} style={{color: '#FFC12B'}}></i>Customize your
                                            server</li>
                        <hr />
                        <li><i className={[css.icon, css.bx, css['bx-server']].join(" ")} style={{color: '#2BC4FF'}}></i>Your own domain</li>
                        <hr />
                        <li><i className={[css.icon, css.bx, css['bx-plus']].join(" ")} style={{color: '#E886F3'}}></i>And much more...</li>
                    </ul>
                </div>
                <Link className={css['btn-purple']} to="/pro">Learn More</Link>
            </div>
        </div>
        <div id="free" className={css.column}>
            <div className={css.table}>
                <div className={css.bkg}>
                    <span className={css.price}>$0</span>
                    <span className={css.sub}>/forever</span>
                    <span id="free-price" className={css.title}>Free</span>
                    <img src="/assets/images/free-banner.png" draggable={false} />
                </div>
                <div>
                    <ul>
                        <li><i className={[css.icon, css.bx, css['bxs-user-voice']].join(" ")} style={{color: 'grey'}}></i>192kbps voice
                                            servers</li>
                        <hr />
                        <li><i className={[css.icon, css.bx, css['bxs-brush']].join(" ")} style={{color: 'grey'}}></i>Animated Server Icon
                                        </li>
                        <hr />
                        <li><i className={[css.icon, css.bx, css['bx-server']].join(" ")} style={{color: 'grey'}}></i>Custom Domain</li>
                    </ul>
                </div>
                <a id="create" className={css.button} href="login/login.html">Create server</a>
            </div>
        </div>
    </div>
)