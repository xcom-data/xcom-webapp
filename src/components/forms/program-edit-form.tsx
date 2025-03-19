'use client'
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
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Calendar as CalendarIcon } from 'lucide-react'
import { TimePicker } from '../ui/time-picker'
import { editEvent } from '@/actions/editEvent'
import { ProgramEvent } from '@/lib/definitions'

const formSchema = z
    .object({
        eventName: z.string().min(1, 'Navn er påkrevd'),
        place: z.string().min(1, 'Sted er påkrevd'),
        description: z.string().min(1, 'Beskrivelse er påkrevd'),
        date: z
            .string()
            .regex(/^\d{4}-\d{2}-\d{2}$/, 'Ugyldig dato (YYYY-MM-DD)')
            .refine(
                date =>
                    new Date(date) >=
                    new Date(new Date().toISOString().split('T')[0]),
                {
                    message: 'Dato kan ikke være i fortiden'
                }
            ),
        startTime: z.string().regex(/^\d{2}:\d{2}$/, 'Ugyldig tid (hh:mm)'),
        endTime: z.string().regex(/^\d{2}:\d{2}$/, 'Ugyldig tid (hh:mm)')
    })
    .refine(
        data => {
            const { startTime, endTime } = data
            return startTime <= endTime
        },
        {
            message: 'Sluttidspunkt kan ikke være før starttidspunkt',
            path: ['endTime']
        }
    )

export default function ProgramEditForm({
    onSave,
    programEvent
}: {
    onSave: () => void
    programEvent: ProgramEvent
}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventName: programEvent.name,
            place: programEvent.place,
            description: programEvent.description,
            date: programEvent.date,
            startTime: programEvent.startTime,
            endTime: programEvent.endTime
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            onSave()
            const formData = new FormData()
            formData.append('name', values.eventName)
            formData.append('place', values.place)
            formData.append('description', values.description)
            formData.append('startTime', values.startTime)
            formData.append('endTime', values.endTime)
            formData.append('date', values.date.toString())
            editEvent(programEvent.id, formData)
            toast('Aktivitet redigert')
        } catch (error) {
            console.error('Form submission error', error)
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <section>
            <div className='mx-auto max-w-3xl py-10'>
                <h1 className='my-auto text-4xl'> Rediger Program </h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='mx-auto max-w-3xl space-y-4 py-10'
                    >
                        <FormField
                            control={form.control}
                            name='eventName'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Navn på aktivitet</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder=''
                                            type='text'
                                            {...field}
                                        />
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
                                        <Input
                                            placeholder=''
                                            type=''
                                            {...field}
                                        />
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
                                        <Textarea
                                            placeholder=''
                                            className='h-28 resize-none'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='mx-auto flex w-full flex-col justify-between space-y-2 pb-4 md:flex-row'>
                            <FormField
                                control={form.control}
                                name='startTime'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Start </FormLabel>
                                        <FormControl>
                                            <TimePicker
                                                time={field.value}
                                                setTime={field.onChange}
                                            ></TimePicker>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='endTime'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Slutt</FormLabel>
                                        <FormControl>
                                            <TimePicker
                                                time={field.value}
                                                setTime={field.onChange}
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
                                    <FormItem className='flex flex-col space-y-4 pt-1'>
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
                                                            format(
                                                                field.value,
                                                                'PPP'
                                                            )
                                                        ) : (
                                                            <span>Dato: </span>
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
                                                    selected={
                                                        field.value
                                                            ? new Date(
                                                                  field.value
                                                              )
                                                            : undefined
                                                    }
                                                    onSelect={date =>
                                                        field.onChange(
                                                            date
                                                                ? format(
                                                                      date,
                                                                      'yyyy-MM-dd'
                                                                  )
                                                                : ''
                                                        )
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type='submit'>Legg til</Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}
