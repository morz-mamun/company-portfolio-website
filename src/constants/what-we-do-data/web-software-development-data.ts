import { TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Custom-Built. Scalable. Future-Ready.',
  descriptionOne:
    "At Trust Global Communications, we design and develop powerful digital products that grow with your business. From custom websites to complex software systems, our solutions are built for performance, usability, and scale. Whether you're a startuplaunchingyour first platform or an enterprise modernizing legacy tech—we turn your ideas into secure, scalable software.",
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service16.png',
};

// indivisual sub services data -->

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
export const whyChooseUsData = [
  {
    icon: 'streamline-cyber:business-target',
    title: 'Full-cycle development from strategy to launch and beyond.',
  },
  {
    icon: 'hugeicons:apple-intelligence',
    title: 'Scalable, secure architecture tailored to your needs.',
  },
  {
    icon: 'fluent:shifts-team-20-regular',
    title: 'Dedicated support even after deployment.',
  },
  {
    icon: 'fluent:iot-16-regular',
    title: 'Agile process with real-time collaboration.',
  },
];

export type TLetsBuildFutureBusiness = {
  title: string;
  description: string;
  image: string;
};
// let's build future of your business data -->
export const letsBuildFutureBusinessData: TLetsBuildFutureBusiness = {
  title: 'Let’s Build the Future of Your Business',
  description:
    'Whether it’s a website, app, or complex software system, we’ll bring your vision to life.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
