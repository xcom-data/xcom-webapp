'use client'
/* eslint-disable react/jsx-key */
import { supabase } from '@/lib/initSupabase'
import { useQuery } from '@tanstack/react-query'
import ProgramList from '@/components/program-list'

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

    return (
        <main>
            <h1 className='my-4 text-4xl font-bold'>Program</h1>
            <hr className='my-4 border-t border-gray-300' />
            <h4 className='mb-8'>
                Under finner du programmet for ekskursjonen 2025, merk at det
                kan forekomme endringer underveis. Legg til i Google kalenderen din
                <a className='font-bold' href="https://calendar.google.com/calendar/u/0?cid=Y18xYzBmNWUwYjM5MDEyMjMxMGE5MTdkNmIxOTVhNWQ2YzBkODRhOTQ1NmExZjY5YTE4ODNkNzkzMTQ2MmYzYzlhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"> her.</a> 
            </h4>
            <ProgramList programEvents={programEvents} />
        </main>
    )
}
