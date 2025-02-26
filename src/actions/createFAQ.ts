'use server'

import { createClient } from '@/utils/supabase/server'

export async function createFAQ(formdata: FormData) {
    const supabase = await createClient()
    const faq = {
        question: formdata.get('question') as string,
        answer: formdata.get('answer') as string
    }

    const { data, error } = await supabase.from('FAQ').insert(faq)

    if (error) {
        console.error('error', error)
        return { error }
    }

    return { data }
}
