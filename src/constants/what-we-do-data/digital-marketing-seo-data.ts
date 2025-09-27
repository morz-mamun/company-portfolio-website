import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title: 'Rank Higher. Advertise Smarter. Convert Better.',
  descriptionOne:
    'Our Digital Marketing & SEO solutions combine AI-driven strategies, programmatic SEO, paid advertising, and content marketing to help businesses reach the right audience at the right time.',
  descriptionTwo:
    'From local campaigns to international expansion, every strategy is data-driven, fully optimized, and designed to increase visibility, generate leads, and maximize ROI. We focus on measurable results that grow your brand, improve engagement, and drive conversions across all digital channels.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/baner04.jpg',
};

// indivisual sub services data -->

// all services section title data -->
export const servicesSectionTitleData = 'Our Core Digital Marketing Services';
// AI-Powered SEO (On-Page, Off-Page, Technical) data -->
export const aiPoweredSeoData: TServices = {
  data: {
    title: '1. AI-Powered SEO (On-Page, Off-Page, Technical)',
    description:
      'Our AI-Powered SEO solutions cover programmatic SEO, keyword clustering, and multilingual targeting, combined with technical improvements like schema markup, site speed optimization, and advanced crawling strategies. These methods improve rankings, increase organic traffic, and enhance website authority.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'ai-powered-seo',
    isLink: true,
  },
  subServices: [
    {
      title: 'On-page SEO optimization for higher search visibility.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title:
        'Off-page link-building strategies to strengthen domain authority.',
      icon: 'mingcute:voice-fill',
    },
    {
      title:
        'Technical SEO audits for site speed, schema, and crawl efficiency.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Programmatic SEO solutions to scale content and keyword reach.',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Paid Ad Campaigns (Google, Meta, LinkedIn) data -->
export const paidAdCampaignsData: TServices = {
  data: {
    title: '2. Paid Ad Campaigns (Google, Meta, LinkedIn)',
    description:
      'With Paid Ad Campaigns, we run AI-optimized ads on Google Ads, Meta, and LinkedIn, leveraging predictive bidding, audience segmentation, and retargeting to reduce CPC and maximize ROAS. Campaigns are continuously optimized for cost efficiency and conversions.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'paid-ads-google-meta-tiktok',
    isLink: true,
  },
  subServices: [
    {
      title: 'Google Ads management with AI-driven targeting and bidding.',
      icon: 'mingcute:code-fill',
    },
    {
      title: 'Meta (Facebook/Instagram) campaigns for audience engagement.',
      icon: 'ix:workspace',
    },
    {
      title: 'LinkedIn B2B ads for lead generation and professional targeting.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'ROI-focused ad strategies with ongoing optimization.',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Content Marketing & Copywritinga data -->
export const contentMarketingCopywritingData: TServices = {
  data: {
    title: '3. Content Marketing & Copywriting',
    description:
      'Our Content Marketing & Copywriting combines AI tools and human expertise to produce blogs, long-form articles, email copy, and social content. Each piece is crafted to rank in search engines while building brand authority and audience trust',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'content-marketing-copywriting',
    isLink: true,
  },
  subServices: [
    {
      title:
        'SEO-optimized blogs and long-form content to increase organic traffic.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Email and social copywriting for engagement and conversion.',
      icon: 'ic:baseline-api',
    },
    {
      title:
        'AI-assisted content creation with human editing for tone and authority.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Strategic content planning aligned with marketing goals.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};

// Marketing Funnel Automation data -->
export const marketingFunnelAutomationData: TServices = {
  data: {
    title: '4. Marketing Funnel Automation',
    description:
      'With Marketing Funnel Automation, we design AI-driven sales funnels that nurture leads through personalized email sequences, retargeting campaigns, and automated drip workflows. Funnels are continuously tested and optimized for higher conversion rates.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'marketing-funnel-automation',
    isLink: true,
  },
  subServices: [
    {
      title: 'Automated lead nurturing sequences with AI personalization.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Retargeting campaigns to recover lost opportunities.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Optimized funnels for CRO and revenue growth.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'End-to-end sales funnel design and implementation.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-last',
    subServicesClass: 'lg:order-first',
  },
};

// Social Media Growth & Branding data -->
export const socialMediaGrowthBrandingData: TServices = {
  data: {
    title: '5. Social Media Growth & Branding',
    description:
      'Our Social Media Growth & Branding services leverage AI-assisted tools for automated posting, trend analysis, and audience engagement. We manage content calendars, influencer partnerships, and campaigns to expand reach and strengthen brand presence.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'social-media-growth-branding',
    isLink: true,
  },
  subServices: [
    {
      title: 'AI-powered social media management across all major platforms.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Automated posting and engagement monitoring.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Influencer collaborations to boost visibility and trust.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Brand growth campaigns tailored to target audiences.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'lg:order-first',
    subServicesClass: 'lg:order-last',
  },
};
// Email Marketing & Lead Nurturing data -->
export const emailMarketingLeadNurturingData: TServices = {
  data: {
    title: '6. Email Marketing & Lead Nurturing',
    description:
      'With Email Marketing & Lead Nurturing, we craft AI-personalized campaigns that segment audiences, optimize subject lines, and improve open and click-through rates. Automated drip campaigns maintain engagement until leads are ready to convert.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'social-media-growth-branding',
    isLink: true,
  },
  subServices: [
    {
      title: 'Personalized email campaigns powered by AI.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Automated drip sequences to nurture leads efficiently.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Audience segmentation for higher engagement and conversions.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Optimized subject lines and content for maximum open rates.',
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
  sectionTitle: 'Why Brands Trust TGC for Digital Growth',
  marqueeData: [
    {
      icon: 'streamline-cyber:business-target',
      title:
        'Strategies tailored to your brand and audience not generic templates.',
    },
    {
      icon: 'hugeicons:apple-intelligence',
      title: 'Clear ROI reporting across SEO, paid media, and social.',
    },
    {
      icon: 'fluent:shifts-team-20-regular',
      title: 'Consistent brand voice across every channel.',
    },
    {
      icon: 'fluent:iot-16-regular',
      title: 'Full-funnel approach: awareness to conversion and beyond.',
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
  title: 'Let’s Elevate Your Brand and Performance',
  description:
    'Ready to elevate your digital presence and drive measurable growth? Contact TGCX today to discover how our AI-powered Digital Marketing & SEO can boost rankings, increase conversions, and scale your business.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
