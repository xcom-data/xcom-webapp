'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import img from '@/assets/img/xcom_logo_black_2025.png'

const navLinks = [
    { label: 'SPONSOR', href: '/sponsor' },
    { label: 'FAQ', href: '/faq' },
    { label: 'OM OSS', href: '/about' }
]

export default function Header() {
    const pathname = usePathname()
    return (
        <header className='my-4 flex w-full py-4 text-lg'>
            <nav className='w-full'>
                <div className='flex w-full items-center'>
                    <Link href='/' className='w-1/3 pl-4 text-center'>
                        <Image src={img} alt='logo' width={250} height={150} />
                    </Link>
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
            </nav>
        </header>
    )
}
