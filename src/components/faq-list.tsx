import React from "react"
import { FAQ } from "@/lib/definitions"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import FAQSkeleton from "./skeletons/faq-skeleton"
import { useEffect, useState } from 'react'

export default function FAQList({ faqs }: { faqs: FAQ[] }) {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <FAQSkeleton/>
    return (
        <Accordion type='single' collapsible>
            <AccordionItem value="default">
                <AccordionTrigger> Hvor kan jeg finne mer informasjon om ekskursjonen? </AccordionTrigger>
                <AccordionContent> Det kommer til å legges ut informasjon i <a href="https://www.facebook.com/groups/1743710552786423" className="text-blue-500">facebook-gruppen</a>, og på klasse-slacken. I tillegg så kommer det til å være en oversikt over programmet her på siden . </AccordionContent>
            </AccordionItem>
                {faqs.map((faq: FAQ) => (
                        <AccordionItem value={faq.id} key={faq.id}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
            </Accordion>
    )
    };