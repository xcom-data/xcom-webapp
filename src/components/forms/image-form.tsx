'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { CloudUpload, Paperclip } from 'lucide-react'
import {
    FileInput,
    FileUploader,
    FileUploaderContent,
    FileUploaderItem
} from '@/components/ui/file-upload'
import * as z from 'zod'
import { supabase } from '@/lib/initSupabase'

const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp'
]

const formSchema = z.object({
    image: z
        .any()
        .refine(
            file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            'Only .jpg, .jpeg, .png and .webp formats are supported.'
        )
})

export default function ImageForm() {
    const [files, setFiles] = useState<File[] | null>(null)

    const uploadImage = async (file: File) => {
        try {
            if (!file) throw new Error('You must select an image to upload.')

            const filePath = `profile-pictures/${Date.now()}-${file.name}`

            const { data, error } = await supabase.storage
                .from('xcomdata-webapp')
                .upload(filePath, file)

            if (error) throw error

            return data.path
        } catch (error) {
            console.error('Upload error:', error)
            toast.error('Failed to upload image.')
            return null
        }
    }

    const dropZoneConfig = {
        maxFiles: 1,
        maxSize: 1024 * 1024 * 4,
        multiple: false
    }
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log('image:', values.image)
            uploadImage(values.image)
            console.log(values)
        } catch (error) {
            console.error('Form submission error', error)
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='mx-auto max-w-3xl space-y-8 py-10'
            >
                <FormField
                    control={form.control}
                    name='image'
                    render={() => (
                        <FormItem>
                            <FormLabel>Select File</FormLabel>
                            <FormControl>
                                <FileUploader
                                    value={files}
                                    onValueChange={files => {
                                        setFiles(files)
                                        form.setValue('image', files?.[0])
                                    }}
                                    dropzoneOptions={dropZoneConfig}
                                    className='relative rounded-lg bg-background p-2'
                                >
                                    <FileInput
                                        id='fileInput'
                                        className='outline-dashed outline-1 outline-slate-500'
                                    >
                                        <div className='flex w-full flex-col items-center justify-center p-8'>
                                            <CloudUpload className='h-10 w-10 text-gray-500' />
                                            <p className='mb-1 text-sm text-gray-500 dark:text-gray-400'>
                                                <span className='font-semibold'>
                                                    Click to upload
                                                </span>
                                                &nbsp; or drag and drop
                                            </p>
                                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                                SVG, PNG, JPG or GIF
                                            </p>
                                        </div>
                                    </FileInput>
                                    <FileUploaderContent>
                                        {files &&
                                            files.length > 0 &&
                                            files.map((file, i) => (
                                                <FileUploaderItem
                                                    key={i}
                                                    index={i}
                                                >
                                                    <Paperclip className='h-4 w-4 stroke-current' />
                                                    <span>{file.name}</span>
                                                </FileUploaderItem>
                                            ))}
                                    </FileUploaderContent>
                                </FileUploader>
                            </FormControl>
                            <FormDescription>
                                Select a file to upload.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    )
}
