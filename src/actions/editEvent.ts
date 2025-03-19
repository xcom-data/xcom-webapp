'use server'

import { createClient } from '@/utils/supabase/server'

export async function editEvent(id: string, formdata: FormData) {
    const supabase = await createClient()
    const event = {
        name: formdata.get('name') as string,
        place: formdata.get('place') as string,
        description: formdata.get('description') as string,
        startTime: formdata.get('startTime') as string,
        endTime: formdata.get('endTime') as string,
        date: formdata.get('date') as string
    }

    const { data, error } = await supabase
        .from('Program-event')
        .update(event)
        .eq('id', id)

    if (error) {
        console.error('error', error)
        return { error }
    }

    return { data }
}
