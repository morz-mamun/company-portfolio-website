import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Build Smarter. Automate Faster. Scale with Confidence.',
  descriptionOne:
    'At TGCX, we specialize in developing advanced SaaS Products & Automation Tools that streamline operations, save time, and drive measurable growth. Our AI-powered platforms and automation workflows help businesses optimize efficiency, increase conversions, and scale effortlessly.',
  descriptionTwo:
    'From affiliate marketing automation to AI content creation and workflow tools, every solution is designed to perform reliably, integrate seamlessly with your existing systems, and unlock new growth opportunities.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner03.png',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Our Core SaaS & Automation Services';

// SaaS Product Development data -->
export const saasProductDevelopmentData: TServices = {
  data: {
    title: '1. SaaS Product Development',
    description:
      'Our SaaS Product Development services deliver custom-built, multi-tenant platforms with subscription billing, AI-enhanced features, and full compliance. Every product is designed for scalability, security, and long-term growth.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'saas-product-development',
  },
  subServices: [
    {
      title: 'Multi-tenant SaaS platforms with robust architecture.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Subscription management and billing automation.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'AI-enhanced features for smarter user experiences.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Scalable, secure, and compliant from day one.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Affiliate Marketing Automation Tools data -->
export const affiliateTrackingDashboardsData: TServices = {
  data: {
    title: '2. Affiliate Marketing Automation Tools',
    description:
      'Our Affiliate Marketing Automation Tools help businesses recruit, track, and scale affiliate programs without manual effort. AI-driven dashboards, commission tracking, and fraud detection make managing affiliates effortless.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'affiliate-marketing-automation-tools',
  },
  subServices: [
    {
      title: 'Automated affiliate recruitment and onboarding.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Commission tracking and performance dashboards.',
      icon: 'ix:workspace',
    },
    {
      title: 'AI-powered fraud detection for secure operations.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Scalable affiliate programs with minimal manual effort.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// E-commerce Growth Strategy Tools data -->
export const ecommerceGrowthStrategyToolsData: TServices = {
  data: {
    title: '3. E-commerce Growth Strategy Tools',
    description:
      'We design E-commerce Growth Strategy Tools that automate product research, pricing optimization, competitor monitoring, and analytics for online stores. Sellers on Shopify, Amazon, Walmart, and eBay can scale faster and make data-driven decisions.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'ecommerce-growth-strategy-tools',
  },
  subServices: [
    {
      title: 'AI-powered product research for smarter inventory decisions.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Pricing optimization to maximize revenue and competitiveness.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Competitor monitoring for actionable insights.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Analytics dashboards to track growth and performance.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// AI Content Creation Platforms data -->
export const aiContentCreationPlatformsData: TServices = {
  data: {
    title: '4. AI Content Creation Platforms',
    description:
      'With our AI Content Creation Platforms, businesses generate SEO-optimized blogs, ad copy, videos, and graphics in seconds. These tools combine AI automation with human oversight to maintain quality and relevance.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-content-creation-platforms',
  },
  subServices: [
    {
      title: 'Automated blog writing and SEO content generation.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'AI ad copy and creative generation for campaigns.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Video and graphic content automation for faster production.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Platforms designed for scalability and content consistency.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// AI-Powered Marketing Funnel Optimizer data -->
export const aiPoweredMarketingFunnelOptimizerData: TServices = {
  data: {
    title: '5. AI-Powered Marketing Funnel Optimizer',
    description:
      'Our AI-Powered Marketing Funnel Optimizer dynamically tests, personalizes, and tracks user behavior to maximize conversions. Funnels adapt automatically to user intent, improving lead generation and sales.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-content-creation-platforms',
  },
  subServices: [
    {
      title: 'AI split testing for optimal funnel performance.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Personalized user experiences based on behavior tracking.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Automated conversion optimization for higher ROI.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Data-driven funnels that evolve with audience actions.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};
// Smart Review & Testimonial Collectors data -->
export const smartReviewAndTestimonialCollectorsData: TServices = {
  data: {
    title: '6. Smart Review & Testimonial Collectors',
    description:
      'Our Smart Review & Testimonial Collectors automate review collection and analysis across platforms like Google, Trustpilot, Yelp, and social media, building credibility and improving search rankings.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-content-creation-platforms',
  },
  subServices: [
    {
      title: 'Automated review and testimonial collection.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Cross-platform analytics and reporting.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Display tools to showcase social proof effectively.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'AI-driven insights to boost online reputation.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// why client choose us data -->
export const whyChooseUsData = {
  sectionTitle: 'Why Entrepreneurs Choose TGC for SaaS & Affiliate Builds',
  marqueeData: [
    {
      icon: 'streamline-cyber:business-target',
      title: 'Tech that aligns with your growth and monetization goals.',
    },
    {
      icon: 'hugeicons:apple-intelligence',
      title: 'Ready-to-scale infrastructure for MVPs and beyond.',
    },
    {
      icon: 'fluent:shifts-team-20-regular',
      title:
        'Performance tracking, automation and partner visibility built-in.',
    },
    {
      icon: 'fluent:iot-16-regular',
      title: 'Ongoing support, optimization, and roadmap guidance.',
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
  title: 'Ready to Build Your Platform, Product, or Passive Income Machine?',
  description:
    'Ready to launch your SaaS product or supercharge growth with AI tools? Contact TGCX today to discover how our SaaS Products & Automation Tools can streamline operations, scale your business, and drive measurable results.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
