import * as React from 'react'
import { useTranslation } from 'react-i18next';

import { ScrollToTopOnMount } from '../utils/Utils';
import { Navigation, Footer } from '../components/HeaderFooter';

import platform from 'platform';

const css = require('../sass/main.scss');
const downloadCss = require('./Download.scss');

const googlePlayButton = require('../../../assets/images/googleplay-button.png');
const appStoreButton = require('../../../assets/images/appstore-button.svg');

let os: "WIN" | "MAC" | "LINUX" | "ANDROID" | "IOS" | "UNKNOWN" = "UNKNOWN";

if(platform.os.family.indexOf("Windows") !== -1) os = "WIN";
else if(platform.os.family === "OS X") os = "MAC";
else if(platform.os.family === "Android") os = "ANDROID";
else if(platform.os.family === "iOS") os = "IOS";

class DownloadButtons extends React.Component<{t, i18n}, {
    allPlatforms: boolean
}> {
    constructor(props) {
        super(props);

        this.state = {
            allPlatforms: os === "UNKNOWN"
        }

        this.toggleViewPlatforms = this.toggleViewPlatforms.bind(this);
    }

    toggleViewPlatforms() {
        this.setState({
            allPlatforms: !this.state.allPlatforms
        })
    }

    render() {
        let buttons: React.ReactNode = null;
        // Windows
        if(os === "WIN") buttons = (
            <div className={css.buttons}>
                <a className={downloadCss.buttonPrimary} href="/assets/downloads/win-stable" target="_blank"><i className={`${css['icon-os']} bx bxl-windows`}></i> {this.props.t('download.downloadStable', { os: "Windows" })}</a>
                <a className={downloadCss.buttonSecondary} href="/assets/downloads/win-nightly" target="_blank"><i className={`${css['icon-os']} bx bxs-moon`}></i> {this.props.t('download.downloadNightly')}</a>
            </div>
        );
        // macOS
        else if(os === "MAC") buttons = (
            <div>
                <a className={downloadCss.buttonPrimary} href="/assets/downloads/mac-stable" target="_blank"><i className={`${css['icon-os']} bx bxl-apple`}></i> {this.props.t('download.downloadStable', { os: "macOS" })}</a>
                <a className={downloadCss.buttonSecondary} href="/assets/downloads/mac-nightly" target="_blank"><i className={`${css['icon-os']} bx bxs-moon`}></i> {this.props.t('download.downloadNightly')}</a>
            </div>
        );
        // Linux
        // We can do this later as Linux is kinda confusing when it comes to installation packages

        // Android
        else if(os === "ANDROID") buttons = (
            <div>
                <a href='' target="_blank">
                    <img className={downloadCss['dl-appstore']} alt='Get it on Google Play' width="200px" src={googlePlayButton} />
                </a>
                <br />
            </div>
        )
        // iOS
        else if(os === "IOS") buttons = (
            <div>
                <a href='' target="_blank">
                    <img className={downloadCss['dl-appstore']}alt='Download on the App Store' width="200px" src={appStoreButton} />
                </a>
                <br />
            </div>
        )

        return (
            <div>
                {buttons}
                <a className={`${downloadCss.viewPlatforms} ${this.state.allPlatforms ? downloadCss.active : ""}`}
                    onClick={this.toggleViewPlatforms} style={{ cursor: "pointer", color: "white" }}>{this.props.t('download.viewPlatforms')}<i className='bx bx-caret-down' style={{color: '#ffffff'}} /></a>
                <br /><br />
                
                { this.state.allPlatforms && (
                    <div style={{ margin: "10px" }}>
                    <div className={downloadCss.allPlatforms}>
                        <div className={downloadCss['dl-div']}>
                            <img className={downloadCss['os-icon']} src="assets/svg/windows.svg" height="48px" />
                            <div className={downloadCss['dl-name']}>
                                <h2 className={downloadCss['os']}>Windows</h2>
                                <span className={downloadCss['dl-version']}>{this.props.t('stable')}: 1.01 | {this.props.t('nightly')}: 1.02</span>
                            </div>
                            <div className={downloadCss['dl-buttons']}>
                                <a className={downloadCss['dl-button']} href="/assets/downloads/win-stable" target="_blank"><i className={`${downloadCss['icon-os']} bx bx-download`} style={{ color: '#ffffff' }}></i></a>
                                <a className={`${downloadCss['dl-button']} ${downloadCss.nightly}`} href="/assets/downloads/win-nightly" target="_blank">
                                    <i className={`${downloadCss['icon-os']} bx bx-download`} style={{ color: '#ffffff' }}></i> {this.props.t('nightly')}
                                </a>
                            </div>
                        </div>
                        <div className={downloadCss['dl-div']}>
                            <img className={downloadCss['os-icon']} src="assets/svg/apple.svg" height="48px" />
                            <div className={downloadCss['dl-name']}>
                                <h2 className={downloadCss['os']}>macOS</h2>
                                <span className={downloadCss['dl-version']}>{this.props.t('stable')}: 1.01 | {this.props.t('nightly')}: 1.02</span>
                            </div>
                            <div className={downloadCss['dl-buttons']}>
                                <a className={downloadCss['dl-button']} href="/assets/downloads/mac-stable" target="_blank"><i className={`${downloadCss['icon-os']} bx bx-download`} style={{ color: '#ffffff' }}></i></a>
                                <a className={`${downloadCss['dl-button']} ${downloadCss.nightly}`} href="/assets/downloads/mac-nightly" target="_blank">
                                    <i className={`${downloadCss['icon-os']} bx bx-download`} style={{ color: '#ffffff' }}></i> {this.props.t('nightly')}
                                </a>
                            </div>
                        </div>
                        <div className={downloadCss['dl-div']}>
                            <img className={downloadCss['os-icon']} src="assets/svg/linux.svg" height="48px" />
                            <div className={downloadCss['dl-name']}>
                                <h2 className={downloadCss['os']}>Linux</h2>
                                <span className={downloadCss['dl-version']}>{this.props.t('stable')}: 1.01 | {this.props.t('nightly')}: 1.02</span>
                            </div>
                            <div className={downloadCss['dl-buttons']}>
                                <select name="dl-choose">
                                    <option value="debian-pkg">deb</option>
                                    <option value="tar-pkg">tar.gz</option>
                                </select>
                                <a className={downloadCss['dl-button']}><i className={`${downloadCss['icon-os']} bx bx-download`} style={{ color: '#ffffff' }}></i></a>
                                <a className={`${downloadCss['dl-button']} ${downloadCss.nightly}`} target="_blank">
                                    <i className={`${downloadCss['icon-os']} bx bx-download`} style={{ color: '#ffffff' }}></i> {this.props.t('nightly')}
                                </a>
                            </div>
                        </div>
                        <div className={downloadCss['dl-div']}>
                            <img className={downloadCss['os-icon']} src="assets/svg/apple.svg" height="48px" />
                            <div className={downloadCss['dl-name']}>
                                <h2 className={downloadCss['os']}>iOS</h2>
                                <span className={downloadCss['dl-version']}>{this.props.t('stable')}: 1.01 | {this.props.t('nightly')}: 1.02</span>
                            </div>
                            <div className={downloadCss['dl-buttons']}>
                                <a href="">
                                    <img alt='Download on the App Store' src={appStoreButton} height="52px" />
                                </a>
                            </div>
                        </div>
                        <div className={downloadCss['dl-div']}>
                            <img className={downloadCss['os-icon']} src="assets/svg/android.svg" height="48px" />
                            <div className={downloadCss['dl-name']}>
                                <h2 className={downloadCss['os']}>Android</h2>
                                <span className={downloadCss['dl-version']}>{this.props.t('stable')}: 1.01</span>
                            </div>
                            <div className={downloadCss['dl-buttons']}>
                                <img alt='Get it on Google Play' src={googlePlayButton} height="52px" />
                                <a className={downloadCss['dl-button']} href="/assets/downloads/android-apk" target="_blank">
                                    <i className={`${downloadCss['icon-os']} bx bx-download`} style={{ color: '#ffffff' }}></i> Download APK
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export const Download: React.FunctionComponent = () => {
    let { t, i18n } = useTranslation();
    return (
        <div style={{ backgroundColor: "mediumslateblue" }}>
            <ScrollToTopOnMount />
                <main>
                    <Navigation fixed={true} />
                    <section style={{ textAlign: 'center', paddingTop: '100px' }}>
                        <div className={css['content-download']}>
                            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{t('download.title')}</h1>
                            <p style={{ marginBottom: '40px' }} >{t('download.subtitle')}</p>
                            <DownloadButtons t={t} i18n={i18n} />
                        </div>
                    </section>
                    <section style={{ textAlign: 'center', backgroundImage: "url('/assets/images/pattern/pattern.png')", backgroundSize: "unset", backgroundPosition: "unset" }}>
                        <div className={css['content-download']} style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            { os === "ANDROID" || os === "IOS" ? (
                                <img className={css.screenshot} src="/assets/images/riot-mobile-ui.png" style={{ maxWidth: "500px" }} />
                            ) : (
                                <img className={css.screenshot} src="/assets/images/riot-ui.png" />
                            )}
                            <br />
                            <a className={css.more} style={{ margin: '10px 0 50px 0' }} href="test">{t('download.downloadBeta')}</a>
                            <br /><br />
                        </div>
                    </section>
                </main>
            <Footer />
        </div>
    )
}