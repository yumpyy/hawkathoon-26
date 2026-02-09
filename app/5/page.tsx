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
                    <div className="z-10 text-center">
                        <div ref={posterRef} className="inline-block bg-[#e8dcb5] p-8 border-8 border-[#3e2723] transform rotate-2 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.8)]">
                            <h1 className="text-6xl md:text-8xl font-black text-[#3e2723] border-b-4 border-[#3e2723] mb-4 pb-2">WANTED</h1>
                            <div className="w-full h-64 bg-gray-300 mb-4 flex items-center justify-center border-4 border-[#3e2723]">
                                <span className="text-4xl opacity-50 font-bold">IMAGE_NOT_FOUND</span>
                            </div>
                            <h2 className="text-4xl font-bold text-[#3e2723]">FOR CRIMES AGAINST<br />PRODUCTION</h2>
                            <p className="text-xl font-bold mt-4 text-[#3e2723]">REWARD: ₹0.00</p>
                        </div>
                    </div>
                </div>

                <Marquee text="THE SQUAD • THE MYTHS • THE LEGENDS • THE ONES WHO BROKE PROD • " speed={35} direction="left" backgroundColor="#ff0000" textColor="#fff" />

                {/* Team Section */}
                <Section id="team" title="CRIMINALS" backgroundColor="#800080" textColor="#fff" transform="rotate(2deg)">
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                        <div className="border-4 border-white bg-black p-6 text-center transform hover:-translate-y-4 transition-transform duration-300">
                            <div className="w-full h-48 bg-gray-800 mb-4 flex items-center justify-center text-4xl">?</div>
                            <h3 className="text-2xl font-bold text-yellow-400">THE BOSS</h3>
                            <p className="font-mono mt-2">"IT WORKS ON MY MACHINE"</p>
                        </div>
                        <div className="border-4 border-white bg-black p-6 text-center transform hover:-translate-y-4 transition-transform duration-300 translate-y-8">
                            <div className="w-full h-48 bg-gray-800 mb-4 flex items-center justify-center text-4xl">?</div>
                            <h3 className="text-2xl font-bold text-cyan-400">THE CODER</h3>
                            <p className="font-mono mt-2">"I DELETED THE DATABASE"</p>
                        </div>
                        <div className="border-4 border-white bg-black p-6 text-center transform hover:-translate-y-4 transition-transform duration-300">
                            <div className="w-full h-48 bg-gray-800 mb-4 flex items-center justify-center text-4xl">?</div>
                            <h3 className="text-2xl font-bold text-green-400">THE DESIGNER</h3>
                            <p className="font-mono mt-2">"MAKE THE LOGO BIGGER"</p>
                        </div>
                    </div>
                </Section>

                {/* Hall of Fame Section */}
                <Section id="projects" title="HALL OF SHAME" backgroundColor="#FFA500" transform="rotate(-1deg)">
                    <div className="w-full max-w-5xl space-y-6">
                        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center group cursor-pointer hover:bg-black hover:text-white transition-colors">
                            <h3 className="text-2xl md:text-3xl font-bold">PROJECT ALPHA</h3>
                            <span className="text-xl font-mono">2024 WINNER (ACCIDENTALLY)</span>
                        </div>
                        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center group cursor-pointer hover:bg-black hover:text-white transition-colors">
                            <h3 className="text-2xl md:text-3xl font-bold">PROJECT BETA</h3>
                            <span className="text-xl font-mono">DISQUALIFIED (TOO GOOD)</span>
                        </div>
                        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center group cursor-pointer hover:bg-black hover:text-white transition-colors">
                            <h3 className="text-2xl md:text-3xl font-bold">PROJECT OMEGA</h3>
                            <span className="text-xl font-mono">CRASHED THE WIFI</span>
                        </div>
                    </div>
                </Section>

                {/* Footer Section */}
                <Section id="footer" title="JOIN US?" backgroundColor="#000" textColor="#fff" transform="rotate(0deg)">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl mb-8 font-mono">ARE YOU BRAVE ENOUGH?</p>
                        <a href="https://google.com" target="_blank" className="inline-block border-4 border-white px-10 py-5 text-2xl font-black bg-blue-600 hover:bg-white hover:text-blue-600 transition-colors uppercase">
                            REGISTER NOW
                        </a>
                    </div>
                </Section>

            </main>
        </GSAPProvider>
    );
}
