import Image from 'next/image'
import img from '@/assets/img/bologna.jpg'

export default function Home() {
    return (
        <main className=''>
            <Image
                src={img}
                alt='bologna'
                fill={true}
                className='-z-10'
            ></Image>
            <div className='m-auto w-3/5 text-center'>
            </div>
        </main>
    )
}
