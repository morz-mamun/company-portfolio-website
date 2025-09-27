import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Automate Smarter. Scale Faster. Think Beyond Tasks.',
  descriptionOne:
    'At TGCX, we specialize in building advanced AI Automation & Multi-Agent Systems that streamline workflows, cut costs, and unlock growth opportunities. From intelligent process automation to custom-built AI agents, we help businesses operate more efficiently and effectively.',
  descriptionTwo:
    'Our systems integrate seamlessly with tools like n8n, Zapier, APIs, and enterprise platforms, ensuring efficiency and scalability across departments.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service11.png',
};

// all services section title data -->
export const servicesSectionTitleData = 'Our Core Automation Services';

// AI Chatbots and Voice Assistants data -->
export const aiChatBotAndVoiceAssistantData: TServices = {
  data: {
    title: '1. AI Multi-Agent System Development',
    description:
      'We design and deploy multi-agent ecosystems where AI agents collaborate, share data, and execute tasks autonomously, driving smarter operations and higher productivity.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-chatbot-and-voice-assistant',
    isLink: true,
  },
  subServices: [
    {
      title: 'Inter-agent communication for seamless AI orchestration.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Scalable architecture that grows with your business needs.',
      icon: 'mingcute:voice-fill',
    },
    {
      title:
        'Data-driven optimization for continuous improvement in AI multi-agent systems.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Multilingual, omnichannel support with real-time learning.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Workflow Automation data -->
export const workflowAutomationData: TServices = {
  data: {
    title: '2. Workflow Automation (n8n, Zapier, Custom APIs)',
    description:
      'Eliminate repetitive tasks and streamline operations by connecting your apps and platforms with low-code/no-code tools or custom APIs. Our workflow automation services ensure efficiency and accuracy across business processes.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'workflow-automation',
    isLink: true,
  },
  subServices: [
    {
      title:
        'Automated workflows using n8n and Zapier for business efficiency.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Custom API integrations tailored to enterprise systems.',
      icon: 'ix:workspace',
    },
    {
      title: 'Error-free task execution with automated triggers and actions.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Real-time workflow monitoring for smooth business operations.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Multi-Agent Orchestration data -->
export const multiAgentOrchestrationData: TServices = {
  data: {
    title: '3. Intelligent Process Automation (IPA)',
    description:
      'Combine AI intelligence with RPA to create systems that think and act, not just follow instructions. Intelligent Process Automation helps reduce human error, improve compliance, and speed up operations.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'multi-agent-orchestration',
    isLink: true,
  },
  subServices: [
    {
      title: 'Smart document processing for automated data handling.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'AI-driven compliance monitoring to minimize risk.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Optimized data entry for faster, error-free workflows.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Predictive decision-making for proactive issue resolution.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Workflow Automation data -->
export const facilityAndSecurityAutomation: TServices = {
  data: {
    title: '4. AI-Powered Data Processing & Reporting',
    description:
      'Transform raw data into actionable insights with AI-powered pipelines and real-time dashboards. Our solutions enable predictive analytics, enhanced reporting, and faster, data-driven decision-making.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
    isLink: true,
  },
  subServices: [
    {
      title: 'Real-time data processing for instant business insights.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Custom dashboards for data visualization and reporting.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Predictive analytics to forecast trends and outcomes.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title:
        'Simplified visualization of complex datasets for strategic decisions.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};
// Workflow Automation data -->
export const voiceAndChatbotAssistant: TServices = {
  data: {
    title: '5. Voice & Chatbot Assistants',
    description:
      'Engage customers 24/7 with conversational AI assistants across websites, apps, and call centers. From chatbots to voice-enabled virtual agents, our solutions improve user experience and reduce support costs.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
    isLink: true,
  },
  subServices: [
    {
      title:
        'GPT-powered chatbots for web, WhatsApp, Messenger, and mobile apps.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title:
        'Voice assistants for IVR systems, smart devices, and custom platforms.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Seamless CRM and calendar integration for enhanced productivity.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title:
        'Multilingual support with real-time learning for omnichannel engagement.',
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
    'Ready to automate your business with next-gen AI? Contact TGCX today to discover how our Automation & Multi-Agent Systems can transform your workflows and scale your business.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
