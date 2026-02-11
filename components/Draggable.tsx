'use client';

import { useEffect, useRef } from 'react';
import { CanvasElement } from '../app/home/elements';
import { enableDrag } from '../app/home/drag';

// Wrapper component that makes any content draggable.
// Uses a ref to access the DOM node and attaches vanilla JS event listeners
// via 'enableDrag' to avoid React render cycle overhead during high-frequency mouse events.
interface DraggableProps extends CanvasElement {
    onZoom?: (src: string) => void;
}

export default function Draggable({
    type,
    text,
    src,
    width,
    href,
    zoomable,
    /* initial positions */
    x,
    y,
    /* visual style */
    zIndex,
    style,
    /* callbacks */
    onZoom
}: DraggableProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        // Click logic: 
        // 1. Link -> Open URL
        // 2. Zoomable Image -> Call onZoom
        const onClick = () => {
            if (type === 'link' && href) {
                window.open(href, '_blank');
            } else if (type === 'image' && zoomable && src && onZoom) {
                onZoom(src);
            }
        };

        const cleanup = enableDrag(ref.current, x, y, onClick);
        return cleanup;
    }, [x, y, type, href, zoomable, src, onZoom]);

    // Styles here are initial styles. drag.ts takes over left/top/zIndex logic on interaction
    const commonStyle: React.CSSProperties = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        zIndex,
        width: width ? `${width}px` : 'auto',
        height: 'auto', // Changed from original to match example's implied behavior
        userSelect: 'none',
        // User-defined styles (rotation, color, font)
        ...style
    };

    // Render logic per type
    if (type === 'link' && href) {
        return (
            <div ref={ref} style={commonStyle}>
                {text}
                <span style={{ display: 'block', fontSize: '10px', marginTop: '5px' }}>(Link)</span>
            </div>
        )
    }

    return (
        <div ref={ref} style={commonStyle}>
            {type === 'image' && src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="" style={{ width: '100%', height: '100%', pointerEvents: 'none', display: 'block' }} />
            ) : (
                text
            )}
        </div>
    );
}
