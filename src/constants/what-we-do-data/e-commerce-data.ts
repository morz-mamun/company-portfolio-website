import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Sell Smarter. Optimize Faster. Scale Globally.',
  descriptionOne:
    'At TGCX, we specialize in E-commerce Management Services that help businesses streamline online operations, boost sales, and scale across global marketplaces. From custom store development to AI-powered automation and cross-platform expansion, every solution is designed to improve performance, enhance customer experience, and deliver measurable growth.',
  descriptionTwo:
    'Our tools and strategies integrate seamlessly with Shopify, Amazon, Walmart, eBay, and Etsy, ensuring efficient operations and maximum ROI across all digital sales channels.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner02.jpg',
};

// indivisual sub services data -->
// all services section title data -->
export const servicesSectionTitleData = 'Our Core E-commerce Services';
// E-commerce Website & Marketplace Store Development data -->
export const ecommerceWebsiteAndMarketplaceStoreDevelopmentData: TServices = {
  data: {
    title: '1. E-commerce Website & Marketplace Store Development',
    description:
      'Our E-commerce Website & Marketplace Store Development services create custom online stores and seller accounts with professional branding, intuitive UX, and SEO-optimized product pages to drive conversions and revenue.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/banner02.jpg',
    imageAlt: 'ecommerce-website-and-marketplace-store-development',
    isLink: true,
  },
  subServices: [
    {
      title: 'Custom Shopify, Amazon, eBay, Walmart, and Etsy storefronts.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'SEO-friendly product pages for higher search visibility.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'Engaging UX and branding for a seamless shopping experience.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Optimized store layouts to maximize conversion rates.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// PAmazon, Walmart, Etsy, eBay, & Shopify Optimization data -->
export const amazonWalmartEtsyEbayAndShopifyOptimizationData: TServices = {
  data: {
    title: '2. Amazon, Walmart, Etsy, eBay, & Shopify Optimization',
    description:
      'With our Amazon, Walmart, Etsy, eBay & Shopify Optimization, we improve visibility and sales through AI-driven product SEO, PPC campaigns, and competitor analysis. Enhanced content and dynamic pricing strategies ensure maximum marketplace performance.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'amazon-walmart-etsy-ebay-and-shopify-optimization',
    isLink: true,
  },
  subServices: [
    {
      title: 'Amazon PPC and advanced product SEO strategies.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Walmart, Etsy, and Shopify marketplace optimization.',
      icon: 'ix:workspace',
    },
    {
      title: 'A+ content management and keyword targeting.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Data-driven pricing and performance monitoring.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Affiliate Network Setup & Management data -->
export const affiliateNetworkSetupAndManagementData: TServices = {
  data: {
    title: '3. Affiliate Network Setup & Management',
    description:
      'Our Affiliate Network Setup & Management services expand your reach while tracking commissions, conversions, and ROI using AI-powered dashboards. We handle program setup, partner onboarding, and performance optimization for measurable results.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'multi-agent-orchestration',
    isLink: true,
  },
  subServices: [
    {
      title: 'Automated affiliate program setup and management.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Commission tracking and performance dashboards.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Partner recruitment and onboarding strategies.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Data-driven insights to maximize affiliate ROI.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// AI-Powered Product Recommendation Systems data -->
export const aiPoweredProductRecommendationSystemsData: TServices = {
  data: {
    title: '4. AI-Powered Product Recommendation Systems',
    description:
      'Our AI-Powered Product Recommendation Systems deliver personalized shopping experiences that increase upsells, cross-sells, and overall revenue. AI analyzes customer behavior to offer relevant product suggestions in real-time.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-powered-product-recommendation-systems',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-driven upsell and cross-sell recommendations.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Personalized product suggestions based on customer behavior.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Integration with online stores and marketplaces.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Enhanced customer experience for higher conversion rates.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};
// Automated Order & Inventory Management data -->
export const automatedOrderAndInventoryManagementData: TServices = {
  data: {
    title: '5. Automated Order & Inventory Management',
    description:
      'With Automated Order & Inventory Management, we deploy AI-powered systems to synchronize stock across marketplaces, automate order processing, and forecast inventory needs, preventing overstock and shortages.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'automated-order-and-inventory-management',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-based inventory automation tools for seamless stock control.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Automated order processing across multiple platforms.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Demand forecasting to optimize inventory levels.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Integration with e-commerce platforms for efficiency.',
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
    'Ready to scale your online store and dominate marketplaces? Contact TGCX today to discover how our E-commerce Management Services can automate operations, boost sales, and grow your business globally.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
