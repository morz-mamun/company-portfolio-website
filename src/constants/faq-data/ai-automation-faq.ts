import { TFaqItem, TFaqSection } from '@/types/faq';

export const aiAutomationFaq: TFaqItem[] = [
  {
    value: 'item-1',
    title:
      'What are AI multi-agent systems, and how do they improve business automation?',
    content: [
      'AI multi-agent systems use multiple intelligent agents that work together to automate workflows, analyze data, and make decisions in real time.',
      'For businesses, this means faster task execution, reduced errors, and improved scalability across departments.',
    ],
  },
  {
    value: 'item-2',
    title: 'How can AI automation reduce operational costs for my company?',
    content: [
      'AI automation eliminates repetitive manual tasks such as data entry, reporting, and system monitoring.',
      'By deploying intelligent workflows, businesses can lower labor costs, minimize errors, and optimize resources, resulting in significant long-term savings.',
    ],
  },
  {
    value: 'item-3',
    title:
      'Which business processes can benefit most from AI-powered automation?',
    content: [
      'AI automation and multi-agent systems are ideal for processes like customer service, lead generation, back-office operations, predictive analytics, and workflow management.',
      'They integrate with tools like Zapier, APIs, and enterprise platforms to streamline entire operations.',
    ],
  },
  {
    value: 'item-4',
    title:
      'What is the difference between traditional automation and AI multi-agent systems?',
    content: [
      'Traditional automation follows predefined rules, while AI multi-agent systems are adaptive, collaborative, and capable of making decisions based on real-time data.',
      'This makes AI-driven automation more intelligent, flexible, and scalable for modern enterprises.',
    ],
  },
  {
    value: 'item-5',
    title: ' How does TGCX deliver AI automation solutions for businesses?',
    content: [
      'At TGCX, we design and deploy AI multi-agent systems that automate workflows, improve decision-making, and scale with your business.',
      'Our solutions integrate seamlessly with existing platforms, ensuring efficiency, reliability, and measurable ROI.',
    ],
  },
];

export const aiAutomationFaqSectionData: TFaqSection = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Automation Ai Multi-Agent Systems and its features.',
  items: aiAutomationFaq,
};
