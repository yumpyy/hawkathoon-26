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
                    <div className="w-full max-w-4xl text-center space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed tracking-normal">
                            HAWKATHOON IS NOT YOUR AVERAGE BORING HACKATHON. IT&apos;S A CHAOTIC, HIGH-ENERGY, MEME-FILLED CODING SPREE.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-80 tracking-normal">
                            WE DON&apos;T CARE IF YOUR CODE IS CLEAN. WE CARE IF IT WORKS (BARELY) AND IF IT&apos;S COOL. JOIN US FOR 24 HOURS OF PURE ADRENALINE AND CAFFEINE OD.
                        </p>
                    </div>
                </Section>

                {/* Tracks Section */}
                <Section id="tracks" title="CHALLENGES" backgroundColor="#ff00ff" textColor="#fff" transform="rotate(1deg)">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl px-2 sm:px-4">
                        <div className="gsap-track-card border-2 sm:border-4 border-white p-5 sm:p-6 md:p-8 lg:p-10 bg-black transform -rotate-2 hover:rotate-0 transition-transform duration-300 min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-yellow-400 font-sans tracking-normal">01. AI CHAOS</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal">BUILD SOMETHING THAT USES AI IN THE MOST UNEXPECTED WAY POSSIBLE.</p>
                        </div>
                        <div className="gsap-track-card border-2 sm:border-4 border-white p-5 sm:p-6 md:p-8 lg:p-10 bg-black transform rotate-2 hover:rotate-0 transition-transform duration-300 min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-cyan-400 font-sans tracking-normal">02. WEB3 MAYHEM</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal">BLOCKCHAIN? MORE LIKE BLOCK-PAIN. MAKE IT FUN.</p>
                        </div>
                        <div className="gsap-track-card border-2 sm:border-4 border-white p-5 sm:p-6 md:p-8 lg:p-10 bg-black transform -rotate-1 hover:rotate-0 transition-transform duration-300 min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-green-400 font-sans tracking-normal">03. GAMEDEV</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal">MAKE A GAME. MAKE IT GLITCHY. MAKE IT MEME-WORTHY.</p>
                        </div>
                        <div className="gsap-track-card border-2 sm:border-4 border-white p-5 sm:p-6 md:p-8 lg:p-10 bg-black transform rotate-1 hover:rotate-0 transition-transform duration-300 min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-center text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-pink-400 font-sans tracking-normal">04. OPEN INNOVATION</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-normal">DO WHATEVER YOU WANT. JUST IMPRESS US.</p>
                        </div>
                    </div>
                </Section>

                <Marquee text="NO SLEEP • JUST CODE • PIZZA • BUGS • " direction="right" backgroundColor="#00ffff" speed={25} />

                {/* Prizes Section */}
                <Section id="prizes" title="LOOT" backgroundColor="#00ff00" transform="rotate(-1deg)">
                    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-4xl items-center px-2 sm:px-4">
                        <div className="gsap-prize-card w-full border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 lg:p-12 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-normal">1ST PLACE</h3>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-normal">₹50,000 + BRAGGING RIGHTS + WEIRD TROPHY</p>
                        </div>
                        <div className="gsap-prize-card w-[95%] sm:w-[90%] md:w-[85%] border-2 sm:border-4 border-black p-5 sm:p-6 md:p-8 lg:p-10 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-normal">2ND PLACE</h3>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-normal">₹30,000 + SWAG + HIGH FIVE</p>
                        </div>
                        <div className="gsap-prize-card w-[90%] sm:w-[80%] md:w-[70%] border-2 sm:border-4 border-black p-4 sm:p-5 md:p-6 lg:p-8 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-normal">3RD PLACE</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-normal">₹15,000 + STICKERS</p>
                        </div>
                    </div>
                </Section>

                {/* Sponsors Section */}
                <Section id="sponsors" title="OUR SUGAR DADDIES" backgroundColor="#fff" transform="rotate(2deg)">
                    <div className="w-full max-w-5xl px-2 sm:px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-center text-center py-6 sm:py-8 md:py-12">
                            <div className="gsap-sponsor-item text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-3 sm:p-4 md:p-6 lg:p-8 border-2 sm:border-4 border-dashed border-gray-300 tracking-normal">GOOGLE?</div>
                            <div className="gsap-sponsor-item text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-3 sm:p-4 md4:p-6 lg:p-8 border-2 sm:border-4 border-dashed border-gray-300 tracking-normal">MICROSOFT?</div>
                            <div className="gsap-sponsor-item text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-3 sm:p-4 md:p-6 lg:p-8 border-2 sm:border-4 border-dashed border-gray-300 tracking-normal">AMAZON?</div>
                            <div className="gsap-sponsor-item text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300 hover:text-gray-500 transition-colors p-3 sm:p-4 md:p-6 lg:p-8 border-2 sm:border-4 border-dashed border-gray-300 tracking-normal">YOUR MOM</div>
                        </div>
                        <p className="text-center mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-500 font-bold tracking-normal">(SERIOUSLY, CALL US PLS)</p>
                    </div>
                </Section>

                {/* FAQ Section */}
                <Section id="faq" title="WTF?" backgroundColor="#000" textColor="#fff" transform="rotate(0deg)">
                    <div className="space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl mx-auto w-full px-2 sm:px-4">
                        <details className="gsap-faq-item border-2 sm:border-4 border-white p-4 sm:p-5 md:p-6 lg:p-8 open:bg-gray-900 group">
                            <summary className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer list-none flex justify-between items-center tracking-normal">
                                <span>IS IT FREE?</span>
                                <span className="text-2xl sm:text-3xl md:text-4xl group-open:rotate-45 transition-transform ml-2">+</span>
                            </summary>
                            <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl opacity-80 tracking-normal">YES. FREE FOOD. FREE WIFI. FREE STRESS.</p>
                        </details>
                        <details className="gsap-faq-item border-2 sm:border-4 border-white p-4 sm:p-5 md:p-6 lg:p-8 open:bg-gray-900 group">
                            <summary className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer list-none flex justify-between items-center tracking-normal">
                                <span>CAN I PARTICIPATE REMOTELY?</span>
                                <span className="text-2xl sm:text-3xl md:text-4xl group-open:rotate-45 transition-transform ml-2">+</span>
                            </summary>
                            <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl opacity-80 tracking-normal">MAYBE. DEPENDS IF THE WIFI WORKS.</p>
                        </details>
                        <details className="gsap-faq-item border-2 sm:border-4 border-white p-4 sm:p-5 md:p-6 lg:p-8 open:bg-gray-900 group">
                            <summary className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer list-none flex justify-between items-center tracking-normal">
                                <span>TEAM SIZE?</span>
                                <span className="text-2xl sm:text-3xl md:text-4xl group-open:rotate-45 transition-transform ml-2">+</span>
                            </summary>
                            <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl opacity-80 tracking-normal">2-4 HUMANS. NO ROBOTS (UNLESS YOU BUILD THEM).</p>
                        </details>
                    </div>
                </Section>

                {/* Footer Section */}
                <Section id="footer" title="LET'S CONNECT" backgroundColor="#ff00ff" textColor="#fff" transform="rotate(-1deg)">
                    <div className="max-w-4xl mx-auto px-2 sm:px-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-12 tracking-normal">MADE WITH CODE AND CAFFEINE BY THE HAWKATHOON TEAM.</p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-12">
                            <a href="#" className="gsap-footer-link border-2 sm:border-4 border-white px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 hover:bg-white hover:text-black transition-colors font-bold text-center tracking-normal">INSTAGRAM</a>
                            <a href="#" className="gsap-footer-link border-2 sm:border-4 border-white px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 hover:bg-white hover:text-black transition-colors font-bold text-center tracking-normal">TWITTER</a>
                            <a href="#" className="gsap-footer-link border-2 sm:border-4 border-white px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 hover:bg-white hover:text-black transition-colors font-bold text-center tracking-normal">DISCORD</a>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg opacity-60 tracking-normal">COPYRIGHT 2026. DON&apos;T SUE US.</p>
                    </div>
                </Section>
            </main>
        </GSAPProvider>
    );
}
