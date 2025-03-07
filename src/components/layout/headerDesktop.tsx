'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    { label: 'PROGRAM', href: '/program' },
    { label: 'SPONSOR', href: '/sponsor' },
    { label: 'FAQ', href: '/faq' },
    { label: 'OM OSS', href: '/about' }
]

export default function HeaderDesktop() {
    const pathname = usePathname()
    return (
        <header className='my-4 hidden w-full py-4 text-lg lg:block'>
            <div className='flex w-full items-center justify-end text-black'>
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`h-full w-1/5 text-center text-lg decoration-2 hover:underline ${
                            pathname === link.href ? 'underline' : ''
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </header>
    )
}
