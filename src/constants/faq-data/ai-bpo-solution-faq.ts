import { TFaqItem, TFaqSection } from '@/types/faq';

export const aiBpoSolutionFaq: TFaqItem[] = [
  {
    value: 'item-1',
    title:
      'What are AI BPO Solutions, and how are they different from traditional BPO?',
    content: [
      'AI BPO Solutions combine chatbot/voice AI, intelligent workflows, and human agents to deliver faster, more accurate, and cost-effective outsourcing compared with manual-only models.',
    ],
  },
  {
    value: 'item-2',
    title: 'How do AI Call Center Solutions improve customer experience?',
    content: [
      'AI call centers use intelligent IVR and voice assistants to route queries, deflect routine calls, and surface context to agents for faster, higher-quality resolutions.',
    ],
  },
  {
    value: 'item-3',
    title: 'Can AI BPO Solutions provide multilingual customer support?',
    content: [
      'Yes, AI-assisted helpdesks and chatbots support multilingual interactions, automated ticketing, and knowledge-base routing for 24/7 global coverage.',
    ],
  },
  {
    value: 'item-4',
    title: 'Which back-office processes can AI BPO automate?',
    content: [
      'Commonly automated tasks include data entry, billing, payroll processing, document handling, and reconciliation workflows to reduce errors and cycle times.',
    ],
  },
  {
    value: 'item-5',
    title: 'How does AI lead generation & sales support work within AI BPO?',
    content: [
      'AI leads systems score and qualify leads, run nurturing sequences, and hand off sales-ready prospects to reps, shortening cycles and improving conversion rates.',
    ],
  },
];

export const aiBpoSolutionFaqSectionData: TFaqSection = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Trust Global and its features.',
  items: aiBpoSolutionFaq,
};
