import {
  TMarqueeData,
  TServiceDescription,
  TServices,
  TWhyChooseUs,
} from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Automate Smarter. Scale Faster. Think Beyond Tasks.',
  descriptionOne:
    'At Trust Global Communications, we don’t just automate we build intelligent systems that think, act, and evolve. Our AI Automation & Multi-Agent Systems (MAS) solutions help businesses streamline operations, reduce manual work, and build self-adapting environments that can learn, decide, and collaborate in real time.',
  descriptionTwo:
    'From chatbots and workflow automation to coordinated AI agents and secure smart facilities—we bring together intelligence and innovation to power the future of business.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service11.png',
};

// indivisual sub services data -->

// all services section title data -->
export const servicesSectionTitleData = 'Explore our solutions';

// AI Chatbots and Voice Assistants data -->
export const aiChatBotAndVoiceAssistantData: TServices = {
  data: {
    title: '1. (AI Chatbots & Voice Assistants)',
    description:
      'Your customers deserve more than canned responses. We build intelligent chatbots and voice assistants that offer instant, personalized, and human-like interactions anytime, anywhere.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-chatbot-and-voice-assistant',
  },
  subServices: [
    {
      title:
        'GPT-powered chatbots for web, WhatsApp, Messenger and mobile apps.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Voice assistants for smart devices, IVR and custom platforms.',
      icon: 'mingcute:voice-fill',
    },
    {
      title:
        'Seamless integration with CRMs, calendars and customer service tools.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Multilingual, omnichannel support with real-time learning.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Workflow Automation data -->
export const workflowAutomationData: TServices = {
  data: {
    title: '2. Workflow Automation (n8n, Zapier, Make)',
    description:
      'We connect your apps, tools, and systems through visual workflow builders like n8n, Zapier, and Make—automating everything from lead follow-ups to report generation.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'workflow-automation',
  },
  subServices: [
    {
      title:
        'GPT-powered chatbots for web, WhatsApp, Messenger and mobile apps.',
      icon: 'mingcute:code-fill',
    },
    {
      title:
        'Real-time sync across Google Workspace, CRMs, eCommerce, Slack and more.',
      icon: 'ix:workspace',
    },
    {
      title: 'Multi-step flows with logic, AI integrations and smart triggers.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Customized automations built around your business rules.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// Multi-Agent Orchestration data -->
export const multiAgentOrchestrationData: TServices = {
  data: {
    title: '3. (Multi-Agent Orchestration)',
    description:
      'Imagine AI agents that can independently solve problems and work together as a team. We design Multi-Agent Systems (MAS) that coordinate in real-time to complete complex tasks, manage environments, and adapt to changing data.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'multi-agent-orchestration',
  },
  subServices: [
    {
      title: 'Modular agent architecture with role-specific logic.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Real-time orchestration with MQTT, webhooks, and API comms.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Self-learning behaviors and autonomous decision-making.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title:
        'Use cases: logistics, customer service, smart buildings, and more.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Workflow Automation data -->
export const facilityAndSecurityAutomation: TServices = {
  data: {
    title: '4. Facility & Security Automation',
    description:
      'We create intelligent facility systems powered by IoT and AI to help you automate physical spaces and secure them remotely. From energy efficiency to smart surveillance your operations stay connected, safe, and under control.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
  },
  subServices: [
    {
      title: 'AI-powered CCTV, smart locks, and biometric access.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Environmental sensors (temperature, motion, smoke, etc.).',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Automated energy, lighting, and equipment scheduling.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Custom dashboards for multi-location monitoring.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// why client choose us data -->
export const whyChooseUsData = {
  sectionTitle: 'Why Clients Choose TGC for AI Automation',
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
    'Ready to build smarter systems that talk, think, and work together?',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
