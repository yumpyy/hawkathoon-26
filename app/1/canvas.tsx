'use client';

import { useState } from 'react';
import { elements } from './elements';
import Draggable from '@/components/Draggable';
import StaticElement from '@/components/StaticElement';

export default function Canvas() {
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);

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
