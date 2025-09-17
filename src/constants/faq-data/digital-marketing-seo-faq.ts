import { TFaqItem, TFaqSection } from '@/types/faq';

export const digitalMarketingSeoFaq: TFaqItem[] = [
  {
    value: 'item-1',
    title:
      'What are Digital Marketing & SEO services, and how do they drive growth?',
    content: [
      'Digital Marketing & SEO combines on-page, technical, and programmatic SEO with paid media and content strategies to increase visibility, traffic, and conversions.',
    ],
  },
  {
    value: 'item-2',
    title: 'How does AI-powered SEO help pages rank faster?',
    content: [
      'AI-powered SEO accelerates keyword clustering, content scaling (programmatic SEO), and technical audits to identify wins and automate repetitive optimization tasks.',
    ],
  },
  {
    value: 'item-3',
    title: 'Can you run Paid Ad Campaigns across Google, Meta, and LinkedIn?',
    content: [
      'Yes, we manage AI-optimized paid campaigns with predictive bidding, audience segmentation, and conversion tracking to lower CPC and maximize ROAS',
    ],
  },
  {
    value: 'item-4',
    title:
      'How do Content Marketing & Copywriting integrate with SEO and funnels??',
    content: [
      'We produce SEO-optimized blogs, long-form content, and email/social copy that feed the funnel, support programmatic SEO, and improve organic and paid conversions.',
    ],
  },
  {
    value: 'item-5',
    title: 'How do you measure ROI for Digital Marketing & SEO campaigns?',
    content: [
      'We track multi-channel analytics, attribution models, conversion rates, LTV/CAC, and use AI-driven insights to continuously optimize spend and performance.',
    ],
  },
];

export const digitalMarketingSeoFaqSectionData: TFaqSection = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Digital Marketing & SEO and its features.',
  items: digitalMarketingSeoFaq,
};
