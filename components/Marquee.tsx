'use client';

import React from 'react';

interface MarqueeProps {
    text: string;
    backgroundColor?: string;
    textColor?: string;
    speed?: number; // duration in seconds
    direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({
    text,
    backgroundColor = '#ffff00',
    textColor = '#000',
    speed = 10,
    direction = 'left',
}) => {
    return (
        <div
            className="w-full overflow-hidden whitespace-nowrap border-t-4 border-b-4 border-black"
            style={{
                backgroundColor,
                color: textColor,
                fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
            }}
        >
            <div
                className="inline-block"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                }}
            >
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
            </div>
            <div
                className="inline-block"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                }}
            >
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
                <span className="text-4xl font-bold uppercase mx-4">{text}</span>
            </div>
            <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default Marquee;
