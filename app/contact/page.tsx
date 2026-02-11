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
            const popups = [popup1Ref.current, popup2Ref.current, popup3Ref.current].filter(Boolean);

            popups.forEach((popup) => {
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
            if (popups.length > 0) {
                gsap.from(popups, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "back.out(1.7)"
                });
            }

        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <GSAPProvider>
            <main ref={containerRef} style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
                {/* Hero Section */}
                <div style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
                    <StaticBackground />
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-3 sm:px-4">
                        <div className="bg-white border-2 sm:border-4 border-blue-600 p-3 sm:p-4 md:p-6 shadow-[10px_10px_0px_0px_rgba(0,0,255,1)] sm:shadow-[15px_15px_0px_0px_rgba(0,0,255,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,255,1)] transform -rotate-12 absolute top-[16.666%] left-[10%] sm:left-1/4 z-30">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 tracking-normal">CALL NOW!!!</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal">FREE ADVICE (NOT)</p>
                        </div>
                        <div className="bg-yellow-300 border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transform rotate-6 z-20">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold text-black tracking-normal">CONTACT<br />US???</h1>
                        </div>
                        <div className="bg-pink-500 border-2 sm:border-4 border-white p-2 sm:p-3 md:p-4 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] sm:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transform rotate-12 absolute bottom-1/4 right-[10%] sm:right-1/4 z-30">
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-normal">WIN AN IPHONE*</h2>
                            <p className="text-xs sm:text-sm text-white tracking-normal">*just kidding</p>
                        </div>
                    </div>
                </div>

                <Marquee text="CALL US • DON'T CALL US • SEND PIGEONS • SMOKE SIGNALS ACCEPTED • " speed={40} direction="right" backgroundColor="#00ff00" />

                {/* Contact Section */}
                <Section id="contact" title="TALK TO US" backgroundColor="#FF00FF" textColor="#fff" transform="rotate(-2deg)">
                    <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center px-2 sm:px-4">
                        <a href="mailto:hello@hawkathon.com" className="group relative block p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-white bg-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 w-full sm:w-auto text-center">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-normal">EMAIL US</h3>
                            <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4 opacity-70 group-hover:opacity-100 tracking-normal">IF YOU DARE</p>
                            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-yellow-400 text-black font-bold p-1 sm:p-2 rotate-12 border-2 border-black text-xs sm:text-sm md:text-base tracking-normal">
                                SLOW REPLY
                            </div>
                        </a>
                        <a href="#" className="group relative block p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-white bg-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 w-full sm:w-auto text-center">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-normal">DISCORD</h3>
                            <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-3 md:mt-4 opacity-70 group-hover:opacity-100 tracking-normal">IT'S CHAOS HERE</p>
                            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-cyan-400 text-black font-bold p-1 sm:p-2 -rotate-12 border-2 border-black text-xs sm:text-sm md:text-base tracking-normal">
                                24/7 SPAM
                            </div>
                        </a>
                    </div>
                </Section>

                {/* Sponsors Section */}
                <Section id="sponsors-cta" title="GIVE US MONEY" backgroundColor="#FFFF00" transform="rotate(2deg)">
                    <div className="max-w-4xl text-center space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight tracking-normal">
                            WE NEED <span className="bg-black text-white px-2 sm:px-3 md:px-4">CASH</span>.<br />YOU NEED <span className="bg-black text-white px-2 sm:px-3 md:px-4">CLOUT</span>.
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-white inline-block p-2 sm:p-3 md:p-4 border-2 sm:border-4 border-black transform -rotate-1 tracking-normal">
                            SPONSOR THE MOST CHAOTIC HACKATHON OF 2026.
                        </p>
                        <br />
                        <button className="text-xl sm:text-2xl md:text-3xl lg:text-5xl border-4 sm:border-6 md:border-8 border-black bg-green-500 hover:bg-green-400 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 md:hover:translate-x-2 md:hover:translate-y-2 transition-all tracking-normal">
                            SPONSOR NOW $$$
                        </button>
                    </div>
                </Section>

                <Marquee text="YOUR LOGO HERE • YOUR LOGO HERE • YOUR LOGO HERE • YOUR LOGO HERE • " speed={15} backgroundColor="#000" textColor="#fff" />
            </main>
        </GSAPProvider>
    );
}
