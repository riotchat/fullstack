import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const css = require('../sass/main.scss');

export const PriceTable: React.FunctionComponent = () => {
    let { t, i18n } = useTranslation();
    return (
        <div className={css['price-table']}>
            <div className={css.column}>
                <div id={css['pro-table']} className={css.table}>
                    <div className={css.bkg}>
                        <span className={css.price}>{t('homepage.pricetable.pro.price')}</span>
                        <span className={css.sub}>/{t('homepage.pricetable.pro.month')}</span>
                        <span className={`${css.title} ${css.riot}`}>RIOT<span>PRO</span></span>
                        <img src="/assets/images/free.png" draggable={false} />
                        <div className={css.opacity}></div>
                    </div>
                    <div>
                        <ul>
                            <li><i className={`${css.icon} bx bxs-user-voice`} style={{color: '#A291F3'}}></i>
                                <Trans i18nKey="homepage.pricetable.pro.perk1"><b>256kbps</b> voice servers</Trans>
                            </li>
                            <hr />
                            <li><i className={`${css.icon} bx bxs-brush`} style={{color: '#FFC12B'}}></i>{t('homepage.pricetable.pro.perk2')}</li>
                            <hr />
                            <li><i className={`${css.icon} bx bx-server`} style={{color: '#2BC4FF'}}></i>{t('homepage.pricetable.pro.perk3')}</li>
                            <hr />
                            <li><i className={`${css.icon} bx bx-plus`} style={{color: '#E886F3'}}></i>{t('homepage.pricetable.pro.perk4')}</li>
                        </ul>
                    </div>
                    <Link className={css['btn-purple']} style={{width: "auto"}} to="/pro">{t('homepage.pricetable.pro.button')}</Link>
                </div>
            </div>
            <div id="free" className={css.column}>
                <div className={css.table}>
                    <div className={css.bkg}>
                        <span className={css.price}>{t('homepage.pricetable.free.price')}</span>
                        <span className={css.sub}>/{t('homepage.pricetable.free.month')}</span>
                        <span id="free-price" className={css.title}>{t('homepage.pricetable.free.free')}</span>
                        <img src="/assets/images/free-banner.png" draggable={false} />
                    </div>
                    <div>
                        <ul>
                            <li><i className={`${css.icon} bx bxs-user-voice`} style={{color: 'grey'}}></i>{t('homepage.pricetable.free.perk1')}</li>
                            <hr />
                            <li><i className={`${css.icon} bx bxs-brush`} style={{color: 'grey'}}></i>{t('homepage.pricetable.free.perk2')}</li>
                            <hr />
                            <li><i className={`${css.icon} bx bx-server`} style={{color: 'grey'}}></i>{t('homepage.pricetable.free.perk3')}</li>
                        </ul>
                    </div>
                    <a id="create" className={css.button} style={{width: "auto"}} href="login/login.html">{t('homepage.pricetable.free.button')}</a>
                </div>
            </div>
        </div>
    )
}