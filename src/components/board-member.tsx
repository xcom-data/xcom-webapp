import Image, { StaticImageData } from 'next/image'

interface BoardMemberProps {
    url: StaticImageData
    name: string
    role: string
    mail: string
}

export default function BoardMember({
    url,
    name,
    role,
    mail
}: BoardMemberProps) {
    return (
        <div className='w-1/2 md:w-1/3 sm:px-4 pb-4 text-center'>
            <Image 
                src={url}
                alt={`${name}'s profile`}
                width={200}
                height={100}
                className='rounded-full mx-auto w-1/2 md:w-48'
            />
            <h2 className='sm:text-xl text-sm font-semibold'>{name}</h2>
            <p className='sm:text-xl text-sm text-gray-600'>{role}</p>
            <p className='sm:text-xl text-sm text-gray-600 break-words'>{mail}</p>
        </div>
    )
}
