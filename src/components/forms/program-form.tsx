'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { cn } from '@/lib/utils'
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
import { format } from 'date-fns'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Calendar as CalendarIcon } from 'lucide-react'
import { TimePicker } from '../ui/time-picker'

const formSchema = z.object({
    name: z.string().min(1),
    place: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date()
})

export default function MyForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: new Date()
        }
    })

    const { startTime, setStartTime } = useState()
    const { endTime, setEndTime } = useState()

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values)
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
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='mx-auto max-w-3xl space-y-8 py-10'
            >
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Navn på aktivitet</FormLabel>
                            <FormControl>
                                <Input placeholder='' type='text' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='place'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sted</FormLabel>
                            <FormControl>
                                <Input placeholder='' type='' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Beskrivelse</FormLabel>
                            <FormControl>
                                <Input placeholder='' type='' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='place'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Start tidspunkt</FormLabel>
                            <FormControl>
                                <TimePicker
                                    date={startTime}
                                    setDate={setStartTime}
                                ></TimePicker>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='place'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slutt tidspunkt</FormLabel>
                            <FormControl>
                                <TimePicker
                                    date={undefined}
                                    setDate={function (
                                        date: Date | undefined
                                    ): void {
                                        throw new Error(
                                            'Function not implemented.'
                                        )
                                    }}
                                ></TimePicker>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='date'
                    render={({ field }) => (
                        <FormItem className='flex flex-col'>
                            <FormLabel>Dato</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                'w-[240px] pl-3 text-left font-normal',
                                                !field.value &&
                                                    'text-muted-foreground'
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, 'PPP')
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                    className='w-auto p-0'
                                    align='start'
                                >
                                    <Calendar
                                        mode='single'
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'>Legg til</Button>
            </form>
        </Form>
    )
}
