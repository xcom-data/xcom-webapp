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
        <div className='w-1/2 pb-4 text-center sm:px-4 md:w-1/3 lg:w-1/4'>
            <Image
                src={url}
                alt={`${name}'s profile`}
                width={200}
                height={100}
                className='mx-auto w-1/2 rounded-full md:w-48'
            />
            <h2 className='text-sm font-semibold sm:text-xl'>{name}</h2>
            <p className='text-sm text-gray-600 sm:text-xl'>{role}</p>
            <p className='break-words text-sm text-gray-600 sm:text-xl'>
                {mail}
            </p>
        </div>
    )
}
