export interface Service {
  id: string;
  name: string;
  link: string;
  color: string;
  position: string;
  subServices: string[];
}

export const exploreServices: Service[] = [
  {
    id: 'Automation & AI Multi-Agent Systems',
    name: 'Automation & AI Multi-Agent Systems',
    link: '/automation-ai-multi-agent-systems',
    color: 'bg-teal-500',
    position: 'top-5 md:top-10 left-1/2 -translate-x-1/2',
    subServices: [
      'AI Multi-Agent System Development',
      'Workflow Automation (n8n, Zapier, Custom APIs)',
      'Intelligent Process Automation (IPA)',
      'AI-Powered Data Processing & Reporting',
      'Voice & Chatbot Assistants',
    ],
  },
  {
    id: 'Digital Marketing & SEO',
    name: 'Digital Marketing & SEO',
    link: '/digital-marketing-seo',
    color: 'bg-pink-500',
    position: 'top-1/4 lg:left-1/7 md:left-10 left-1 -translate-y-1/2',
    subServices: [
      'AI-Powered SEO (On-Page, Off-Page, Technical)',
      'Paid Ad Campaigns (Google, Meta, LinkedIn)',
      'Content Marketing & Copywriting',
      'Marketing Funnel Automation',
      'Social Media Growth & Branding',
      'Email Marketing & Lead Nurturing',
    ],
  },
  {
    id: 'web-development',
    name: 'Web & Software Development',
    link: '/web-software-development',
    color: 'bg-green-500',
    position: 'top-1/4 lg:right-1/10 md:right-10 right-1 -translate-y-1/2',
    subServices: [
      'Custom Web Development',
      'Mobile App Development',
      'Enterprise Software & SaaS Solutions',
      'Software Architecture & Scalability',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Affiliate Services',
    link: '/e-commerce-affiliate-service',
    color: 'bg-blue-500',
    position:
      'bottom-7/20 md:bottom-2/5 m:bottom-1/3 lg:left-16 left-1 md:left-5',
    subServices: [
      'Online Store Development',
      'Payment Gateway Integration',
      'Affiliate Program Setup',
      'Inventory Management',
      'Order Processing Systems',
    ],
  },
  {
    id: 'iot-security',
    name: 'IoT & Smart Security Solutions',
    link: '/iot-smart-security-solutions',
    color: 'bg-purple-500',
    position: 'bottom-7/20 md:bottom-2/5 lg:right-16 right-1 md:right-5',
    subServices: [
      'Smart Home Systems',
      'Security Camera Setup',
      'IoT Device Integration',
      'Network Security',
      'Access Control Systems',
    ],
  },
  {
    id: 'saas-tools',
    name: 'SAAS & Affiliate tools',
    link: '/saas-affiliate-tools',
    color: 'bg-teal-400',
    position: 'bottom-20 md:bottom-28 left-1/2 -translate-x-1/2',
    subServices: [
      'SaaS Platform Development',
      'Subscription Management',
      'Analytics Dashboard',
      'User Management Systems',
      'API Development',
    ],
  },
];
