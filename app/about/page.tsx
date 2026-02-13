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
            if (!titleRef.current || !contentRef.current) return;

            const tl = gsap.timeline({ delay: 0.3 });

            // Title Animation - Smooth drop with elastic settle
            tl.fromTo(titleRef.current,
                {
                    scale: 1.3,
                    autoAlpha: 0,
                    y: -150,
                    rotation: -8,
                    filter: 'blur(10px)'
                },
                {
                    scale: 1,
                    autoAlpha: 1,
                    y: 0,
                    rotation: -2,
                    filter: 'blur(0px)',
                    duration: 1.2,
                    ease: "elastic.out(1, 0.5)"
                }
            );

            // Subtle shake after landing
            tl.to(titleRef.current, {
                x: 3,
                yoyo: true,
                repeat: 3,
                duration: 0.06,
                ease: "sine.inOut"
            }, "-=0.2");

            // Content fades in smoothly after title
            tl.from(contentRef.current, {
                y: 60,
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.4");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <GSAPProvider>
            <main ref={containerRef} style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
                {/* Hero Section */}
                <div style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <StaticBackground />
                    <div className="z-10 text-center transform -rotate-2 px-3 sm:px-4">
                        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-yellow-400 bg-black p-2 sm:p-3 md:p-4 border-4 sm:border-6 md:border-8 border-white shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(255,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(255,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(255,0,0,1)] transition-all cursor-crosshair tracking-normal">
                            LOWER YOUR<br />EXPECTATIONS
                        </h1>
                    </div>
                    <div ref={contentRef} className="z-20 mt-6 sm:mt-8 md:mt-12 max-w-2xl mx-3 sm:mx-4 md:mx-auto bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group hover:scale-105 transition-transform">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-black inline-block px-2 tracking-normal">ABOUT US:</h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold opacity-100 leading-tight tracking-normal">
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
                    <div className="w-full max-w-5xl text-left space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4">
                        <div className="border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-normal">IT STARTED WITH A SEGFAULT.</h3>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-bold tracking-normal">
                                LEGEND SAYS A DEV TRIED TO CENTER A DIV IN 2024 AND BROKE REALITY. NOW WE ARE HERE.
                                HAWKATHON IS THE RESULT OF 10,000 MERGE CONFLICTS MANIFESTING INTO A PHYSICAL EVENT.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* The Venue Section */}
                <Section id="venue" title="LOCATION PLS" backgroundColor="#000" textColor="#fff" transform="rotate(-1deg)">
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center px-2 sm:px-4">
                        <div className="border-2 sm:border-4 border-white p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-900 transform -rotate-2 hover:rotate-0 transition-all duration-300">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-green-400 mb-2 sm:mb-3 md:mb-4 tracking-normal">VIT BHOPAL</h3>
                            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white tracking-normal">
                                SOMEWHERE ON EARTH.<br />
                                (MAYBE).<br />
                                GPS MIGHT FAIL.<br />
                                BRING A COMPASS.
                            </p>
                        </div>
                        <div className="border-2 sm:border-4 border-white p-4 sm:p-6 md:p-8 lg:p-12 bg-blue-900 transform rotate-2 hover:rotate-0 transition-all duration-300 flex flex-col justify-center items-center text-center">
                            <div className="text-5xl sm:text-6xl md:text-8xl mb-2 sm:mb-3 md:mb-4">📍</div>
                            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-normal">COORDINATES: <br />NULL, NULL</p>
                        </div>
                    </div>
                </Section>

                <Marquee text="404 LOCATION NOT FOUND • TRY REFRESHING • OR JUST SCREAM • " speed={20} direction="right" backgroundColor="#00ffff" />

                {/* Footer Section */}
                <Section id="footer" title="EXIT" backgroundColor="#ff0000" textColor="#fff" transform="rotate(1deg) tracking-normal">
                    <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 font-mono tracking-normal">YOU HAVE REACHED THE END OF THIS PAGE.</p>
                        <a href="/" className="inline-block border-2 sm:border-4 border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl font-bold hover:bg-white hover:text-black transition-colors uppercase tracking-normal">
                            GO BACK HOME
                        </a>
                    </div>
                </Section>
            </main>
        </GSAPProvider>
    );
}
