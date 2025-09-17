import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Sell More. Automate Smarter. Grow Without Limits.',
  descriptionOne:
    "At Trust Global Communications, we help businesses and creators build, scale, and optimize e-commerce and affiliate revenue streams. Whether you're launching your first Shopify store, managing a growing WooCommerce brand, or optimizing affiliate funnels—we provide end-to-end solutions that combine strategy, automation, and data to drive growth.",
  descriptionTwo:
    'From product research to backend systems, we make your online business smarter, faster, and more profitable.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner02.jpg',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Discover how we can add value';
// Shopify, WooCommerce & Custom Stores data -->
export const shopifyWooCommerceData: TServices = {
  data: {
    title: '1. Shopify, WooCommerce & Custom Stores',
    description:
      "We design and develop high-performance online stores tailored to your products and audience. Whether it's Shopify, WooCommerce, or a fully custom solution, your store will look great, load fast, and sell efficiently.",
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner02.jpg',
    imageAlt: 'shopify-woocommerce-and-custom-stores',
  },
  subServices: [
    {
      title: 'Store setup, theme customization and mobile optimization.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Product pages, cart flows, and upsell/downsell integration.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'Shopify apps, WooCommerce plugins and custom functionality.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Payment, shipping, CRM, and analytics integrations.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Product Research & Trend Analysis data -->
export const productResearchAndTrendAnalysisData: TServices = {
  data: {
    title: '2. Product Research & Trend Analysis',
    description:
      "We help you stay ahead of the curve with data-driven product research and market trend insights. Whether you're dropshipping or managing inventory, we identify winning products and categories before they peak.",
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'product-research-and-trend-analysis',
  },
  subServices: [
    {
      title: 'Niche validation and competitor research.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Trend tracking via Google Trends, TikTok, and marketplaces.',
      icon: 'ix:workspace',
    },
    {
      title: 'Profit margin, demand, and supply chain analysis.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Seasonal planning and influencer market mapping.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Dropshipping & Inventory Automation data -->
export const dropshippingAndInventoryAutomationData: TServices = {
  data: {
    title: '3. Dropshipping & Inventory Automation',
    description:
      'Want to run a store without touching stock? We set up fully automated dropshipping systems that handle product import, order fulfillment, and inventory syncing so you can focus on marketing and growth.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'multi-agent-orchestration',
  },
  subServices: [
    {
      title: 'Shopify, WooCommerce + DSers, AutoDS, or AliExpress integration.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Real-time stock updates and supplier sync.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Order automation, shipping rules and email notifications.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Branded fulfillment and supplier sourcing support.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Affiliate Optimization & Link Management data -->
export const affiliateOptimizationAndLinkManagementData: TServices = {
  data: {
    title: '4. Affiliate Optimization & Link Management',
    description:
      'Whether you’re a content creator, publisher, or eCom brand, we optimize your affiliate strategy for maximum visibility and ROI. From link management to analytics, we make sure every click counts.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
  },
  subServices: [
    {
      title:
        'Link tracking and shortening (Pretty Links, Thirsty Affiliates, Bitly).',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Affiliate landing pages, CTAs and bridge pages.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'UTM tagging, pixel setup, and multi-channel attribution.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Affiliate program setup and influencer outreach.',
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
  sectionTitle: 'Why Online Sellers & Creators Trust TGC',
  marqueeData: [
    {
      icon: 'streamline-cyber:business-target',
      title: 'Stores designed for conversions not just clicks.',
    },
    {
      icon: 'hugeicons:apple-intelligence',
      title: 'Full automation to save time and scale faster.',
    },
    {
      icon: 'fluent:shifts-team-20-regular',
      title: 'Strategic affiliate and product growth plans.',
    },
    {
      icon: 'fluent:iot-16-regular',
      title: 'Tech & marketing combined for real, measurable ROI.',
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
  title: 'Let’s Build, Launch, and Scale Your Online Store or Affiliate System',
  description:
    'Get expert guidance and powerful automation so your online business runs itself.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
