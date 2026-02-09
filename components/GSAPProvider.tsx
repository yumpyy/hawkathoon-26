'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPProviderProps {
    children: React.ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section titles
            gsap.utils.toArray<HTMLElement>('.gsap-title').forEach((title) => {
                gsap.fromTo(
                    title,
                    { x: -100, opacity: 0, rotation: -5 },
                    {
                        x: 0,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: title,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });

            // Animate section content
            gsap.utils.toArray<HTMLElement>('.gsap-content').forEach((content) => {
                gsap.fromTo(
                    content,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: content,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });

            // Animate track cards with stagger
            const trackCards = gsap.utils.toArray<HTMLElement>('.gsap-track-card');
            trackCards.forEach((card, index) => {
                const fromX = index % 2 === 0 ? -100 : 100;
                gsap.fromTo(
                    card,
                    { x: fromX, opacity: 0, scale: 0.8 },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.7,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                        delay: index * 0.1,
                    }
                );
            });

            // Animate prize cards with bounce
            gsap.utils.toArray<HTMLElement>('.gsap-prize-card').forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { y: -100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'bounce.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                        delay: index * 0.15,
                    }
                );
            });

            // Animate sponsor items
            gsap.utils.toArray<HTMLElement>('.gsap-sponsor-item').forEach((item, index) => {
                gsap.fromTo(
                    item,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'back.out(2)',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                        delay: index * 0.1,
                    }
                );
            });

            // Animate FAQ items
            gsap.utils.toArray<HTMLElement>('.gsap-faq-item').forEach((item, index) => {
                gsap.fromTo(
                    item,
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                        delay: index * 0.1,
                    }
                );
            });

            // Animate footer links
            gsap.utils.toArray<HTMLElement>('.gsap-footer-link').forEach((link, index) => {
                gsap.fromTo(
                    link,
                    { scale: 0.5, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: link,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                        delay: index * 0.1,
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return <div ref={containerRef}>{children}</div>;
}
