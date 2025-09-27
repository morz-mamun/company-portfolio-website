import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Outsource Smarter. Operate Faster. Scale Globally.',
  descriptionOne:
    'At TGCX, we specialize in AI BPO Solutions that combine AI-driven workflows, intelligent voice assistants, and automated back-office operations to transform outsourcing. From AI-powered call centers to technical support and lead generation, every solution is designed to streamline processes, enhance efficiency, reduce costs, and deliver measurable results across your organization.',
  descriptionTwo:
    'Our systems integrate seamlessly with existing platforms, ensuring scalable, reliable, and 24/7 intelligent operations.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service11.png',
};

// indivisual sub services data -->

// all services section title data -->
export const servicesSectionTitleData = 'Our Core AI BPO Services';

// AI BPO Solutions data -->
export const aiBpoSolutionsData: TServices = {
  data: {
    title: '1. AI Call Center Solutions',
    description:
      'Our AI Call Center Solutions deploy intelligent voice assistants and smart IVR systems to route calls efficiently, reduce wait times, and improve customer satisfaction. Human agents work alongside AI to ensure faster and more accurate query resolution.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-bpo-solutions',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-enabled voice assistants for intelligent call routing.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Smart IVR systems to minimize wait times.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'Enhanced customer satisfaction through AI support.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Integration with human agents for seamless service.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Customer Support and Helpdesk Outsourcing data -->
export const customerSupportAndHelpdeskOutsourcingData: TServices = {
  data: {
    title: '2. Customer Support & Helpdesk Outsourcing',
    description:
      'With Customer Support & Helpdesk Outsourcing, we combine AI chatbots, ticket automation, and knowledge base management to provide fast, accurate, and multilingual support, 24/7.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'customer-support-and-helpdesk-outsourcing',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-assisted chatbots for instant query resolution.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Automated ticketing and workflow management.',
      icon: 'ix:workspace',
    },
    {
      title: 'Multilingual support for global audiences.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Knowledge base integration for consistent support.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Back Office Process Outsourcing data -->
export const backOfficeProcessOutsourcingData: TServices = {
  data: {
    title: '3. Back Office Process Outsourcing',
    description:
      'Our Back Office Process Outsourcing automates data entry, billing, HR, payroll, and document processing with AI-powered systems, reducing errors and turnaround times while maintaining compliance.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'back-office-process-outsourcing',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-driven data entry and document automation.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Payroll, HR, and billing process outsourcing.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Business process automation for operational efficiency.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Error reduction and faster turnaround times.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Technical Support Outsourcing data -->
export const technicalSupportOutsourcingData: TServices = {
  data: {
    title: '4. Technical Support Outsourcing',
    description:
      'With Technical Support Outsourcing, our AI-supported teams provide monitoring, troubleshooting, and escalation management for IT, SaaS, and enterprise systems, ensuring seamless operations.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'technical-support-outsourcing',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-assisted IT helpdesk and remote tech support.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Continuous system monitoring and issue resolution.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Escalation management for complex technical problems.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Support for SaaS and enterprise platforms.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};
// AI Lead Generation & Sales Support data -->
export const aiLeadGenerationAndSalesSupportData: TServices = {
  data: {
    title: '5. VAI Lead Generation & Sales Support',
    description:
      'Our AI Lead Generation & Sales Support services use AI-driven lead scoring, qualification, and nurturing to increase conversion rates, shorten sales cycles, and allow your sales team to focus on high-quality prospects.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-lead-generation-and-sales-support',
    isLink: true,
  },
  subServices: [
    {
      title: 'Automated lead qualification and scoring systems.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'AI-powered lead nurturing campaigns.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Enhanced sales support for higher conversion rates.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'B2B lead generation and pipeline optimization.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// why client choose us data -->
export const whyChooseUsData = {
  sectionTitle:
    'Why Clients Choose TGCX for Automation & AI Multi-Agent Systems',
  marqueeData: [
    {
      icon: 'streamline-cyber:business-target',
      title: 'Business processes that run smarter not just faster.',
    },
    {
      icon: 'hugeicons:apple-intelligence',
      title: 'Real-time coordination and adaptive intelligence.',
    },
    {
      icon: 'fluent:shifts-team-20-regular',
      title: 'Modular solutions that scale with your team or infrastructure.',
    },
    {
      icon: 'fluent:iot-16-regular',
      title: 'Integrated AI + IoT systems, managed from one place.',
    },
  ] as TMarqueeData[],
};

export type TLetsBuildFutureBusiness = {
  title: string;
  description: string;
  image: string;
};
// let's build future of your business data -->
export const letsBuildFutureBusinessData: TLetsBuildFutureBusiness = {
  title: 'Let’s Bring Intelligence to Your Business',
  description:
    'Looking for smarter, faster, and cost-efficient outsourcing? Contact TGCX today to discover how our AI BPO Solutions can scale your operations, automate processes, and deliver AI-driven support across your business.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
