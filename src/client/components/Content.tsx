import * as React from 'react';

const css = require('../pages/Home.css');

type ContentProps = {
    children?: React.ReactNode,
    image?: string,
    imageAlign?: "LEFT" | "RIGHT"
}

export const Content: React.FunctionComponent<ContentProps> = (props) => (
    <div className={css.content}>
        <div className={css['content-wrap']}>
            {/* LEFT ALIGN IMAGE */}
            {props.image !== undefined && props.imageAlign !== "RIGHT" &&
                <div className={css['content-image']}>
                    <img src={props.image} />
                </div>
            }
            {/* CONTENT */}
            <div className={css.hook}>
                {props.children}
            </div>
            {/* RIGHT ALIGN IMAGE*/}
            {props.image !== undefined && props.imageAlign === "RIGHT" &&
                <div className={css['content-image']}>
                    <img src={props.image} />
                </div>
            }
        </div>
    </div>
);

export const ContentOpacityLayer: React.FunctionComponent<ContentProps> = (props) => (
    <div className={css['opacity-layer']}>
        <Content children={props.children} image={props.image} imageAlign={props.imageAlign} />
    </div>
);