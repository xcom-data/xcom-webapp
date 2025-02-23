import Image from 'next/image'
import img from '@/assets/img/xcom_logo_black_2025.png'

export default function Home() {
    return (
        <main className=' flex items-center flex-col'>
            <div className='justify-center mt-24'>
                <Image src={img} alt='logo' className='-z-10'></Image>
            </div>
            <p className='text-center max-w-3xl -font  mt-14 text-lg text-black'>
                Velkommen til XCOM Data 2025! XCOM Data 2025 er
                ekskursjonskomiteen for 3. klasse Datateknologi ved NTNU. Her
                finner du all informasjonen du trenger for XCOM 2025{' '}
            </p>
            <p className='text-center m-auto  mt-14 w-3/5 text-3xl text-black'>
                {' '}
                PROGRAM KOMMER...{' '}
            </p>
        </main>
    )
}
