'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function Navbar() {
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    const links = [
        { href: '/home', label: 'HOME', color: '#ff0000' },
        { href: '/about', label: 'ABOUT', color: '#ffff00' },
        { href: '/register', label: 'REGISTER', color: '#00ff00' },
        { href: '/contact', label: 'CONTACT', color: '#00ffff' },
        { href: '/examples', label: 'EXAMPLES', color: '#ff00ff' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate navbar sliding down
            gsap.fromTo(
                navRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2,
                }
            );

            // Animate links with stagger and rotation
            if (linksRef.current) {
                const linkElements = linksRef.current.querySelectorAll('.nav-link-item');
                gsap.fromTo(
                    linkElements,
                    { y: -50, opacity: 0, rotation: -15 },
                    {
                        y: 0,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.6,
                        ease: 'back.out(1.7)',
                        stagger: 0.08,
                        delay: 0.4,
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-8 left-0 w-full px-4 md:px-8 z-[9999]"
            style={{ background: 'transparent' }}
        >
            <div
                ref={linksRef}
                className="flex justify-center gap-3 md:gap-5 flex-wrap"
            >
                {links.map((link, index) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`nav-link-item relative px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-black uppercase border-4 border-black transition-all duration-200 ${pathname === link.href
                                ? 'bg-black text-white'
                                : 'bg-white text-black'
                            }`}
                        style={{
                            fontFamily: 'Impact, sans-serif',
                            boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
                            transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                        }}
                        onMouseEnter={(e) => {
                            if (pathname !== link.href) {
                                e.currentTarget.style.backgroundColor = link.color;
                                e.currentTarget.style.transform = 'rotate(0deg) scale(1.1)';
                                e.currentTarget.style.boxShadow = '8px 8px 0px 0px rgba(0,0,0,1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (pathname !== link.href) {
                                e.currentTarget.style.backgroundColor = '#fff';
                                e.currentTarget.style.transform = `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`;
                                e.currentTarget.style.boxShadow = '6px 6px 0px 0px rgba(0,0,0,1)';
                            }
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
