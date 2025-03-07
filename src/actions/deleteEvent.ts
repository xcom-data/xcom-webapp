'use server'

import { createClient } from '@/utils/supabase/server'

export async function deleteEvent(id: string) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('Program-event')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('error', error)

        return { error }
    }
    return { data }
}
