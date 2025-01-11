import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = ({ data }) => {
  const qa = data.props;

  return (
    <div className="px-8 mx-auto">
      <h1 className="font-semibold text-sm md:text-2xl-base md:text-2xl">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        {qa.map((e) => (
          <AccordionItem key={e.id} value={e.id}>
            <AccordionTrigger>{e.question}</AccordionTrigger>
            <AccordionContent>
              {e.answer ? e.answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQ
