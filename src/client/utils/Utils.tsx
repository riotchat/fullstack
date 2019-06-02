import * as React from 'react';

export class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
        window.scrollTo({top: 0});
    }

    render() {
        return null;
    }
}

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    let array = (e.target as HTMLAnchorElement).href.split("#");
    let id = array.length > 1 ? array[array.length - 1] : undefined;
    if(id === undefined) {
        console.warn(`Could not find ID for smooth scroll for element ${e.target}`);
        return;
    }

    let target = document.getElementById(id);
    if(target === undefined) {
        console.warn(`Could not find element with ID #${id} for smooth scroll`);
        return;
    }

    let x = window.scrollX, y = window.scrollY;
    window.location.href = `#${id}`;
    window.scrollTo(x, y);
    target.scrollIntoView({ behavior: "smooth" });
}