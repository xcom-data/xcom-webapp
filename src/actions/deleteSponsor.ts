'use server'

import { createClient } from '@/utils/supabase/server'

export async function deleteSponsor(id: string) {
    const supabase = await createClient()
    console.log('id', id)

    const { data, error } = await supabase
        .from('Sponsors')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('error', error)
        return { error }
    }

    return { data }
}
