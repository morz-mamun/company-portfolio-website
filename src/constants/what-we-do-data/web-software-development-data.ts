import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Custom-Built. Scalable. Future-Ready.',
  descriptionOne:
    "At Trust Global Communications, we design and develop powerful digital products that grow with your business. From custom websites to complex software systems, our solutions are built for performance, usability, and scale. Whether you're a startuplaunchingyour first platform or an enterprise modernizing legacy tech—we turn your ideas into secure, scalable software.",
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service16.png',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Explore our solutions';
// Full Stack Web & App Development data -->
export const fullStackWebAndAppDevelopmentData: TServices = {
  data: {
    title: '1. (Full-Stack Web & App Development)',
    description:
      'We build robust, user-friendly websites and applications using modern frontend and backend technologies. Our full-stack team handles everything from UI design to server-side logic so your product looks great and performs flawlessly.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service15.png',
    imageAlt: 'full-stack-web-and-app-development',
  },
  subServices: [
    {
      title: 'Responsive websites, mobile apps and PWA solutions.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'React, Vue, Angular, Node.js, Laravel, Python, Next.js, etc.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'UX/UI design, secure coding and clean architecture.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Optimized for speed, SEO, and cross-device performance.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Web portals, CMS & APIs data -->
export const webPortalsCmsAndApisData: TServices = {
  data: {
    title: '2. Web Portals, CMS & APIs',
    description:
      'We create custom web portals and powerful CMS platforms that make managing your digital presence easy. We develop secure, scalable APIs to connect systems and streamline operations.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service14.png',
    imageAlt: 'web-portals-cms-and-apis',
  },
  subServices: [
    {
      title: 'Custom CMS & Software Architecture & Integration.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Client and admin portals for B2B/B2C platforms.',
      icon: 'ix:workspace',
    },
    {
      title: 'Restful & GraphQL APIs for seamless integrations.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Single sign-on (SSO), permissions and user roles.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// Software Architecture & Integration data -->
export const softwareArchitectureAndIntegrationData: TServices = {
  data: {
    title: '3. (Software Architecture & Integration)',
    description:
      'We don’t just build software we architect it. Our team designs scalable, modular systems that integrate smoothly with your existing tech stack, helping you save time, reduce costs, and avoid technical debt.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service12.png',
    imageAlt: 'software-architecture-and-integration',
  },
  subServices: [
    {
      title: 'Clean architecture and scalable backend systems.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Third-party platform integrations (CRMs, ERPs, IoT, AI APIs).',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Microservices, containers (Docker) and CI/CD pipelines.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Database design: SQL, NoSQL, Firebase, MongoDB.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Ongoing Technical Support & Maintenance data -->
export const ongoinTechnicalSupportAndMaintenanceData: TServices = {
  data: {
    title: '4. Ongoing Technical Support & Maintenance',
    description:
      'Technology doesn’t stop at launch and neither do we. We provide proactive technical support, maintenance, and performance optimization to ensure your product stays updated, fast, and secure.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service12.png',
    imageAlt: 'ongoing-technical-support-and-maintenance',
  },
  subServices: [
    {
      title: 'Bug fixes, feature updates and code audits.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Uptime monitoring, SSL, backups and firewall setup.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Performance optimization and server scaling.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Ongoing UX improvements and roadmap planning.',
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
  sectionTitle: 'Why Clients Choose TGC for Web Software Development',
  marqueeData: [
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
  ] as TMarqueeData[],
};

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
