import EmergingApiServicesPage from '@/app/pages/emerging-ai-services-page';
import { emergingAiServicesFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Emerging AI Services (Future-Ready) | TGCX AI Solutions',
  description:
    'TGCX offers Emerging AI Services with generative AI, predictive analytics, and next-gen innovations to keep businesses future-ready.',
};
export default function AiAutomation() {
  return (
    <>
      <EmergingApiServicesPage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emergingAiServicesFaqSchema),
        }}
      />
    </>
  );
}
