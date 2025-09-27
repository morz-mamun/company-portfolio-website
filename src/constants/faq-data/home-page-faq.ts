import { TFaqItem, TFaqSection } from '@/types/faq';

export const homePageFaq: TFaqItem[] = [
  {
    value: 'item-1',
    title:
      'How can Trust Global Communications improve my business operations?',
    content: [
      'Trust Global Communications leverages AI automation, digital marketing, and technology solutions to streamline workflows, reduce manual tasks, and enhance productivity across your business.',
    ],
  },
  {
    value: 'item-2',
    title:
      'How quickly can I implement AI and automation solutions in my company?',
    content: [
      'Our team assesses your business processes and deploys tailored AI automation and multi-agent systems rapidly, ensuring minimal downtime while maximizing efficiency and ROI.',
    ],
  },
  {
    value: 'item-3',
    title: 'Are your services suitable for small and mid-sized businesses?',
    content: [
      'Yes! We design scalable solutions—from AI automation to e-commerce management and digital marketing that grow with your business, whether you are a startup or an established enterprise.',
    ],
  },
  {
    value: 'item-4',
    title:
      'How does Trust Global Communications help increase revenue and efficiency?',
    content: [
      'By integrating intelligent automation, data-driven marketing, and optimized workflows, we help businesses boost conversions, reduce operational costs, and improve overall performance.',
    ],
  },
  {
    value: 'item-5',
    title:
      'What makes Trust Global Communications’ solutions different from other providers?',
    content: [
      'We combine AI-powered tools, expert strategies, and seamless integration across platforms.',
      'Our focus is on delivering measurable results, future-ready innovations, and end-to-end support for your business growth.',
    ],
  },
];

export const homePageFaqSectionData: TFaqSection = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Trust Global and its features.',
  items: homePageFaq,
};
