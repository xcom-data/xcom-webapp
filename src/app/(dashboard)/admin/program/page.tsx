'use client'
import React from 'react'
import { supabase } from '@/lib/initSupabase'
import { ProgramEvent } from '@/lib/definitions'
import { useQuery } from '@tanstack/react-query'
import ProgramEventDashBoard from '@/components/program-event-dashboard'
import ProgramFormDialog from '@/components/forms/program-form-dialog'

const fetchProgram = async () => {
    const { data } = await supabase
        .from('Program-event')
        .select('*')
        .order('date', { ascending: true })
    return data ?? []
}

export default function DashboardProgram() {
    const { data: programEvents, refetch } = useQuery({
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

    supabase
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'Program-event'
            },
            () => {
                refetch()
            }
        )
        .subscribe()

    return (
        <section className='mx-auto max-w-3xl space-y-8 py-10'>
            <div className='flex flex-row justify-between'>
                <h1 className='mb-4 text-left text-2xl font-semibold'>
                    Program
                </h1>
                <ProgramFormDialog />
            </div>
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
                                    <ProgramEventDashBoard
                                        key={event.id}
                                        programEvent={event}
                                    />
                                ))}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
