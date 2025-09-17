import SaasAffiliatedToolsPage from '@/app/pages/saas-affiliated-tools-page';
import { saasAutomationToolsFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'SaaS Products & Automation Tools | TGCX Software Experts',
  description:
    'TGCX develops SaaS Products & Automation Tools that reduce manual work, improve business processes, and accelerate digital transformation.',
};
export default function AiAutomation() {
  return (
    <>
      <SaasAffiliatedToolsPage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(saasAutomationToolsFaqSchema),
        }}
      />
    </>
  );
}
