'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: '/1', label: 'HOME' },
        { href: '/2', label: 'ABOUT' },
        { href: '/3', label: 'REGISTER' },
        { href: '/4', label: 'CONTACT' },
        { href: '/5', label: 'EXAMPLES' },
    ];

    return (
        <nav className="nav-bar">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
