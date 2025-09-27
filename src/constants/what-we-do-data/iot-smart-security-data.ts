import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Secure Smarter. Monitor Faster. Protect Confidently.',
  descriptionOne:
    'At TGCX, we specialize in IoT & Smart Security Solutions that combine AI-driven surveillance, IoT automation, and smart access control to safeguard enterprises. From smart CCTV systems to cloud-based security dashboards, every solution is designed to reduce risks, improve compliance, and streamline operations.',
  descriptionTwo:
    'Our systems integrate seamlessly with existing platforms, ensuring scalable, reliable, and 24/7 intelligent protection.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner01.png',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Our Core IoT & Security Services';

// Smart Surveillance Systems data -->
export const smartSurveillanceSystemsData: TServices = {
  data: {
    title: '1. Smart Surveillance Systems',
    description:
      'Our Smart Surveillance Systems leverage AI-enabled CCTV and cloud monitoring to detect threats in real-time and prevent incidents before they escalate. Human teams are supported by AI analytics for faster, more accurate monitoring.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner01.png',
    imageAlt: 'smart-surveillance-systems',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-powered CCTV and cloud surveillance security.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title:
        'Facial recognition and motion detection for proactive monitoring.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'Real-time threat alerts and incident notifications.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Scalable surveillance systems for enterprise environments.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// IoT Device Integration & Automation data -->
export const iotDeviceIntegrationAndAutomationData: TServices = {
  data: {
    title: '2. IoT Device Integration & Automation',
    description:
      'We implement IoT Device Integration & Automation to connect smart devices across enterprise environments, enabling predictive maintenance, automated workflows, and seamless communication.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'iot-device-integration-and-automation',
    isLink: true,
  },
  subServices: [
    {
      title: 'Enterprise IoT systems for connected operations.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Automation solutions to optimize workflows.',
      icon: 'ix:workspace',
    },
    {
      title: 'Predictive maintenance to reduce downtime.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Integration with cloud dashboards for real-time insights.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Access Control & Biometric Security data -->
export const accessControlAndBiometricSecurityData: TServices = {
  data: {
    title: '3. Access Control & Biometric Security',
    description:
      'Our Access Control & Biometric Security solutions provide AI-powered authentication with biometric scanning, facial recognition, and RFID to protect sensitive areas.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'access-control-and-biometric-security',
    isLink: true,
  },
  subServices: [
    {
      title: 'Biometric access control for secure entry.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'AI security systems for enhanced protection.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Smart identity verification for employees and visitors.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Enterprise-grade access control and monitoring.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Cloud-Based Security Monitoring data -->
export const cloudBasedSecurityMonitoringData: TServices = {
  data: {
    title: '4. Cloud-Based Security Monitoring',
    description:
      'Cloud-Based Security Monitoring delivers centralized dashboards to track IoT devices, detect vulnerabilities, and send instant alerts for suspicious activity.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'cloud-based-security-monitoring',
    isLink: true,
  },
  subServices: [
    {
      title: 'IoT security management platforms for centralized monitoring.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Real-time AI security analytics and alerts.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Remote monitoring solutions for 24/7 coverage.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Integration with enterprise systems for seamless oversight.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};
// Risk Prevention & Cybersecurity
export const riskPreventionAndCybersecurityData: TServices = {
  data: {
    title: '5. Risk Prevention & Cybersecurity',
    description:
      'Our Risk Prevention & Cybersecurity combines AI threat detection with compliance protocols to protect networks, prevent intrusions, and ensure GDPR, HIPAA, and ISO compliance.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'cloud-based-security-monitoring',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI cybersecurity solutions for proactive threat detection.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'IoT risk prevention strategies for enterprise networks.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Compliance management with GDPR, HIPAA, and ISO standards.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Continuous monitoring and vulnerability management.',
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
    'Want to secure your enterprise with IoT and AI-powered security? Contact TGCX today to discover how our IoT & Smart Security Solutions can build a smarter, safer, and more connected business.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
