import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = ({ data }) => {
  const qa = data.props;
  console.log(qa);

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
              {e.answer}

              {e.points && (
                <ul className="list-disc pl-5">
                  {e.points.map((p, index) => (
                    <li key={`${e.id}-${index}`}>{p.pnt}</li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
