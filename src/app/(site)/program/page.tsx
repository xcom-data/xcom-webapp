'use client'
/* eslint-disable react/jsx-key */
import { supabase } from '@/lib/initSupabase'
import { useQuery } from '@tanstack/react-query'
import { ProgramEvent } from '@/lib/definitions'
import ProgramEventObject from '@/components/program-event'

const fetchProgram = async () => {
    const { data } = await supabase
        .from('Program-event')
        .select('*')
        .order('date', { ascending: true })
    return data ?? []
}

export default function ProgramPage() {
    const { data: programEvents } = useQuery({
        queryKey: ['programEvents'],
        queryFn: fetchProgram
    })

    function findProgramDates() {
        const dates: string[] = []
        programEvents?.forEach((programEvent: ProgramEvent) => {
            if (!dates.includes(programEvent.date)) {
                dates.push(programEvent.date)
            }
        })
        return dates
    }

    return (
        <main>
            <h1 className='mb-4 text-4xl font-bold'>Program</h1>
            <h4 className='mb-8'>
                Under finner du programmet for ekskursjonen 2025, merk at det
                kan forekomme endringer underveis.
            </h4>
            <div>
                {findProgramDates().map((date: string) => {
                    const dateObj = new Date(date)

                    let weekday = dateObj.toLocaleDateString('nb-NO', {
                        weekday: 'long'
                    })
                    const formattedDate = dateObj.toLocaleDateString('nb-NO', {
                        day: '2-digit',
                        month: '2-digit'
                    })
                    weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1)
                    const cleanedDate = formattedDate.replace(/\.$/, '')

                    return (
                        <div key={date} className='mb-6'>
                            <h4 className='mb-4 font-bold'>{`${weekday} ${cleanedDate}`}</h4>
                            {programEvents
                                ?.filter(
                                    (programEvent: ProgramEvent) =>
                                        programEvent.date === date
                                )
                                .sort(
                                    (
                                        program1: ProgramEvent,
                                        program2: ProgramEvent
                                    ) =>
                                        program1.startTime.localeCompare(
                                            program2.startTime
                                        )
                                )
                                .map((event: ProgramEvent) => (
                                    <ProgramEventObject
                                        key={event.id}
                                        programEvent={event}
                                    />
                                ))}
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
