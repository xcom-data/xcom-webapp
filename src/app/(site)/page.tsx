import Image from 'next/image'
import img from '@/assets/img/xcom_logo_black_2025.png'
import Countdown from '@/components/countdown'

const EKSKURSJON_DATO = new Date('2025-04-05T22:00:00')

export default function Home() {
    return (
        <main className='flex flex-col items-center'>
            <div className='mt-16 justify-center pb-8'>
                <Image src={img} alt='logo' className='-z-10'></Image>
            </div>

            <p className='max-w-3xl py-4 text-center text-lg text-black'>
                Velkommen til XCOM Data 2025! XCOM Data 2025 er
                ekskursjonskomiteen for 3. klasse Datateknologi ved NTNU. Her
                finner du informasjon for XCOM 2025
            </p>
            <Countdown targetDate={EKSKURSJON_DATO} />
        </main>
    )
}
