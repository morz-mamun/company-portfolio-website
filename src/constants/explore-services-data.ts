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
    position:
      'bottom-9/17 md:bottom-3/9 lg:left-1/10 md:left-10 left-3 -translate-y-1/2',
    subServices: [
      'AI-Powered SEO',
      'Paid Ad Campaigns',
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
    position: 'top-1/4 lg:right-1/10 md:right-10 right-3 -translate-y-1/2',
    subServices: [
      'Custom Web Development',
      'Mobile App Development',
      'Enterprise Software & SaaS Solutions',
      'Software Architecture & Scalability',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Management Services',
    link: '/e-commerce-affiliate-service',
    color: 'bg-blue-500',
    position: 'bottom-7/20 md:bottom-7/13 lg:left-0 left-1 md:left-5',
    subServices: [
      'E-commerce Website development',
      'Marketplace Store Development',
      'Amazon, Walmart, Etsy, eBay, & Shopify Optimization',
      'Affiliate Network Setup & Management',
      'AI-Powered Product Recommendation Systems',
      'Automated Order & Inventory Management',
    ],
  },
  {
    id: 'iot-security',
    name: 'IoT & Smart Security Solutions',
    link: '/iot-smart-security-solutions',
    color: 'bg-purple-500',
    position: 'bottom-7/20 md:bottom-7/13 lg:right-0 right-8 md:right-5',
    subServices: [
      'Smart Surveillance Systems',
      'IoT Device Integration & Automation',
      'Access Control & Biometric Security',
      'Cloud-Based Security Monitoring',
      'Risk Prevention & Cybersecurity',
    ],
  },
  {
    id: 'ai-bpo-solutions',
    name: 'AI BPO Solutions',
    link: '/ai-bpo-solutions',
    color: 'bg-yellow-500',
    position: 'bottom-12/21 md:bottom-3/9 lg:right-44 right-10 md:right-32',
    subServices: [
      'AI Call Center Solutions',
      'Technical Support',
      'Back Office Process Outsourcing',
      'Customer Support & Helpdesk Outsourcing',
      'VAI Lead Generation & Sales Support',
    ],
  },
  {
    id: 'emerging-ai-services',
    name: 'Emerging AI Services',
    link: '/emerging-ai-services',
    color: 'bg-indigo-500',
    position: 'top-1/4 md:bottom-3/9 lg:left-44 left-3 md:left-5',
    subServices: [
      'AI Multi-Agent System Development',
      ' AI for Finance, Healthcare & Education',
      'Predictive Analytics & Forecasting Models',
      'AI-Driven Personalization Engines',
      'R&D for Future AI Technologies',
    ],
  },
  {
    id: 'saas-tools',
    name: 'SaaS Products & Automation Tools',
    link: '/saas-automation-tools',
    color: 'bg-teal-400',
    position: 'bottom-20 md:bottom-28 left-1/2 -translate-x-1/2',
    subServices: [
      'SaaS Product Development',
      'Affiliate Marketing Automation Tools',
      'E-commerce Growth Strategy Tools',
      'AI Content Creation Platforms',
      'AI-Powered Marketing Funnel Optimizer',
      'Smart Review & Testimonial Collectors',
    ],
  },
];
