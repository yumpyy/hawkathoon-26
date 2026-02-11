'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function Navbar() {
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: '/1', label: 'HOME', color: '#ff0000' },
        { href: '/2', label: 'ABOUT', color: '#ffff00' },
        { href: '/3', label: 'REGISTER', color: '#00ff00' },
        { href: '/4', label: 'CONTACT', color: '#00ffff' },
        { href: '/5', label: 'EXAMPLES', color: '#ff00ff' },
    ];

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Animate navbar on mount
    useEffect(() => {
        const ctx = gsap.context(() => {
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

            // Desktop links animation
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

            // Burger button animation
            if (burgerRef.current) {
                gsap.fromTo(
                    burgerRef.current,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'back.out(2)',
                        delay: 0.3,
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    // Animate mobile menu open/close
    useEffect(() => {
        if (!menuRef.current) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(
                menuRef.current,
                { clipPath: 'circle(0% at calc(100% - 40px) 40px)', opacity: 0 },
                {
                    clipPath: 'circle(150% at calc(100% - 40px) 40px)',
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.out',
                }
            );
            const menuLinks = menuRef.current.querySelectorAll('.mobile-nav-link');
            gsap.fromTo(
                menuLinks,
                { x: 80, opacity: 0, rotation: 10 },
                {
                    x: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                    stagger: 0.08,
                    delay: 0.2,
                }
            );
        } else {
            document.body.style.overflow = '';
            gsap.to(menuRef.current, {
                clipPath: 'circle(0% at calc(100% - 40px) 40px)',
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in',
            });
        }
    }, [isOpen]);

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-4 sm:top-6 md:top-8 left-0 w-full px-3 sm:px-4 md:px-8 z-[9999]"
                style={{ background: 'transparent' }}
            >
                {/* Desktop navigation */}
                <div
                    ref={linksRef}
                    className="hidden md:flex justify-center gap-3 lg:gap-5 flex-wrap"
                >
                    {links.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link-item relative px-4 py-2 lg:px-5 lg:py-2.5 text-[7px] lg:text-[9px] font-bold uppercase border-2 border-black transition-all duration-200 flex items-center justify-center tracking-normal ${pathname === link.href
                                ? 'bg-black text-white'
                                : 'bg-white text-black'
                                }`}
                            style={{
                                fontFamily: 'Impact, sans-serif',
                                letterSpacing: '0em',
                                boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
                                transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                                minWidth: '60px',
                                minHeight: '28px',
                                textAlign: 'center',
                                borderWidth: '2px',
                            }}
                            onMouseEnter={(e) => {
                                if (pathname !== link.href) {
                                    e.currentTarget.style.backgroundColor = link.color;
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.transform = 'rotate(0deg) scale(1.1)';
                                    e.currentTarget.style.boxShadow = '5px 5px 0px 0px rgba(0,0,0,1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (pathname !== link.href) {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.transform = `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`;
                                    e.currentTarget.style.boxShadow = '3px 3px 0px 0px rgba(0,0,0,1)';
                                }
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Burger button - mobile only, right side */}
                <div className="flex md:hidden justify-end">
                    <button
                        ref={burgerRef}
                        onClick={toggleMenu}
                        className="relative z-[10001] w-12 h-12 sm:w-14 sm:h-14 bg-black flex flex-col items-center justify-center gap-1.5 sm:gap-2"
                        style={{
                            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                            border: '3px solid white',
                        }}
                        aria-label="Toggle menu"
                    >
                        <span
                            className="block w-6 sm:w-7 h-0.5 bg-white transition-all duration-300"
                            style={{
                                transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0)',
                            }}
                        />
                        <span
                            className="block w-6 sm:w-7 h-0.5 bg-white transition-all duration-300"
                            style={{
                                opacity: isOpen ? 0 : 1,
                            }}
                        />
                        <span
                            className="block w-6 sm:w-7 h-0.5 bg-white transition-all duration-300"
                            style={{
                                transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0)',
                            }}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile fullscreen menu overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-[10000] md:hidden flex flex-col items-center justify-center gap-5 sm:gap-6"
                style={{
                    backgroundColor: '#000',
                    clipPath: 'circle(0% at calc(100% - 40px) 40px)',
                    opacity: 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                }}
            >
                {links.map((link, index) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`mobile-nav-link relative px-8 sm:px-10 py-4 sm:py-5 text-xl sm:text-2xl font-bold uppercase transition-all duration-200 tracking-normal ${pathname === link.href
                            ? 'bg-white text-black border-black'
                            : 'bg-black text-white border-white'
                            }`}
                        style={{
                            fontFamily: 'Impact, sans-serif',
                            letterSpacing: '0em',
                            boxShadow: `6px 6px 0px 0px ${link.color}`,
                            transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                            minWidth: '220px',
                            textAlign: 'center',
                            borderWidth: '3px',
                            borderStyle: 'solid',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    );
}
