import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Invite } from '../components/Invite';

const css = require('./Home.css');

export const Home: React.FunctionComponent = () => (

    <Helmet>
        <title>Overwatch on Riot</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#40E0D0">
        <link href="login.css" rel="stylesheet" type="text/css">
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.2/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    </Helmet>
    <body style="background-image: url(overwatch_4k-HD.jpg)">
        <div class="opacity-layer"></div>
        <main>
            <div class="left">
                <div class="logo">
                    <a class="text" href="login.html">RIOT</a>
                </div>
            </div>
            <div class="right">
                <div class="animated bounceInRight">
                    <div class="login">
                        <h2>You have been invited to join</h2>
                        <div class="server">
                            <div class="icon">
                                <img src="server-icon.jpg" draggable="false">
                            </div>
                            <div class="info">
                                <h3 style="vertical-align: middle"><i id="verified" class='bx bxs-badge-check' style='color: mediumslateblue;'></i>Overwatch</h3>
                                <div class="status">
                                    <span class="status-text"><span class="dot"></span>103 online</span>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Join server">
                    </div>
                </div>
            </div>
        </main>
   </body>
);
