'use client'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'

// import { CloudUpload, Paperclip } from 'lucide-react'
// import {
//     FileInput,
//     FileUploader,
//     FileUploaderContent,
//     FileUploaderItem
// } from '@/components/ui/file-upload'

const formSchema = z.object({
    sponsorName: z.string().min(2),
    isMainSponsor: z.boolean(),
    sponsorDescripton: z.string().min(10),
    sponsorImage: z.string().min(0)
})

export default function MyForm({ onSave }: { onSave: () => void }) {
    // const [files, setFiles] = useState<File[] | null>(null)

    // const dropZoneConfig = {
    //     maxFiles: 5,
    //     maxSize: 1024 * 1024 * 4,
    //     multiple: true
    // }
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            sponsorName: '',
            isMainSponsor: false,
            sponsorDescripton: '',
            sponsorImage: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values)
            onSave()
            toast(
                <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>
                        {JSON.stringify(values, null, 2)}
                    </code>
                </pre>
            )
        } catch (error) {
            console.error('Form submission error', error)
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <section>
            <div className='mx-auto max-w-3xl space-y-8 py-10'>
                <h1 className='my-auto text-4xl'> Legg til Sponsor </h1>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8'
                    >
                        <div className='grid-cols-full grid gap-4'>
                            <div className='col-span-4'>
                                <FormField
                                    control={form.control}
                                    name='sponsorName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Sponsornavn</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='sponsornavn'
                                                    type='text'
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name='isMainSponsor'
                            render={({ field }) => (
                                <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className='space-y-1 leading-none'>
                                        <FormLabel>Hovedsponsor?</FormLabel>

                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='sponsorDescripton'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sponsorbeskrivelse</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder='sponsorbeskrivelse'
                                            className='resize-none'
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* <FormField
              control={form.control}
              name="sponsorImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sponsorbilde</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className='text-gray-500 w-10 h-10' />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  <FormDescription>Select a file to upload.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
                        <Button type='submit'> Legg til Sponsor </Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}
