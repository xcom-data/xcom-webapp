'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/svg'
]

const formSchema = z.object({
    sponsorName: z.string().min(2),
    sponsorDescription: z.string().min(8),
    sponsorImage: z
        .any()
        // To not allow empty file
        .refine(files => files?.length >= 1, { message: 'Image is required.' })
        // To not allow files other than images
        .refine(files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
            message: '.jpg, .jpeg, .png and .webp files are accepted.'
        })
        // To not allow files larger than 5MB
        .refine(files => files?.[0]?.size <= MAX_FILE_SIZE, {
            message: `Max file size is 5MB.`
        }),
    isMainSponsor: z.boolean()
})

export default function FormSponsor() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            sponsorName: '',
            sponsorDescription: '',
            sponsorImage: '',
            isMainSponsor: false
        }
    })

    const isMainSponsor = watch('isMainSponsor')

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <section>
            <h1> Add new Sponsor </h1>

            <form
                className='max-w-[800px] p-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Sponsor Name */}
                <label htmlFor='sponsorName'> Name </label>
                <Input id='sponsorName' {...register('sponsorName')} />
                {errors.sponsorName && <p>{errors.sponsorName.message}</p>}

                <div className='flex flex-row p-4'>
                    <h2 className='mr-2'> HovedSponsor </h2>
                    <Checkbox
                        id='isMainSponsor'
                        checked={isMainSponsor}
                        onCheckedChange={checked =>
                            setValue('isMainSponsor', checked === true)
                        }
                        className='my-auto'
                    />
                </div>

                <label htmlFor='sponsorDescription'> Description </label>
                <textarea
                    id='sponsorDescription'
                    {...register('sponsorDescription')}
                    className='h-32 w-full rounded-sm border border-slate-600 bg-slate-100'
                ></textarea>
                {errors.sponsorDescription && (
                    <p>{errors.sponsorDescription.message}</p>
                )}

                <label htmlFor='sponsorImage'> Logo </label>
                <Input
                    id='sponsorImage'
                    type='file'
                    {...register('sponsorImage')}
                />
                {errors.sponsorImage && (
                    <p>{String(errors.sponsorImage.message)}</p>
                )}

                <Button className='my-2'> Add Sponsor </Button>
            </form>
        </section>
    )
}
