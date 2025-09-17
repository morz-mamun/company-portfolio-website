import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Build Smarter. Scale Seamlessly. Launch with Confidence.',
  descriptionOne:
    'Our Web & Software Development services deliver fast, secure, and scalable websites, apps, and software that drive results. From product strategy to cloud deployment, we craft solutions focused on performance, reliability, and growth.',
  descriptionTwo:
    'Every project is designed to integrate with your existing tools while preparing your stack for future scalability and AI automation.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service16.png',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Our Core Development Services';
// Custom Web Development data -->
export const customWebDevelopmentData: TServices = {
  data: {
    title: '1. Custom Web Development',
    description:
      'We create Custom Web Development solutions focused on conversion, speed, and SEO performance. Every website is built with semantic HTML, clean information architecture, and Core Web Vitals best practices to ensure fast loading, higher rankings, and seamless analytics integration.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service15.png',
    imageAlt: 'custom-web-development',
  },
  subServices: [
    {
      title: 'High-performance websites optimized for SEO and speed.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title:
        'Headless CMS development for flexible, future-proof content management.',
      icon: 'mingcute:voice-fill',
    },
    {
      title:
        'Built-in analytics and A/B testing hooks for data-driven decisions.',
      icon: 'pixel:calender-solid',
    },
    {
      title:
        'Website redesign services to refresh and modernize your online presence.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Enterprise Software & SaaS Solutions data -->
export const enterpriseSoftwareAndSaaSSolutionsData: TServices = {
  data: {
    title: '2. Enterprise Software & SaaS Solutions',
    description:
      'Our Enterprise Software & SaaS Solutions provide cloud-native apps with robust authentication, role-based access, billing, audit logs, and observability. These systems scale effortlessly for multi-tenant environments while remaining secure and ready for future AI automation.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service14.png',
    imageAlt: 'enterprise-software-and-saas-solutions',
  },
  subServices: [
    {
      title: 'SaaS applications are designed for scalability and reliability.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Multi-tenant architecture with secure user management.',
      icon: 'ix:workspace',
    },
    {
      title: 'Cloud applications with future AI integration potential.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Full product engineering from concept to deployment.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// Mobile App Development data -->
export const mobileAppDevelopmentData: TServices = {
  data: {
    title: '3. Mobile App Development',
    description:
      'With Mobile App Development, we build native and cross-platform apps (iOS/Android) that combine offline support, secure storage, push notifications, and analytics. App UX aligns with web funnels, and CI/CD pipelines ensure rapid, reliable releases.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service12.png',
    imageAlt: 'mobile-app-development',
  },
  subServices: [
    {
      title: 'Seamless iOS and Android experiences with intuitive UX.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Cross-platform apps for wider reach and cost efficiency.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Integrated analytics and push notifications for engagement.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'CI/CD pipelines for rapid, error-free updates.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Software Architecture & Scalability data -->
export const softwareArchitectureAndScalabilityData: TServices = {
  data: {
    title: '4. Software Architecture & Scalability',
    description:
      'Our Software Architecture & Scalability services ensure your software systems are stable, reliable, and ready for growth. We optimize databases, caching, microservices, API gateways, and autoscaling strategies to maintain performance and security.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service12.png',
    imageAlt: 'software-architecture-and-scalability',
  },
  subServices: [
    {
      title: 'Scalable software architecture for long-term growth.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Modular designs with microservices and API strategies.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Cost-efficient cloud scaling and caching/CDN optimization.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Security-by-design with SSO, rate limiting, and monitoring.',
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
    'Ready to build fast, scalable, and high-performing software? Contact TGCX today to discover how our Web & Software Development services can transform your digital presence and accelerate your business growth.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
