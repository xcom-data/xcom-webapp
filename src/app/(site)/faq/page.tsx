import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

export default function FAQ() {
    const FAQs = [
        {
            question: 'Spørsmål 1',
            answer: 'Svar 1'
        },
        {
            question: 'Spørsmål 2',
            answer: 'Svar 2'
        }
    ]

    return (
        <main>
            <h1 className='mb-4 text-4xl font-bold'> Ofte Stilte Spørsmål </h1>
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
