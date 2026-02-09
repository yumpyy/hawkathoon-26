'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StaticBackground from '@/components/StaticBackground';
import Section from '@/components/Section';
import Marquee from '@/components/Marquee';
import GSAPProvider from '@/components/GSAPProvider';

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation - Slam with shake
            gsap.from(titleRef.current, {
                y: -200,
                autoAlpha: 0,
                duration: 1.2,
                ease: "bounce.out",
                delay: 0.2
            });

            // Content Animation - Slide up with hard stop
            gsap.from(contentRef.current, {
                y: 100,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 1
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <GSAPProvider>
            <main ref={containerRef} style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
                {/* Hero Section */}
                <div style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <StaticBackground />
                    <div className="z-10 text-center transform -rotate-2">
                        <h1 ref={titleRef} className="text-7xl md:text-9xl font-black text-yellow-400 bg-black p-4 border-8 border-white shadow-[15px_15px_0px_0px_rgba(255,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(255,0,0,1)] transition-all cursor-crosshair">
                            LOWER YOUR<br />EXPECTATIONS
                        </h1>
                    </div>
                    <div ref={contentRef} className="z-20 mt-12 max-w-2xl bg-white border-4 border-black p-8 transform rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group hover:scale-105 transition-transform">
                        <h2 className="text-4xl font-black mb-4 bg-black text-white inline-block px-2">ABOUT US:</h2>
                        <p className="text-2xl font-bold opacity-100 leading-tight">
                            WE ARE A BUNCH OF COLLEGE STUDENTS FAKING PROFESSIONALISM.
                            WE DON&apos;T KNOW HOW THE WIFI WORKS EITHER.
                            <br /><br />
                            <span className="bg-yellow-300 px-1">JUST CODE AND DON&apos;T ASK QUESTIONS.</span>
                        </p>
                    </div>
                </div>

                <Marquee text="WHO ARE WE? • NO IDEA • JUST CODING • CHAOS COORDINATORS • " speed={30} direction="left" backgroundColor="#ff00ff" />

                {/* The Lore Section */}
                <Section id="lore" title="THE LORE" backgroundColor="#FFFF00" transform="rotate(1deg)">
                    <div className="w-full max-w-5xl text-left space-y-8 p-4">
                        <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-3xl md:text-5xl font-black mb-6">IT STARTED WITH A SEGFAULT.</h3>
                            <p className="text-xl md:text-2xl leading-relaxed font-bold">
                                LEGEND SAYS A DEV TRIED TO CENTER A DIV IN 2024 AND BROKE REALITY. NOW WE ARE HERE.
                                HAWKATHON IS THE RESULT OF 10,000 MERGE CONFLICTS MANIFESTING INTO A PHYSICAL EVENT.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* The Venue Section */}
                <Section id="venue" title="LOCATION PLS" backgroundColor="#000" textColor="#fff" transform="rotate(-1deg)">
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="border-4 border-white p-8 md:p-12 bg-gray-900 transform -rotate-2 hover:rotate-0 transition-all duration-300">
                            <h3 className="text-4xl md:text-6xl font-black text-green-400 mb-4">VIT BHOPAL</h3>
                            <p className="text-2xl md:text-3xl text-white">
                                SOMEWHERE ON EARTH.<br />
                                (MAYBE).<br />
                                GPS MIGHT FAIL.<br />
                                BRING A COMPASS.
                            </p>
                        </div>
                        <div className="border-4 border-white p-8 md:p-12 bg-blue-900 transform rotate-2 hover:rotate-0 transition-all duration-300 flex flex-col justify-center items-center text-center">
                            <div className="text-8xl mb-4">📍</div>
                            <p className="text-2xl font-bold">COORDINATES: <br />NULL, NULL</p>
                        </div>
                    </div>
                </Section>

                <Marquee text="404 LOCATION NOT FOUND • TRY REFRESHING • OR JUST SCREAM • " speed={20} direction="right" backgroundColor="#00ffff" />

                {/* Footer Section */}
                <Section id="footer" title="EXIT" backgroundColor="#ff0000" textColor="#fff" transform="rotate(1deg)">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl mb-8 font-mono">YOU HAVE REACHED THE END OF THIS PAGE.</p>
                        <a href="/" className="inline-block border-4 border-white px-10 py-5 text-2xl font-black hover:bg-white hover:text-black transition-colors uppercase">
                            GO BACK HOME
                        </a>
                    </div>
                </Section>
            </main>
        </GSAPProvider>
    );
}
