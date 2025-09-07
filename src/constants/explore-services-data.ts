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
    id: 'ai-automation',
    name: 'AI Automation',
    link: '/ai-automation',
    color: 'bg-teal-500',
    position: 'top-5 md:top-10 left-1/2 -translate-x-1/2',
    subServices: [
      'AI Chatbots',
      'Workflow Automation',
      'Multi-Agent Orchestration',
      'Facility & Security Automation',
      'Predictive Analytics',
    ],
  },
  {
    id: 'seo-marketing',
    name: 'SEO & Digital Marketing',
    link: '/digital-marketing-seo',
    color: 'bg-pink-500',
    position: 'top-1/4 lg:left-1/7 md:left-10 left-1 -translate-y-1/2',
    subServices: [
      'Search Engine Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Brand Strategy',
    ],
  },
  {
    id: 'web-development',
    name: 'Web & Software Developer',
    link: '/web-software-development',
    color: 'bg-green-500',
    position: 'top-1/4 lg:right-1/10 md:right-10 right-1 -translate-y-1/2',
    subServices: [
      'Frontend Development',
      'Backend Development',
      'Mobile App Development',
      'Database Design',
      'API Integration',
      'DevOps & Deployment',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Affiliate Services',
    link: '/e-commerce-affiliate-service',
    color: 'bg-blue-500',
    position: 'bottom-2/5 m:bottom-1/3 lg:left-16 left-1 md:left-5',
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
    position: 'bottom-2/5 md:bottom-1/3 lg:right-16 right-1 md:right-5',
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
    position: 'bottom-24 md:bottom-28 left-1/2 -translate-x-1/2',
    subServices: [
      'SaaS Platform Development',
      'Subscription Management',
      'Analytics Dashboard',
      'User Management Systems',
      'API Development',
    ],
  },
];
