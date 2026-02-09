'use client';

import Canvas from './canvas';
import VideoBackground from '@/components/VideoBackground';
import Section from '@/components/Section';
import Marquee from '@/components/Marquee';
import GSAPProvider from '@/components/GSAPProvider';

export default function Page() {
    return (
        <GSAPProvider>
            <main style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
                {/* Hero Section */}
                <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
                    <VideoBackground />
                    <Canvas />
                </div>

                <Marquee text="HAWKATHOON 2026 • BUILD STUFF • BREAK STUFF • WIN STUFF • " speed={25} />

                {/* About Section */}
                <Section id="about" title="WTF IS THIS?" backgroundColor="#FFFF00" transform="rotate(-1deg)">
                    <div className="w-full max-w-4xl text-center space-y-8">
                        <p className="text-2xl md:text-4xl leading-relaxed">
                            HAWKATHOON IS NOT YOUR AVERAGE BORING HACKATHON. IT&apos;S A CHAOTIC, HIGH-ENERGY, MEME-FILLED CODING SPREE.
                        </p>
                        <p className="text-xl md:text-2xl leading-relaxed opacity-80">
                            WE DON&apos;T CARE IF YOUR CODE IS CLEAN. WE CARE IF IT WORKS (BARELY) AND IF IT&apos;S COOL. JOIN US FOR 24 HOURS OF PURE ADRENALINE AND CAFFEINE OD.
                        </p>
                    </div>
                </Section>

                {/* Tracks Section */}
                <Section id="tracks" title="CHALLENGES" backgroundColor="#ff00ff" textColor="#fff" transform="rotate(1deg)">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl">
                        <div className="gsap-track-card border-4 border-white p-8 md:p-10 bg-black transform -rotate-2 hover:rotate-0 transition-transform duration-300 min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400 font-sans">01. AI CHAOS</h3>
                            <p className="text-lg md:text-xl">BUILD SOMETHING THAT USES AI IN THE MOST UNEXPECTED WAY POSSIBLE.</p>
                        </div>
                        <div className="gsap-track-card border-4 border-white p-8 md:p-10 bg-black transform rotate-2 hover:rotate-0 transition-transform duration-300 min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400 font-sans">02. WEB3 MAYHEM</h3>
                            <p className="text-lg md:text-xl">BLOCKCHAIN? MORE LIKE BLOCK-PAIN. MAKE IT FUN.</p>
                        </div>
                        <div className="gsap-track-card border-4 border-white p-8 md:p-10 bg-black transform -rotate-1 hover:rotate-0 transition-transform duration-300 min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-green-400 font-sans">03. GAMEDEV</h3>
                            <p className="text-lg md:text-xl">MAKE A GAME. MAKE IT GLITCHY. MAKE IT MEME-WORTHY.</p>
                        </div>
                        <div className="gsap-track-card border-4 border-white p-8 md:p-10 bg-black transform rotate-1 hover:rotate-0 transition-transform duration-300 min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400 font-sans">04. OPEN INNOVATION</h3>
                            <p className="text-lg md:text-xl">DO WHATEVER YOU WANT. JUST IMPRESS US.</p>
                        </div>
                    </div>
                </Section>

                <Marquee text="NO SLEEP • JUST CODE • PIZZA • BUGS • " direction="right" backgroundColor="#00ffff" speed={25} />

                {/* Prizes Section */}
                <Section id="prizes" title="LOOT" backgroundColor="#00ff00" transform="rotate(-1deg)">
                    <div className="w-full flex flex-col gap-8 max-w-4xl items-center">
                        <div className="gsap-prize-card w-full border-4 border-black p-10 md:p-12 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-5xl md:text-6xl font-black mb-4">1ST PLACE</h3>
                            <p className="text-2xl md:text-3xl font-bold">₹50,000 + BRAGGING RIGHTS + WEIRD TROPHY</p>
                        </div>
                        <div className="gsap-prize-card w-[90%] md:w-[85%] border-4 border-black p-8 md:p-10 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-4xl md:text-5xl font-black mb-4">2ND PLACE</h3>
                            <p className="text-xl md:text-2xl font-bold">₹30,000 + SWAG + HIGH FIVE</p>
                        </div>
                        <div className="gsap-prize-card w-[80%] md:w-[70%] border-4 border-black p-6 md:p-8 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-3xl md:text-4xl font-black mb-4">3RD PLACE</h3>
                            <p className="text-lg md:text-xl font-bold">₹15,000 + STICKERS</p>
                        </div>
                    </div>
                </Section>

                {/* Sponsors Section */}
                <Section id="sponsors" title="OUR SUGAR DADDIES" backgroundColor="#fff" transform="rotate(2deg)">
                    <div className="w-full max-w-5xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center text-center py-12">
                            <div className="gsap-sponsor-item text-4xl md:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-8 border-4 border-dashed border-gray-300">GOOGLE?</div>
                            <div className="gsap-sponsor-item text-4xl md:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-8 border-4 border-dashed border-gray-300">MICROSOFT?</div>
                            <div className="gsap-sponsor-item text-4xl md:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-8 border-4 border-dashed border-gray-300">AMAZON?</div>
                            <div className="gsap-sponsor-item text-4xl md:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-8 border-4 border-dashed border-gray-300">YOUR MOM</div>
                        </div>
                        <p className="text-center mt-8 text-xl text-gray-500 font-bold">(SERIOUSLY, CALL US PLS)</p>
                    </div>
                </Section>

                {/* FAQ Section */}
                <Section id="faq" title="WTF?" backgroundColor="#000" textColor="#fff" transform="rotate(0deg)">
                    <div className="space-y-6 max-w-4xl mx-auto w-full">
                        <details className="gsap-faq-item border-4 border-white p-6 md:p-8 open:bg-gray-900 group">
                            <summary className="text-2xl md:text-3xl font-bold cursor-pointer list-none flex justify-between items-center">
                                <span>IS IT FREE?</span>
                                <span className="text-4xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="mt-6 text-xl md:text-2xl opacity-80">YES. FREE FOOD. FREE WIFI. FREE STRESS.</p>
                        </details>
                        <details className="gsap-faq-item border-4 border-white p-6 md:p-8 open:bg-gray-900 group">
                            <summary className="text-2xl md:text-3xl font-bold cursor-pointer list-none flex justify-between items-center">
                                <span>CAN I PARTICIPATE REMOTELY?</span>
                                <span className="text-4xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="mt-6 text-xl md:text-2xl opacity-80">MAYBE. DEPENDS IF THE WIFI WORKS.</p>
                        </details>
                        <details className="gsap-faq-item border-4 border-white p-6 md:p-8 open:bg-gray-900 group">
                            <summary className="text-2xl md:text-3xl font-bold cursor-pointer list-none flex justify-between items-center">
                                <span>TEAM SIZE?</span>
                                <span className="text-4xl group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="mt-6 text-xl md:text-2xl opacity-80">2-4 HUMANS. NO ROBOTS (UNLESS YOU BUILD THEM).</p>
                        </details>
                    </div>
                </Section>

                {/* Footer Section */}
                <Section id="footer" title="LET&apos;S CONNECT" backgroundColor="#ff00ff" textColor="#fff" transform="rotate(-1deg)">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-2xl md:text-3xl mb-12">MADE WITH CODE AND CAFFEINE BY THE HAWKATHOON TEAM.</p>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xl md:text-2xl mb-12">
                            <a href="#" className="gsap-footer-link border-4 border-white px-8 py-4 hover:bg-white hover:text-black transition-colors font-bold">INSTAGRAM</a>
                            <a href="#" className="gsap-footer-link border-4 border-white px-8 py-4 hover:bg-white hover:text-black transition-colors font-bold">TWITTER</a>
                            <a href="#" className="gsap-footer-link border-4 border-white px-8 py-4 hover:bg-white hover:text-black transition-colors font-bold">DISCORD</a>
                        </div>
                        <p className="text-lg opacity-60">COPYRIGHT 2026. DON&apos;T SUE US.</p>
                    </div>
                </Section>
            </main>
        </GSAPProvider>
    );
}
