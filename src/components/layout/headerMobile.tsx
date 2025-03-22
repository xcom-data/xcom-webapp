import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import menu_img from '@/assets/img/menu.jpg'
import { useState } from 'react'

const links = [
    { name: 'Program', url: '/program' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Sponsor', url: '/sponsor' },
    { name: 'About', url: '/about' }
]


export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='lg:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <div className='mr-4 rounded-md p-2 opacity-70'>
                        <Image
                            src={menu_img}
                            alt='kult'
                            className='rounded-full'
                            width={40}
                            height={40}
                        />
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='text-2xl'>
                            Naviger til
                        </SheetTitle>
                    </SheetHeader>
                    <ul className='mt-8'>
                        {links.map(link => (
                            <SheetClose asChild key={link.url} >
                                <li
                                    key={link.url}
                                    className='flex h-[60px] items-center border-b text-left text-xl first:border-t'
                                >
                                    <Link href={link.url} className='w-full' onClick={()=>setIsOpen(false)}>
                                        {link.name}
                                    </Link>
                                </li>
                            </SheetClose>
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    )
}
