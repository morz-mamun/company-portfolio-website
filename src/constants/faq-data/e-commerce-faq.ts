import { TFaqItem, TFaqSection } from '@/types/faq';

export const eCommerceFaq: TFaqItem[] = [
  {
    value: 'item-1',
    title: 'What do E-commerce Management Services cover?',
    content: [
      'E-commerce Management Services include store development, marketplace optimization (Amazon, Shopify, Walmart, eBay, Etsy), PPC, inventory automation, and growth strategy.',
    ],
  },
  {
    value: 'item-2',
    title:
      'How do you optimize product listings on Amazon, Shopify, and Walmart?',
    content: [
      'We use AI-driven product SEO, keyword targeting, A+ content, image optimization, and PPC management to improve discoverability and conversion rates.',
    ],
  },
  {
    value: 'item-3',
    title:
      'What are AI-Powered Product Recommendation Systems and their benefits?',
    content: [
      'AI recommendation systems analyze shopper behavior to deliver personalized upsell/cross-sell suggestions, increasing average order value and repeat purchases.',
    ],
  },
  {
    value: 'item-4',
    title:
      'Can you automate order and inventory management across multiple marketplaces?',
    content: [
      'Yes, we implement automated order routing, stock sync, and demand forecasting to prevent stockouts and overstock across channels.',
    ],
  },
  {
    value: 'item-5',
    title: 'Do you manage affiliate networks for e-commerce brands?',
    content: [
      'We set up and operate affiliate programs with tracking, automated payouts, and performance dashboards that scale partner-driven sales.',
    ],
  },
];

export const eCommerceFaqSectionData: TFaqSection = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Automation Ai Multi-Agent Systems and its features.',
  items: eCommerceFaq,
};
