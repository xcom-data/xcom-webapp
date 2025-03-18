'use client'
import Image from 'next/image'
import Link from 'next/link'
import img from '@/assets/img/xcom_logo_black_2025.png'
import HeaderMobile from './headerMobile'
import HeaderDesktop from './headerDesktop'

export default function NavBar() {
    return (
        <header className='container mx-auto md:mt-4 flex w-full justify-between items-center'>
            <Link href='/' className='w-1/3 pl-4 text-center'>
                <Image src={img} alt='logo' width={250} height={150} />
            </Link>
            <HeaderDesktop />
            <HeaderMobile />
        </header>
    )
}
