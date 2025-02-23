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
            
                <p className='text-center m-auto  mt-14 w-3/5 text-lg text-black'>
                <a className='font-bold' href='https://www.facebook.com/groups/1743710552786423'>Trykk her for å bli tatt med til facebook gruppen. </a>

                Her vil det komme ekstra informasjon om ekskursjonen.
            </p>

            <p className='text-center m-auto  mt-14 w-3/5 text-lg text-black'>
                <a className='font-bold' href='https://join.slack.com/t/datateknologi2027/shared_invite/zt-30lhj07u9-lzaVms85Xwhh~bNlouf~cw'>For å få tilgang til slack-kanalen til klassen, trykk her. </a>
            </p>
        </main>
    )
}
