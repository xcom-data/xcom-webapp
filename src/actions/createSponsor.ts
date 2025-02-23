'use server'

import { createClient } from '@/utils/supabase/server'

export async function createSponsor(formdata: FormData) {
    const supabase = await createClient()
    const sponsor = {
        name: formdata.get('name') as string,
        isMainSponsor: formdata.get('isMainSponsor') as unknown as boolean,
        description: formdata.get('description') as string
    }

    const { data, error } = await supabase.from('Sponsors').insert(sponsor)

    if (error) {
        console.error('error', error)
        return { error }
    }

    return { data }
}
