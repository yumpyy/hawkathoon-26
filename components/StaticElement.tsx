import React from 'react';
import { CanvasElement } from '../app/1/elements';

export default function StaticElement(props: CanvasElement) {
    const { x, y, zIndex, width, height, type, src, text, href, style } = props;

    const commonStyle: React.CSSProperties = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        zIndex,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        pointerEvents: 'none',
        ...style
    };

    if (type === 'image' && src) {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt="" style={commonStyle} />;
    }

    if (type === 'link' && href) {
        // Static links technically shouldn't be clickable if pointerEvents: none, 
        // but if we want them to work we need pointerEvents: auto.
        // However, static elements in this system are usually background.
        // We will stick to the rule "Interactive = Draggable".
        // If a link is static, it's just visual text.
        // But let's allow it just in case.
        return (
            <a href={href} style={{ ...commonStyle, pointerEvents: 'auto' }} target="_blank" rel="noreferrer">
                {text}
            </a>
        );
    }

    return <div style={commonStyle}>{text}</div>;
}
