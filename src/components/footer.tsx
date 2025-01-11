import Image from 'next/image';
import React from 'react';
import img from '@/assets/img/xcom_logo_black_2025.png';

export default function Footer() {
    return (
        <footer className="justify-center gap-x-8 mx-auto my-4 flex flex-row  items-center text-center px-7  text-sm py-4 mt-auto w-full"
        >
                <Image src={img} alt="logo" width={100} height={50} />
                <p> Kontakt <a href='web@xcomdata.no'> web@xcomdata.no </a> om du opplever problemer med siden </p>
        </footer>
    );
}
