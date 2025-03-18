/* eslint-disable react/jsx-key */
'use client'
import FAQList from '@/components/faq-list'
import { supabase } from '@/lib/initSupabase'
import { useQuery } from '@tanstack/react-query'


const fetchFAQs = async () => {
    const { data } = await supabase
        .from('FAQ')
        .select('*')
        .order('question', { ascending: true })
    return data ?? []
}

export default function FAQPage() {
    const { data: faqs } = useQuery({
        queryKey: ['faqs'],
        queryFn: fetchFAQs
    })

    return (
        <main>
            <h1 className='my-4 text-4xl font-bold'> Ofte Stilte Spørsmål </h1>
            <hr className='my-4 border-t border-gray-300' />
            <FAQList faqs={faqs ?? []} />
        </main>
    )
}
