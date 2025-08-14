import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Secure Smarter. Monitor in Real Time. Control from Anywhere.',
  descriptionOne:
    "At Trust Global Communications, we build secure, connected environments using IoT, AI, and automation—so you can manage, monitor, and protect your assets with confidence. Whether you're securing a building, monitoring a remote facility, or integrating smart systems into daily operations, our solutions offer visibility, control, and peace of mind.",
  descriptionTwo:
    'From offices and retail spaces to industrial sites and smart buildings—we make your infrastructure intelligent, secure, and scalable',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner01.png',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Discover how we can add value';

// IoT Access Control & Real-Time Monitoring data -->
export const iotAccessControlAndRealTimeMonitoringData: TServices = {
  data: {
    title: '1. IoT Access Control & Real-Time Monitoring',
    description:
      'We help you modernize physical access with IoT-powered systems that track entries, control access remotely, and alert you in real time.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner01.png',
    imageAlt: 'iot-access-control-and-real-time-monitoring',
  },
  subServices: [
    {
      title: 'Biometric, RFID, and voice activated smart locks.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Entry logging and role-based access permissions.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'Real-time mobile notifications and dashboard monitoring.',
      icon: 'pixel:calender-solid',
    },
    {
      title:
        'Cloud-based access history synced to apps like Google Sheets or Notion.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Smart Alarms, Sensors & Surveillance data -->
export const smartAlarmsSensorsAndSurveillanceData: TServices = {
  data: {
    title: '2. Smart Alarms, Sensors & Surveillance',
    description:
      'Our intelligent sensor and surveillance systems detect, analyze, and respond to threats before they escalate giving you proactive security, not just reactive alerts.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'workflow-automation',
  },
  subServices: [
    {
      title: 'Smart CCTV with AI motion and facial recognition.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Smoke, gas, motion, temperature and glass break sensors.',
      icon: 'ix:workspace',
    },
    {
      title:
        'Mobile video feeds, instant alerts, and automated safety workflows.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Integration with emergency response systems.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// Cybersecurity for Websites & IoT Devices data -->
export const cybersecurityForWebsitesAndIoTDevicesData: TServices = {
  data: {
    title: '3. Cybersecurity for Websites & IoT Devices',
    description:
      'We secure both digital infrastructure and physical devices offering end-to-end cybersecurity for websites, apps, and smart systems. Our approach combines human expertise with AI-enhanced threat detection and response.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'multi-agent-orchestration',
  },
  subServices: [
    {
      title: 'Firewalls, malware protection, and DDoS mitigation.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'SSL, 2FA, token systems and website hardening.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Encrypted data flows across IoT devices and APIs.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Risk assessments, audits and real-time security alerts.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Workflow Automation data -->
export const industrialAndOfficeAutomationData: TServices = {
  data: {
    title: '4. Industrial & Office Automation',
    description:
      'Transform your workplace into a smart, self-regulating environment. Our automation solutions help reduce energy usage, increase safety, and simplify facility management through real-time data and control.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
  },
  subServices: [
    {
      title: 'Automated lighting, HVAC and environmental controls.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'AI-triggered workflows based on motion, schedule, or behavior.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Smart scheduling for utilities and device usage.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Central dashboard for multiple locations or departments.',
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
  sectionTitle: 'Why Businesses Trust TGC for Smart Security & IoT',
  marqueeData: [
    {
      icon: 'streamline-cyber:business-target',
      title: 'End-to-end visibility across physical and digital systems.',
    },
    {
      icon: 'hugeicons:apple-intelligence',
      title: 'Real-time monitoring, alerts, and autonomous response.',
    },
    {
      icon: 'fluent:shifts-team-20-regular',
      title: 'Unified platform for facility control, access, and safety.',
    },
    {
      icon: 'fluent:iot-16-regular',
      title: 'Scalable across offices, warehouses, campuses & retail.',
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
  title: 'Make Your Spaces Smarter. Make Your Operations Safer',
  description:
    'Let’s build a secure, intelligent environment tailored to your business.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
