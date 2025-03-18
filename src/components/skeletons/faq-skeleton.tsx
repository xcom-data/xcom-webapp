import { Skeleton } from "../ui/skeleton";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function FAQSkeleton() {
    return (
      <Accordion type='single' collapsible>
              <AccordionItem value="">
                  <AccordionTrigger> <Skeleton className="w-full h-5" /> </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="">
                  <AccordionTrigger> <Skeleton className="w-full h-5" /> </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="">
                  <AccordionTrigger> <Skeleton className="w-full h-5" /> </AccordionTrigger>
              </AccordionItem>
  </Accordion>
      )
    };