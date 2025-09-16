import { TFaqItem, TFaqSection } from '@/types/faq';

export const emergingAiServicesFaq: TFaqItem[] = [
  {
    value: 'item-1',
    title:
      'What are Emerging AI Services and why should companies invest in them?',
    content: [
      'Emerging AI Services include generative AI, personalization engines, and predictive analytics that unlock new product features, automation, and competitive differentiation.',
    ],
  },
  {
    value: 'item-2',
    title:
      'What can Generative AI Solutions (text, image, video, audio) be used for?',
    content: [
      'Generative AI automates content production for blogs, ads, video creatives, and synthetic audio, speeding go-to-market while enabling A/B testing at scale.',
    ],
  },
  {
    value: 'item-3',
    title: 'How does AI for Finance, Healthcare & Education deliver value?',
    content: [
      'Industry AI solutions automate risk assessment in finance, assist diagnostics in healthcare, and power adaptive learning in education to improve outcomes and efficiency.',
    ],
  },
  {
    value: 'item-4',
    title:
      'What benefits do Predictive Analytics & Forecasting Models provide?',
    content: [
      'Predictive models forecast demand, churn, and customer behavior, enabling data-driven planning, inventory optimization, and smarter marketing investments.',
    ],
  },
  {
    value: 'item-5',
    title: 'What kind of R&D and future AI tech do you support?',
    content: [
      'We explore multi-modal AI, Web3 + AI integrations, neuro-marketing prototypes, and ethical AI frameworks to future-proof products and maintain compliance.',
    ],
  },
];

export const emergingAiServicesFaqSectionData: TFaqSection = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Emerging AI Services and its features.',
  items: emergingAiServicesFaq,
};
