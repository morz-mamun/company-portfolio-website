import AiAutomationPage from '@/app/pages/ai-automation-page';
import { aiAutomationFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Automation & AI Multi-Agent Systems | TGCX AI Solutions',
  description:
    'TGCX delivers Automation & AI Multi-Agent Systems to streamline workflows, reduce costs, and scale businesses with real-time intelligence.',
};

export default function AiAutomation() {
  return (
    <>
      <AiAutomationPage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiAutomationFaqSchema),
        }}
      />
    </>
  );
}
