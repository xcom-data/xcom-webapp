'use client'

import * as React from 'react'
import { Clock } from 'lucide-react'
import { TimePickerInput } from './time-picker-input'

interface TimePickerProps {
    time: string
    setTime: (time: string) => void
}

export function TimePicker({ time, setTime }: TimePickerProps) {
    const minuteRef = React.useRef<HTMLInputElement>(null)
    const hourRef = React.useRef<HTMLInputElement>(null)

    const [hours, minutes] = time ? time.split(':') : ['00', '00']

    const date = React.useMemo(() => {
        const tempDate = new Date()
        tempDate.setHours(Number(hours), Number(minutes), 0)
        return tempDate
    }, [hours, minutes])

    const handleTimeChange = (picker: 'hours' | 'minutes', newDate: Date) => {
        const newHours = String(newDate.getHours()).padStart(2, '0')
        const newMinutes = String(newDate.getMinutes()).padStart(2, '0')
        setTime(`${newHours}:${newMinutes}`)
    }

    return (
        <div className='flex items-end gap-2'>
            <TimePickerInput
                picker='hours'
                date={date}
                setDate={newDate => handleTimeChange('hours', newDate!)}
                ref={hourRef}
                onRightFocus={() => minuteRef.current?.focus()}
            />
            <TimePickerInput
                picker='minutes'
                date={date}
                setDate={newDate => handleTimeChange('minutes', newDate!)}
                ref={minuteRef}
                onLeftFocus={() => hourRef.current?.focus()}
            />
            <div className='flex h-10 items-center'>
                <Clock className='ml-2 h-4 w-4' />
            </div>
        </div>
    )
}
