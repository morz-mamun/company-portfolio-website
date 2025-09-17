import DigitalMarketingAndSeoPage from '@/app/pages/digital-marketing-seo-page';
import { digitalMarketingSeoFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Digital Marketing & SEO Services | TGCX Growth Experts',
  description:
    'TGCX offers Digital Marketing & SEO services to increase online visibility, drive traffic, and boost ROI with AI-powered marketing strategies.',
};
export default function AiAutomation() {
  return (
    <>
      <DigitalMarketingAndSeoPage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(digitalMarketingSeoFaqSchema),
        }}
      />
    </>
  );
}
