'use client';

import { useState, useEffect } from 'react';
import { elements } from './elements';
import Draggable from '@/components/Draggable';
import StaticElement from '@/components/StaticElement';

function MobileCanvas() {
    return (
        <div
            id="canvas"
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                gap: '8px',
                overflow: 'hidden',
            }}
        >
            {/* AIH Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/vitbaih_logo.png"
                alt="AIH Logo"
                style={{ width: '80px', transform: 'rotate(-10deg)', marginBottom: '4px' }}
            />

            {/* Title Block */}
            <div style={{ textAlign: 'center', lineHeight: 1.1 }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'Comic Sans MS, Impact, sans-serif', color: '#ff00ff', transform: 'rotate(-3deg)', display: 'inline-block' }}>
                    HAWK-
                </div>
                <br />
                <div style={{ fontSize: '48px', fontWeight: 'bold', fontFamily: 'Comic Sans MS, Impact, sans-serif', color: '#00ff00', transform: 'rotate(3deg)', display: 'inline-block' }}>
                    A-THOON
                </div>
                <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'red', textShadow: '3px 3px 0px black', marginLeft: '4px' }}>
                    &apos;26
                </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: '16px', fontStyle: 'italic', background: '#000', color: '#fff', padding: '6px 12px', textAlign: 'center' }}>
                Meme on that thing!
            </p>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', maxWidth: '320px' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: '#000', color: '#fff', padding: '8px 12px', transform: 'rotate(-1deg)' }}>
                    LOCATION: AB-1 206
                </div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: '#fff', color: '#000', border: '2px solid black', padding: '8px 12px', transform: 'rotate(1deg)' }}>
                    WHEN: 27 FEB
                </div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', backgroundColor: 'yellow', color: '#000', padding: '8px 12px', border: '2px solid black', transform: 'rotate(-1deg)' }}>
                    TIME: 10:00 AM - 12:30 PM
                </div>
            </div>

            {/* Registration Link */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '320px', marginTop: '8px' }}>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfqBoOabXJ1uFNL2GDybUIlYaGxHvtBRZfvD8WHW36JHvGYVQ/viewform"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        backgroundColor: '#fff',
                        border: '3px solid #000',
                        padding: '12px',
                        fontSize: '16px',
                        textAlign: 'center',
                        boxShadow: '6px 6px 0px #000',
                        fontWeight: 'bold',
                        transform: 'rotate(-1deg)',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: '#000',
                        display: 'block',
                    }}
                >
                    REGISTER NOW!
                    <span style={{ display: 'block', fontSize: '10px', marginTop: '3px' }}>(Link)</span>
                </a>
            </div>

            {/* Meme text */}
            <div style={{ fontSize: '12px', backgroundColor: 'yellow', padding: '4px', transform: 'rotate(-3deg)', border: '2px solid black', maxWidth: '200px', textAlign: 'center', marginTop: '4px' }}>
                FRIENDSHIP ENDED WITH OMDENA?
            </div>
        </div>
    );
}

export default function Canvas() {
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return <MobileCanvas />;
    }

    return (
        <div id="canvas" style={{ width: '100%', height: '100%', position: 'relative' }}>
            {/* Elements Layer */}
            {elements.map((el) =>
                el.draggable ? (
                    <Draggable
                        key={el.id}
                        {...el}
                        onZoom={setPreviewSrc}
                    />
                ) : (
                    <StaticElement key={el.id} {...el} />
                )
            )}

            {/* Preview Overlay Layer */}
            {previewSrc && (
                <div
                    onClick={() => setPreviewSrc(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        zIndex: 99999999, // Super top layer
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={previewSrc}
                        alt="Preview"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                            border: '2px solid white'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        color: 'white',
                        fontFamily: 'monospace',
                        fontSize: '16px',
                        pointerEvents: 'none'
                    }}>
                        [CLICK ANYWHERE TO CLOSE]
                    </div>
                </div>
            )}
        </div>
    );
}
