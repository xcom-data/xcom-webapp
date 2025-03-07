import Image, { StaticImageData } from 'next/image'

export default function SponsorInformation({
    sponsorName,
    sponsorText,
    sponsorImage
}: {
    sponsorName: string
    sponsorText: string
    sponsorImage: StaticImageData
}) {
    return (
        <section>
            <h2 className='text-lg font-semibold'>{sponsorName}</h2>
            <h4 className='my-4'>{sponsorText}</h4>
            <Image
                src={sponsorImage}
                className='m-auto mb-8 w-[60%]'
                alt='sponsor'
                height={100}
            ></Image>

            <hr className='my-4 border-t border-gray-300' />
        </section>
    )
}
