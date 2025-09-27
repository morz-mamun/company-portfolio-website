import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Innovate Smarter. Predict Faster. Personalize Intelligently.',
  descriptionOne:
    'At TGCX, we specialize in Emerging AI Services that help businesses stay ahead of the curve. From Generative AI content tools to industry-specific AI applications and predictive analytics, every solution is designed to accelerate innovation, optimize workflows, and deliver measurable impact.',
  descriptionTwo:
    'Our systems integrate seamlessly with existing operations, ensuring scalable, future-ready AI solutions tailored to your organization’s needs.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service11.png',
};

// indivisual sub services data -->

// all services section title data -->
export const servicesSectionTitleData = 'Our Core Emerging AI Services';

// Generative AI Solutions (Text, Image, Video, Audio) data -->
export const generativeAISolutionsData: TServices = {
  data: {
    title: '1. AI Multi-Agent System Development',
    description:
      'Our Generative AI Solutions create content, visuals, video ads, synthetic audio, and AI avatars for faster marketing and engaging brand experiences. Businesses can streamline storytelling, design, and media production with AI-powered creativity.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'generative-ai-solutions',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI content generation for blogs, ads, and social media.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Synthetic media solutions for video and audio production.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'AI-driven design tools for marketing and branding.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Real-time AI avatars and interactive media experiences.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// AI for Finance, Healthcare & Education data -->
export const aiForFinanceHealthcareEducationData: TServices = {
  data: {
    title: '2. AI for Finance, Healthcare & Education',
    description:
      'We deliver industry-specific AI solutions to automate risk assessment in finance, support diagnostics in healthcare, and provide personalized learning in education. Each system is tailored to improve efficiency, accuracy, and decision-making.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'ai-for-finance-healthcare-education',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI risk assessment and fraud detection for finance.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Healthcare diagnostics and predictive care models.',
      icon: 'ix:workspace',
    },
    {
      title: 'Personalized AI-driven learning platforms for education.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Industry-specific automation and workflow optimization.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Predictive Analytics & Forecasting Models data -->
export const predictiveAnalyticsAndForecastingModelsData: TServices = {
  data: {
    title: '3. Predictive Analytics & Forecasting Models',
    description:
      'Our Predictive Analytics & Forecasting Models analyze historical and real-time data to anticipate demand, customer behavior, and market trends, helping businesses make informed strategic decisions.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'predictive-analytics-and-forecasting-models',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-driven demand forecasting and market predictions.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Customer behavior analysis for smarter marketing.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Predictive models for operational planning.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Real-time insights to guide business strategy.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// AI-Driven Personalization Engines data -->
export const aiDrivenPersonalizationEnginesData: TServices = {
  data: {
    title: '4. AI-Driven Personalization Engines',
    description:
      'We build AI Personalization Engines that adapt websites, apps, and campaigns in real time based on user intent, behavior, and preferences, improving engagement and conversions.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-driven-personalization-engines',
    isLink: true,
  },
  subServices: [
    {
      title: 'Dynamic personalization for digital experiences.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'AI customer experience optimization tools.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Behavioral analytics for smarter content delivery.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Real-time adaptive campaigns across channels.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};
// R&D for Future AI Technologies data -->
export const rDForFutureAITechnologiesData: TServices = {
  data: {
    title: '5. R&D for Future AI Technologies',
    description:
      'TGCX invests in AI R&D to explore multi-modal AI, Web3 + AI integration, neuro-marketing, and ethical AI frameworks. We help businesses remain future-ready, innovative, and compliant.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'R&D-for-Future-AI-Technologies',
    isLink: true,
  },
  subServices: [
    {
      title: 'Next-gen AI solutions and prototypes.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Web3 and AI integration for advanced applications.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Ethical AI consulting and compliance guidance.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Research-driven innovations for industry leadership.',
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
    'Ready to future-proof your business with emerging AI solutions? Contact TGCX today to discover how our Emerging AI Services (Future-Ready) can unlock next-generation AI innovations tailored to your industry.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
