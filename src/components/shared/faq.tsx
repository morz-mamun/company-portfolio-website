import SectionHeading from './section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import BorderXPattern from './border-x-pattern';
import { TFaqSection } from '@/types/faq';
export default function FAQ({ data }: { data: TFaqSection }) {
  const { title, description, items } = data;

  return (
    <section className="relative mx-auto max-w-7xl border">
      <div className="relative mx-4 max-w-4xl border-x px-2 py-14 md:mx-10 md:px-10 lg:mx-auto">
        <SectionHeading title={title} description={description} />
        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="mt-12 w-full"
          defaultValue="item-1"
        >
          {items?.map(({ value, title, content }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger
                className={`font-inter cursor-pointer rounded-none border-b px-3`}
              >
                {title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 border-b bg-[#F5F5F5] p-3 dark:bg-gradient-to-b dark:from-[#00163C] dark:to-[#000EAC]">
                {content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* border x design */}
        <BorderXPattern className="-left-4 w-4 md:-left-10 md:w-10 lg:-left-48 lg:w-48" />
        <BorderXPattern className="-right-4 w-4 md:-right-10 md:w-10 lg:-right-48 lg:w-48" />
      </div>
    </section>
  );
}
