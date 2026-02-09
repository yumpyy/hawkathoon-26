'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import StaticBackground from '@/components/StaticBackground';
import Section from '@/components/Section';
import Marquee from '@/components/Marquee';
import GSAPProvider from '@/components/GSAPProvider';

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const popup1Ref = useRef<HTMLDivElement>(null);
    const popup2Ref = useRef<HTMLDivElement>(null);
    const popup3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const popups = [popup1Ref.current, popup2Ref.current, popup3Ref.current];

            popups.forEach((popup) => {
                if (!popup) return;
                gsap.to(popup, {
                    x: "random(-20, 20)",
                    y: "random(-20, 20)",
                    rotation: "random(-15, 15)",
                    duration: "random(2, 4)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

            // Specific entrance
            gsap.from(popups, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
                ease: "back.out(1.7)"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <GSAPProvider>
            <main ref={containerRef} style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
                {/* Hero Section */}
                <div style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
                    <StaticBackground />
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div ref={popup1Ref} className="bg-white border-4 border-blue-600 p-6 shadow-[20px_20px_0px_0px_rgba(0,0,255,1)] transform -rotate-12 absolute top-1/6 left-1/4 z-30">
                            <h2 className="text-4xl font-black text-blue-600">CALL NOW!!!</h2>
                            <p className="text-xl">FREE ADVICE (NOT)</p>
                        </div>
                        <div ref={popup2Ref} className="bg-yellow-300 border-4 border-black p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transform rotate-6 z-20">
                            <h1 className="text-6xl md:text-9xl font-black text-black">CONTACT<br />US???</h1>
                        </div>
                        <div ref={popup3Ref} className="bg-pink-500 border-4 border-white p-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transform rotate-12 absolute bottom-1/4 right-1/4 z-30">
                            <h2 className="text-3xl font-black text-white">WIN AN IPHONE*</h2>
                            <p className="text-sm text-white">*just kidding</p>
                        </div>
                    </div>
                </div>

                <Marquee text="CALL US • DON'T CALL US • SEND PIGEONS • SMOKE SIGNALS ACCEPTED • " speed={40} direction="right" backgroundColor="#00ff00" />

                {/* Contact Section */}
                <Section id="contact" title="TALK TO US" backgroundColor="#FF00FF" textColor="#fff" transform="rotate(-2deg)">
                    <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-center">
                        <a href="mailto:hello@hawkathon.com" className="group relative block p-8 border-4 border-white bg-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110">
                            <h3 className="text-4xl md:text-6xl font-black">EMAIL US</h3>
                            <p className="text-xl mt-4 opacity-70 group-hover:opacity-100">IF YOU DARE</p>
                            <div className="absolute -top-6 -right-6 bg-yellow-400 text-black font-bold p-2 rotate-12 border-2 border-black">
                                SLOW REPLY
                            </div>
                        </a>
                        <a href="#" className="group relative block p-8 border-4 border-white bg-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110">
                            <h3 className="text-4xl md:text-6xl font-black">DISCORD</h3>
                            <p className="text-xl mt-4 opacity-70 group-hover:opacity-100">IT'S CHAOS HERE</p>
                            <div className="absolute -top-6 -left-6 bg-cyan-400 text-black font-bold p-2 -rotate-12 border-2 border-black">
                                24/7 SPAM
                            </div>
                        </a>
                    </div>
                </Section>

                {/* Sponsors Section */}
                <Section id="sponsors-cta" title="GIVE US MONEY" backgroundColor="#FFFF00" transform="rotate(2deg)">
                    <div className="max-w-4xl text-center space-y-8">
                        <h2 className="text-4xl md:text-7xl font-black leading-tight">
                            WE NEED <span className="bg-black text-white px-4">CASH</span>.<br />YOU NEED <span className="bg-black text-white px-4">CLOUT</span>.
                        </h2>
                        <p className="text-2xl font-bold bg-white inline-block p-4 border-4 border-black transform -rotate-1">
                            SPONSOR THE MOST CHAOTIC HACKATHON OF 2026.
                        </p>
                        <br />
                        <button className="text-3xl md:text-5xl border-8 border-black bg-green-500 hover:bg-green-400 px-12 py-6 font-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 transition-all">
                            SPONSOR NOW $$$
                        </button>
                    </div>
                </Section>

                <Marquee text="YOUR LOGO HERE • YOUR LOGO HERE • YOUR LOGO HERE • YOUR LOGO HERE • " speed={15} backgroundColor="#000" textColor="#fff" />
            </main>
        </GSAPProvider>
    );
}
