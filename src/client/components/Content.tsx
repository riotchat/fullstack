import * as React from 'react';

const css = require('../sass/main.scss');

type ContentProps = {
    children?: React.ReactNode,
    image?: React.ReactNode,
    imageAlign?: "LEFT" | "RIGHT"
}

export const Content: React.FunctionComponent<ContentProps> = (props) => {
    let image = undefined;
    if(typeof props.image === "string") {
        image =
            <div className={css['content-image']}>
                    <img src={props.image} />
            </div>;
    } else image = props.image;

    return <div className={css.content}>
        <div className={css['content-wrap']}>
            {/* LEFT ALIGN */}
            {props.imageAlign !== "RIGHT" && image}
            {/* CONTENT */}
            <div className={css.hook}>
                {props.children}
            </div>
            {/* RIGHT ALIGN*/}
            {props.imageAlign === "RIGHT" && image}
        </div>
    </div>;
}

export const ContentOpacityLayer: React.FunctionComponent<ContentProps> = (props) => (
    <div className={css['opacity-layer']}>
        <Content children={props.children} image={props.image} imageAlign={props.imageAlign} />
    </div>
);