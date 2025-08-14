import { TMarqueeData, TServiceDescription, TServices } from '@/types/services';

export const serviceDescriptionData: TServiceDescription = {
  title:
    'Attract the Right Traffic. Build a Memorable Brand. Convert With Confidence.',
  descriptionOne:
    "At Trust Global Communications, we blend creative strategy with performance-driven execution to grow your brand, traffic, and revenue across every digital touchpoint. Whether you're launching a new product, scaling your online presence, or optimizing conversions—we build campaigns that connect, convert, and compound your growth.",
  descriptionTwo:
    'From SEO and paid ads to content and brand visibility, our digital marketing team is your engine for sustainable success.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/baner04.jpg',
};

// indivisual sub services data -->

// all services section title data -->
export const servicesSectionTitleData = 'Discover how we can add value';
// SEO data -->
export const seoData: TServices = {
  data: {
    title: '1. SEO (On-Page, Off-Page, Technical)',
    description:
      'We take a 360° approach to SEO optimizing your website inside and out. From technical health to high-authority backlinks, we make sure your brand shows up where it matters most.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'seo-on-page-off-page-technical',
  },
  subServices: [
    {
      title: 'On-Page SEO: keyword mapping, meta tags, internal linking.',
      icon: 'tabler:message-chatbot-filled',
    },
    {
      title: 'Off-Page SEO: white-hat link building, citations, digital PR.',
      icon: 'mingcute:voice-fill',
    },
    {
      title: 'Technical SEO: speed, schema, mobile optimization, crawl audits.',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Tools: Surfer SEO, Ahrefs, SEMrush, Screaming Frog',
      icon: 'pixel:machine-learning',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Paid Ads data -->
export const paidAdsData: TServices = {
  data: {
    title: '2. Paid Ads (Google, Meta, TikTok)',
    description:
      'We design, launch, and optimize paid campaigns that put your offer in front of the right audience at the right time. Whether it’s search intent or scroll-stopping visuals, we deliver clicks that turn into customers.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'paid-ads-google-meta-tiktok',
  },
  subServices: [
    {
      title: 'Google Ads(Search, Display, YouTube)',
      icon: 'mingcute:code-fill',
    },
    {
      title:
        'Meta Ads (Facebook & Instagram retargeting + lookalike audiences)',
      icon: 'ix:workspace',
    },
    {
      title: 'TikTok & short-form video ad campaigns',
      icon: 'pixel:calender-solid',
    },
    {
      title: 'Conversion tracking, budget optimization, and A/B testing',
      icon: 'streamline-plump:cog-automation-solid',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// Social Media data -->
export const socialMediaData: TServices = {
  data: {
    title: '3. (Social Media Marketing & Analytics)',
    description:
      'Social media should do more than just post,it should perform. We create platform-specific strategies that blend storytelling, social proof, and trend awareness to drive engagement and conversions.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service09.png',
    imageAlt: 'social-media-marketing-analytics',
  },
  subServices: [
    {
      title:
        'Content calendars, reels, and stories for Meta, TikTok, LinkedIn, and X.',
      icon: 'mdi:face-agent',
    },
    {
      title: 'Brand voice development + visual consistency.',
      icon: 'ic:baseline-api',
    },
    {
      title: 'Community management and engagement tracking.',
      icon: 'ri:speak-ai-fill',
    },
    {
      title: 'Real-time analytics dashboards and insights.',
      icon: 'fluent:settings-cog-multiple-24-filled',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
  },
};

// Content Strategy data -->
export const contentStrategyData: TServices = {
  data: {
    title: '4. Content Strategy & Funnel Copy',
    description:
      'From top of funnel awareness to post-purchase retention, we create content that moves people. Backed by SEO and behavioral insights, every word is crafted to educate, persuade, and inspire action.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
  },
  subServices: [
    {
      title: 'SEO blog strategy, topic clustering and content briefs.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Landing pages, service pages, and product copy.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Email sequences, social captions, ad copy and funnel flows.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Human-written, AI-assisted, and conversion-optimized.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-2',
    subServicesClass: 'order-1',
  },
};

// Branding and Lead Generation data -->
export const brandingAndLeadGenerationData: TServices = {
  data: {
    title: '5. Branding & Lead Generation Campaigns',
    description:
      'We help you create a brand that stands out and a lead gen system that brings in qualified prospects daily. From the first click to the final sale, we engineer every step of the customer journey to build trust and drive conversions.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service10.png',
    imageAlt: 'facility-and-security-automation',
  },
  subServices: [
    {
      title: 'Brand identity, messaging and creative guidelines.',
      icon: 'hugeicons:ai-security-03',
    },
    {
      title: 'Lead magnets, opt-in flows, and personaligated content.',
      icon: 'material-symbols:sensors-rounded',
    },
    {
      title: 'Landing pages and nurturing sequences.',
      icon: 'ri:calendar-schedule-fill',
    },
    {
      title: 'Campaigns across social, email, paid media and more.',
      icon: 'material-symbols:dashboard-2-rounded',
    },
  ],
  styleClasses: {
    ServiceTitleAndDescriptionClass: 'order-1',
    subServicesClass: 'order-2',
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
    'Book your free strategy session today—we’ll map your growth roadmap from visibility to profitability.',
  image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/hexagon.png',
};
