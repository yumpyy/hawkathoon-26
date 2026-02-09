'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import StaticBackground from '@/components/StaticBackground';
import Section from '@/components/Section';
import Marquee from '@/components/Marquee';
import GSAPProvider from '@/components/GSAPProvider';

export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const countdownRef = useRef<HTMLDivElement>(null);
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-02-24T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".countdown-item", {
                y: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "bounce.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <GSAPProvider>
            <main ref={containerRef} style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
                {/* Hero Section with Static Background */}
                <div style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StaticBackground />
                    <div className="z-10 text-center mix-blend-difference flex flex-col items-center">
                        <div className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4 flex gap-4 md:gap-8 transform -rotate-2 flex-wrap justify-center">
                            <div className="flex flex-col countdown-item"><span className="text-[6rem] md:text-[10rem]">{String(timeLeft.days).padStart(2, '0')}</span><span className="text-xl md:text-2xl">DAYS</span></div>
                            <span className="text-[6rem] md:text-[10rem] countdown-item">:</span>
                            <div className="flex flex-col countdown-item"><span className="text-[6rem] md:text-[10rem]">{String(timeLeft.hours).padStart(2, '0')}</span><span className="text-xl md:text-2xl">HRS</span></div>
                            <span className="text-[6rem] md:text-[10rem] countdown-item">:</span>
                            <div className="flex flex-col countdown-item"><span className="text-[6rem] md:text-[10rem]">{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-xl md:text-2xl">MIN</span></div>
                        </div>

                        <p className="text-3xl md:text-5xl font-bold text-white bg-red-600 inline-block px-8 py-4 border-4 border-black transform rotate-3 mt-12 md:mt-24">
                            UNTIL HAWKATHON BEGINS
                        </p>
                    </div>
                </div>

                <Marquee text="SCHEDULE • TIMELINE • DEADLINES ARE SUGGESTIONS • SLEEP IS OPTIONAL • " speed={45} direction="left" backgroundColor="#FFFF00" />

                {/* Day 1 Section */}
                <Section id="day1" title="DAY 01" backgroundColor="#0000FF" textColor="#fff" transform="rotate(-2deg)">
                    <div className="w-full max-w-5xl space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 border-b-4 border-white pb-6">
                            <div className="w-full md:w-1/4 text-4xl font-black text-yellow-400">09:00 AM</div>
                            <div className="w-full md:w-3/4">
                                <h3 className="text-3xl font-bold">CHECK-IN & CHAOS</h3>
                                <p className="text-xl mt-2 opacity-80">GRAB YOUR BADGE. DON'T LOSE IT. WE DON'T KNOW WHO YOU ARE.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 border-b-4 border-white pb-6">
                            <div className="w-full md:w-1/4 text-4xl font-black text-yellow-400">11:00 AM</div>
                            <div className="w-full md:w-3/4">
                                <h3 className="text-3xl font-bold">OPENING CEREMONY</h3>
                                <p className="text-xl mt-2 opacity-80">WE TALK. YOU LISTEN. THEN WE CODE.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 border-b-4 border-white pb-6">
                            <div className="w-full md:w-1/4 text-4xl font-black text-yellow-400">HACK BEGINS</div>
                            <div className="w-full md:w-3/4">
                                <h3 className="text-3xl font-bold">START HACKING</h3>
                                <p className="text-xl mt-2 opacity-80">MAY THE BUGS BE WITH YOU.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Marquee text="NO WIFI? USE HOTSPOT • SERVER CRASHED? RESTART • " speed={30} direction="right" backgroundColor="#00ffff" />

                {/* Day 2 Section */}
                <Section id="day2" title="DAY 02" backgroundColor="#FF00FF" textColor="#fff" transform="rotate(2deg)">
                    <div className="w-full max-w-5xl space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 border-b-4 border-white pb-6">
                            <div className="w-full md:w-1/4 text-4xl font-black text-black bg-white p-2 inline-block">03:00 AM</div>
                            <div className="w-full md:w-3/4">
                                <h3 className="text-3xl font-bold">MIDNIGHT SNACK ATTACK</h3>
                                <p className="text-xl mt-2 opacity-80">PIZZA. RED BULL. REGRET.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 border-b-4 border-white pb-6">
                            <div className="w-full md:w-1/4 text-4xl font-black text-black bg-white p-2 inline-block">10:00 AM</div>
                            <div className="w-full md:w-3/4">
                                <h3 className="text-3xl font-bold">SUBMISSION DEADLINE</h3>
                                <p className="text-xl mt-2 opacity-80">PUSH TO MASTER. FINGERS CROSSED.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Footer Section */}
                <Section id="footer" title="END" backgroundColor="#000" textColor="#fff" transform="rotate(0deg)">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-2xl md:text-3xl mb-8 font-mono">SEE YOU NEXT YEAR (MAYBE)</p>
                    </div>
                </Section>
            </main>
        </GSAPProvider>
    );
}
