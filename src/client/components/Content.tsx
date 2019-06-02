import * as React from 'react';

const css = require('../sass/main.scss');

export const Content: React.FunctionComponent = (props) => (
    <div className={css.content}>
        <div className={css['content-wrap']}>
            { props.children }
        </div>
    </div>
)

export const ContentOpacityLayer: React.FunctionComponent = (props) => (
    <div className={css['opacity-layer']}>
        <Content children={props.children} />
    </div>
);