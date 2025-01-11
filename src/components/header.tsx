"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import img from '@/assets/img/xcom_logo_black_2025.png';

const navLinks = [
    { label: "SPONSOR", href: "/sponsor" },
    { label: "FAQ", href: "/faq" },
    { label: "OM OSS", href: "/about"},
    
]

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex py-4 my-4 text-lg w-full">
    <nav className="w-full">
        <div className="flex items-center w-full">
            <Link href="/" className="w-1/3 text-center pl-4">
                <Image 
                    src={img} 
                    alt="logo" 
                    width={250} 
                    height={150} 
                />
            </Link>
            {navLinks.map((link, index) => (
                <Link 
                    key={index} 
                    href={link.href} 
                    className={`w-1/5 h-full text-center text-lg hover:underline decoration-2 ${
                        pathname === link.href ? 'underline' : ''
                    }`}>
                    {link.label}
                </Link>
            ))}
        </div>
    </nav>
</header>

    );
}
