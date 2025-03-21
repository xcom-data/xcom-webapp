'use client'

import { useCountdown } from '@/hooks/useCountdown'
import DateTimeDisplay from './ui/date-time-display'
import CountdownSkeleton from './skeletons/countdown-skeleton'
import { useEffect, useState } from 'react'

export default function Countdown({ targetDate }: { targetDate: Date }) {
    const [mounted, setMounted] = useState(false)
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <CountdownSkeleton />

    return days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ? (
        <ExpiredTimer />
    ) : (
        <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    )
}

function ExpiredTimer() {
    return (
        <section className='m-4 p-4 text-center text-2xl'>
            <p>Ekskursjonen er underveis 🗺️ </p>
        </section>
    )
}

function Timer({
    days,
    hours,
    minutes,
    seconds
}: {
    days: number
    hours: number
    minutes: number
    seconds: number
}) {
    return (
        <section className='flex flex-col items-center p-4'>
            <p className='max-w-3xl text-center text-lg font-bold text-black'>
                Antall dager til ekskursjon:
            </p>
            <div className='mx-auto flex flex-row justify-evenly py-1'>
                <DateTimeDisplay
                    value={days}
                    type={'Dager'}
                    isDanger={days < 3}
                />
                <DateTimeDisplay
                    value={hours}
                    type={'Timer'}
                    isDanger={false}
                />
                <DateTimeDisplay
                    value={minutes}
                    type={'Minutter'}
                    isDanger={false}
                />
                <DateTimeDisplay
                    value={seconds}
                    type={'Sekunder'}
                    isDanger={false}
                />
            </div>
        </section>
    )
}
