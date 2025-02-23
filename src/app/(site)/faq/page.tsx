import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

export default function FAQ() {
    const FAQs = [
        {
            question: 'Hvor skal vi på ekskursjon?',
            answer: 'Den faglige delen går til Bologna og Padova, mens den sosiale vil være i Hellas'
        },
        {
            question: 'Hva skal vi gjøre på ekskursjon?',
            answer: 'Ha det hyggelig og gøy, og få faglig påfyll:)'
        }
    ]

    return (
        <main>
            <h1 className='my-4 text-4xl font-bold'> Ofte Stilte Spørsmål </h1>
            <hr className='my-4 border-t border-gray-300' />
            <Accordion type='single' collapsible>
                {FAQs.map((FAQ, index) => (
                    <AccordionItem value={index.toString()} key={index}>
                        <AccordionTrigger>{FAQ.question}</AccordionTrigger>
                        <AccordionContent>{FAQ.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </main>
    )
}
