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
        const isMobile = window.matchMedia('(max-width: 640px)').matches;
        const isTablet = window.matchMedia('(min-width: 641px) and (max-width: 1024px)').matches;

        const ctx = gsap.context(() => {
            // Animate section titles — mobile: fade up, tablet: slide in smaller, desktop: full slide+rotate
            gsap.utils.toArray<HTMLElement>('.gsap-title').forEach((title) => {
                const fromVars = isMobile
                    ? { y: 30, opacity: 0 }
                    : isTablet
                        ? { x: -60, opacity: 0, rotation: -3 }
                        : { x: -100, opacity: 0, rotation: -5 };
                const toVars = isMobile
                    ? { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
                    : isTablet
                        ? { x: 0, opacity: 1, rotation: 0, duration: 0.7, ease: 'power3.out' }
                        : { x: 0, opacity: 1, rotation: 0, duration: 0.8, ease: 'power3.out' };

                gsap.fromTo(title, fromVars, {
                    ...toVars,
                    scrollTrigger: {
                        trigger: title,
                        start: isMobile ? 'top 90%' : 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                });
            });

            // Animate section content — mobile: simple fade, desktop: slide up
            gsap.utils.toArray<HTMLElement>('.gsap-content').forEach((content) => {
                const fromY = isMobile ? 25 : 50;
                gsap.fromTo(
                    content,
                    { y: fromY, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: isMobile ? 0.5 : 0.6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: content,
                            start: isMobile ? 'top 92%' : 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });

            // Track cards — mobile: fade up stagger, tablet: smaller slide, desktop: full alternate slide
            const trackCards = gsap.utils.toArray<HTMLElement>('.gsap-track-card');
            trackCards.forEach((card, index) => {
                const fromVars = isMobile
                    ? { y: 40, opacity: 0, scale: 0.95 }
                    : isTablet
                        ? { x: index % 2 === 0 ? -60 : 60, opacity: 0, scale: 0.9 }
                        : { x: index % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.8 };

                gsap.fromTo(card, fromVars, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: isMobile ? 0.5 : 0.7,
                    ease: isMobile ? 'power2.out' : 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: card,
                        start: isMobile ? 'top 92%' : 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: index * (isMobile ? 0.06 : 0.1),
                });
            });

            // Prize cards — mobile: scale up + fade, desktop: bounce from top
            gsap.utils.toArray<HTMLElement>('.gsap-prize-card').forEach((card, index) => {
                const fromVars = isMobile
                    ? { scale: 0.9, opacity: 0, y: 20 }
                    : { y: -100, opacity: 0 };
                const toVars = isMobile
                    ? { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                    : { y: 0, opacity: 1, duration: 0.6, ease: 'bounce.out' };

                gsap.fromTo(card, fromVars, {
                    ...toVars,
                    scrollTrigger: {
                        trigger: card,
                        start: isMobile ? 'top 92%' : 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: index * (isMobile ? 0.1 : 0.15),
                });
            });

            // Sponsor items — mobile: fade in stagger, desktop: scale pop
            gsap.utils.toArray<HTMLElement>('.gsap-sponsor-item').forEach((item, index) => {
                const fromVars = isMobile
                    ? { opacity: 0, y: 20 }
                    : { scale: 0, opacity: 0 };
                const toVars = isMobile
                    ? { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
                    : { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' };

                gsap.fromTo(item, fromVars, {
                    ...toVars,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: index * (isMobile ? 0.06 : 0.1),
                });
            });

            // FAQ items — mobile: simple fade, desktop: slide from left
            gsap.utils.toArray<HTMLElement>('.gsap-faq-item').forEach((item, index) => {
                const fromVars = isMobile
                    ? { opacity: 0, y: 20 }
                    : { x: -50, opacity: 0 };
                const toVars = isMobile
                    ? { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
                    : { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' };

                gsap.fromTo(item, fromVars, {
                    ...toVars,
                    scrollTrigger: {
                        trigger: item,
                        start: isMobile ? 'top 92%' : 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: index * (isMobile ? 0.06 : 0.1),
                });
            });

            // Footer links — mobile: stagger fade up, desktop: scale pop
            gsap.utils.toArray<HTMLElement>('.gsap-footer-link').forEach((link, index) => {
                const fromVars = isMobile
                    ? { opacity: 0, y: 15 }
                    : { scale: 0.5, opacity: 0 };
                const toVars = isMobile
                    ? { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                    : { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' };

                gsap.fromTo(link, fromVars, {
                    ...toVars,
                    scrollTrigger: {
                        trigger: link,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: index * (isMobile ? 0.06 : 0.1),
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return <div ref={containerRef}>{children}</div>;
}
