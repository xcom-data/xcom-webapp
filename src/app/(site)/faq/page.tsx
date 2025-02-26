/* eslint-disable react/jsx-key */
'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import { FAQ } from '@/lib/definitions'

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
            <h1 className='mb-4 text-4xl font-bold'> Ofte Stilte Spørsmål </h1>
            <hr className='my-4 border-t border-gray-300' />
            <Accordion type='single' collapsible>
                {faqs &&
                    faqs.map((faq: FAQ) => (
                        <AccordionItem value={faq.id} key={faq.id}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
            </Accordion>
        </main>
    )
}
