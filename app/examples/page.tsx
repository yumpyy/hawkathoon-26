'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import StaticBackground from '@/components/StaticBackground';
import Section from '@/components/Section';
import Marquee from '@/components/Marquee';
import GSAPProvider from '@/components/GSAPProvider';

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const posterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!posterRef.current) return;

            gsap.to(posterRef.current, {
                rotation: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                transformOrigin: "top center"
            });

            gsap.from(posterRef.current, {
                y: -500,
                opacity: 0,
                duration: 1,
                ease: "bounce.out"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <GSAPProvider>
            <main ref={containerRef} style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
                {/* Hero Section */}
                <div style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StaticBackground />
                    <div className="z-10 text-center px-3 sm:px-4">
                        <div ref={posterRef} className="inline-block bg-[#e8dcb5] p-4 sm:p-6 md:p-8 border-4 sm:border-6 md:border-8 border-[#3e2723] transform rotate-2 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] sm:shadow-[15px_15px_0px_0px_rgba(0,0,0,0.8)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,0.8)]">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#3e2723] border-b-2 sm:border-b-4 border-[#3e2723] mb-2 sm:mb-3 md:mb-4 pb-1 sm:pb-2 tracking-normal">WANTED</h1>
                            <div className="w-full h-32 sm:h-40 md:h-52 lg:h-64 bg-gray-300 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center border-2 sm:border-4 border-[#3e2723]">
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-50 font-bold tracking-normal">IMAGE_NOT_FOUND</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3e2723] tracking-normal">FOR CRIMES AGAINST<br />PRODUCTION</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-2 sm:mt-3 md:mt-4 text-[#3e2723] tracking-normal">REWARD: ₹0.00</p>
                        </div>
                    </div>
                </div>

                <Marquee text="THE SQUAD • THE MYTHS • THE LEGENDS • THE ONES WHO BROKE PROD • " speed={35} direction="left" backgroundColor="#ff0000" textColor="#fff" />

                {/* Team Section */}
                <Section id="team" title="CRIMINALS" backgroundColor="#800080" textColor="#fff" transform="rotate(2deg)">
                    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
                        <div className="border-2 sm:border-4 border-white bg-black p-4 sm:p-5 md:p-6 text-center transform hover:-translate-y-4 transition-transform duration-300">
                            <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl">?</div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 tracking-normal">THE BOSS</h3>
                            <p className="font-mono mt-1 sm:mt-2 text-sm sm:text-base tracking-normal">&quot;IT WORKS ON MY MACHINE&quot;</p>
                        </div>
                        <div className="border-2 sm:border-4 border-white bg-black p-4 sm:p-5 md:p-6 text-center transform hover:-translate-y-4 transition-transform duration-300 md:translate-y-8">
                            <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl">?</div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 tracking-normal">THE CODER</h3>
                            <p className="font-mono mt-1 sm:mt-2 text-sm sm:text-base tracking-normal">&quot;I DELETED THE DATABASE&quot;</p>
                        </div>
                        <div className="border-2 sm:border-4 border-white bg-black p-4 sm:p-5 md:p-6 text-center transform hover:-translate-y-4 transition-transform duration-300">
                            <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-800 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl">?</div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400 tracking-normal">THE DESIGNER</h3>
                            <p className="font-mono mt-1 sm:mt-2 text-sm sm:text-base tracking-normal">&quot;MAKE THE LOGO BIGGER&quot;</p>
                        </div>
                    </div>
                </Section>

                {/* Hall of Fame Section */}
                <Section id="projects" title="HALL OF SHAME" backgroundColor="#FFA500" transform="rotate(-1deg)">
                    <div className="w-full max-w-5xl space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-4">
                        <div className="bg-white border-2 sm:border-4 border-black p-3 sm:p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 group cursor-pointer hover:bg-black hover:text-white transition-colors">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-normal">PROJECT ALPHA</h3>
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-mono tracking-normal">2024 WINNER (ACCIDENTALLY)</span>
                        </div>
                        <div className="bg-white border-2 sm:border-4 border-black p-3 sm:p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 group cursor-pointer hover:bg-black hover:text-white transition-colors">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-normal">PROJECT BETA</h3>
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-mono tracking-normal">DISQUALIFIED (TOO GOOD)</span>
                        </div>
                        <div className="bg-white border-2 sm:border-4 border-black p-3 sm:p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 group cursor-pointer hover:bg-black hover:text-white transition-colors">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-normal">PROJECT OMEGA</h3>
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-mono tracking-normal">CRASHED THE WIFI</span>
                        </div>
                    </div>
                </Section>

                {/* Footer Section */}
                <Section id="footer" title="JOIN US?" backgroundColor="#000" textColor="#fff" transform="rotate(0deg)">
                    <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 font-mono tracking-normal">ARE YOU BRAVE ENOUGH?</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqBoOabXJ1uFNL2GDybUIlYaGxHvtBRZfvD8WHW36JHvGYVQ/viewform" target="_blank" className="inline-block border-2 sm:border-4 border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-blue-600 hover:bg-white hover:text-blue-600 transition-colors uppercase tracking-normal">
                            REGISTER NOW!
                        </a>
                    </div>
                </Section>

            </main>
        </GSAPProvider>
    );
}
