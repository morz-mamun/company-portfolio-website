import { accordionItems } from '@/constants/faq-data';
import SectionHeading from '../shared/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function FAQ() {
  return (
    <section className="relative mx-auto my-20 max-w-7xl border-y">
      <div className="relative mx-auto max-w-4xl border-x px-10 py-5">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Answers to common questions about Trust Global and its features."
        />
        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="mt-12 w-full"
          defaultValue="item-1"
        >
          {accordionItems?.map(({ value, title, content }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="rounded-none border-b px-3">
                {title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 p-3 text-balance">
                {content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* border x design */}
        <div className="text-primary/5 absolute top-0 -left-4 h-full w-4 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-[size:10px_10px] md:-left-44 md:w-44"></div>
        <div className="text-primary/5 absolute top-0 -right-4 h-full w-4 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-[size:10px_10px] md:-right-44 md:w-44"></div>
      </div>
    </section>
  );
}
