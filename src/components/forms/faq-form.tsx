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
import { Textarea } from '@/components/ui/textarea'
import { createFAQ } from '@/actions/createFAQ'

const formSchema = z.object({
    question: z.string().min(2),
    answer: z.string().min(10)
})

export default function FAQForm({ onSave }: { onSave: () => void }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: '',
            answer: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            onSave()
            const formData = new FormData()
            formData.append('question', values.question)
            formData.append('answer', values.answer)
            createFAQ(formData)
            toast('Spørsmålet er lagt til')
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
                                    name='question'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Spørsmål</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='spørsmål'
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
                            name='answer'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Svar</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder='Svar'
                                            className='resize-none'
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type='submit'> Legg til Spørsmål </Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}
