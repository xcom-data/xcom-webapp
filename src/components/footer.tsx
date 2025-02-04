import Image from 'next/image'
import React from 'react'
import img from '@/assets/img/xcom_logo_black_2025.png'

export default function Footer() {
    return (
        <footer className='mx-auto my-4 mt-auto flex w-full flex-row items-center justify-center gap-x-8 px-7 py-4 text-center text-sm'>
            <Image src={img} alt='logo' width={100} height={50} />
            <p>
                {' '}
                Kontakt <a href='web@xcomdata.no'> web@xcomdata.no </a> om du
                opplever problemer med siden{' '}
            </p>
        </footer>
    )
}
