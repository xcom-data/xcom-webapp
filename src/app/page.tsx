import Image from 'next/image'
import img from '@/assets/img/bologna.jpg'

export default function Home() {
  return (
      <main className=''>
        <Image src={img} alt='bologna' fill={true} className="-z-10"></Image>
        <div className='w-3/5 m-auto text-center'>
        <p className='text-4xl font'> PROGRAM KOMMER... </p>
        </div>
        
      </main>
  
  );
}