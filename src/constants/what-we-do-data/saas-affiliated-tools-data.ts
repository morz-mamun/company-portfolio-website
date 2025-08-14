import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Build Smarter Platforms. Track Performance. Scale Recurring Revenue.',
  descriptionOne:
    "At Trust Global Communications, we design and develop scalable SaaS products and affiliate marketing tools that fuel growth. Whether you're launching a micro SaaS, managing partners, or building recurring revenue systems—we turn your vision into streamlined, profitable platforms.",
  descriptionTwo:
    'Our approach blends technical precision with marketing insight, so your software isn’t just functional—it’s conversion-ready, monetizable, and built for scale.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner03.png',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Discover how we can add value';

// Micro SaaS Development data -->
export const microSaaSDevelopmentData: TServices = {
  data: {
    title: '1. Micro SaaS Development',
    description:
      "We specialize in building lightweight SaaS tools that solve specific pain points—fast. Whether it's a CRM add-on, AI assistant, dashboard tool, or automation service, we handle everything from idea to MVP and beyond.",
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'micro-saas-development',
  },
  subServices: [
    {
      title: 'Custom MVP design and full-stack development.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Admin dashboards, user accounts and subscription logic.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'API integrations, security and backend infrastructure.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Scalable architecture with SaaS metrics built-in.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Affiliate Tracking Dashboards data -->
export const affiliateTrackingDashboardsData: TServices = {
  data: {
    title: '2. Affiliate Tracking Dashboards',
    description:
      'We connect your apps, tools, and systems through visual workflow builders like n8n, Zapier, and Make—automating everything from lead follow-ups to report generation.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'affiliate-tracking-dashboards',
  },
  subServices: [
    {
      title:
        'Custom or third-party (Post Affiliate Pro, Tapfiliate) dashboard setups.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Click tracking, referral codes and commission logic.',
      icon: 'ix:workspace',
    },
    {
      title: 'Payout workflows and exportable reports.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Partner onboarding, status tracking and alerts.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// Multi-Agent Orchestration data -->
export const ecommerceFunnelsAndIntegrationsData: TServices = {
  data: {
    title: '3. E-commerce Funnels & Integrations',
    description:
      'From landing pages to checkouts, we build ecommerce funnels that convert visitors into buyersand buyers into loyal subscribers. We also connect your store to everything: CRMs, payment gateways, inventory, and email.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'multi-agent-orchestration',
  },
  subServices: [
    {
      title:
        'One-click upsells, abandoned cart flows, and checkout optimization.',
      icon: 'mdi:face-agent',
    },
    {
      title:
        'Shopify, WooCommerce, Stripe, PayPal, Mailchimp, Klaviyo integrations.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Zapier/n8n automation for post-purchase workflows.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'GA4 & Facebook Pixel event tracking and reporting.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Workflow Automation data -->
export const subscriptionAndPaymentSystemsData: TServices = {
  data: {
    title: '4. Subscription & Payment Systems',
    description:
      'We build secure, scalable subscription and billing systems that work across currencies, platforms, and business models. Whether it’s monthly access, digital downloads, or premium upgrades, we make getting paid frictionless.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
  },
  subServices: [
    {
      title:
        'Stripe, Paddle, PayPal, Razorpay, and Coinbase Commerce integrations.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title:
        'Subscription logic (free trials, upgrades, downgrades, cancellations).',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Auto-renewals, failed payment handling and webhook events.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Detailed revenue reporting and dashboard integration.',
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
    'Book your free strategy session today—we’ll map your growth roadmap from visibility to profitability.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
