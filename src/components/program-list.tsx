import { ProgramEvent } from '@/lib/definitions'
import ProgramEventObject from './program-event'
import { useEffect, useState } from 'react'
import ProgramSkeleton from '@/components/skeletons/program-skeleton'

export default function ProgramList({
    programEvents
}: {
    programEvents: ProgramEvent[] | undefined
}) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    function findProgramDates() {
        const dates: string[] = []
        programEvents?.forEach((programEvent: ProgramEvent) => {
            if (!dates.includes(programEvent.date)) {
                dates.push(programEvent.date)
            }
        })
        return dates
    }

    if (!mounted) {
        return <ProgramSkeleton />
    }
    return (
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
    )
}
