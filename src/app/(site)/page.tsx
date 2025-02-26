import Image from 'next/image'
import img from '@/assets/img/xcom_logo_black_2025.png'

export default function Home() {
    return (
        <main className='flex flex-col items-center'>
            <div className='mt-24 justify-center'>
                <Image src={img} alt='logo' className='-z-10'></Image>
            </div>
            <p className='-font mt-14 max-w-3xl text-center text-lg text-black'>
                Velkommen til XCOM Data 2025! XCOM Data 2025 er
                ekskursjonskomiteen for 3. klasse Datateknologi ved NTNU. Her
                finner du all informasjonen du trenger for XCOM 2025{' '}
            </p>
            <p className='m-auto mt-14 w-3/5 text-center text-3xl text-black'>
                {' '}
                PROGRAM KOMMER...{' '}
            </p>
        </main>
    )
}
