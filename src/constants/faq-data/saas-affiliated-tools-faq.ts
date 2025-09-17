import { TFaqItem, TFaqSection } from '@/types/faq';

export const saasAffiliatedToolsFaq: TFaqItem[] = [
  {
    value: 'item-1',
    title: 'What are SaaS Products & Automation Tools, and why build them?',
    content: [
      'SaaS Products & Automation Tools are cloud platforms and automation apps that reduce manual work, scale revenue models, and deliver recurring value via subscription and automation features.',
    ],
  },
  {
    value: 'item-2',
    title: 'What does SaaS Product Development include?',
    content: [
      'AI automation eliminates repetitive manual tasks such as data entry, reporting, and system monitoring.',
      'By deploying intelligent workflows, businesses can lower labor costs, minimize errors, and optimize resources, resulting in significant long-term savings.',
    ],
  },
  {
    value: 'item-3',
    title: 'How do Affiliate Marketing Automation Tools work?',
    content: [
      'Affiliate automation tools manage partner recruitment, track commissions, surface performance dashboards, and use AI fraud detection to scale affiliate programs safely.',
    ],
  },
  {
    value: 'item-4',
    title:
      'Can SaaS Products & Automation Tools generate marketing content and creatives?',
    content: [
      'Yes, AI Content Creation Platforms automate blog writing, ad copy, and creative generation to speed up production while preserving quality via human review.',
    ],
  },
  {
    value: 'item-5',
    title:
      'How does an AI-Powered Marketing Funnel Optimizer improve conversions?',
    content: [
      'The funnel optimizer runs AI split tests, personalizes user journeys based on behavior, and adjusts funnels in real time to increase conversion rates and LTV.',
    ],
  },
];

export const saasAffiliatedToolsFaqSectionData: TFaqSection = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Automation Ai Multi-Agent Systems and its features.',
  items: saasAffiliatedToolsFaq,
};
