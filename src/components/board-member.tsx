import Image, { StaticImageData } from 'next/image'

interface BoardMemberProps {
    url: StaticImageData;
    name: string;
    role: string;
    mail: string;
}

export default function BoardMember({ url, name, role, mail }: BoardMemberProps) {
    return (
        <div className="board-member pb-4 ">
            <Image src={url} alt={`${name}'s profile`} width={200} height={200} className="rounded-full" />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{role}</p>
            <p className="text-gray-600">{mail}</p>

        </div>
    );
}

