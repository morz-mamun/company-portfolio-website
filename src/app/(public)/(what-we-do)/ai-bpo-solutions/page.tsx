import AiBpoSolutionsPage from '@/app/pages/ai-bpo-solutions-page';
import { aiBpoSolutionFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'AI BPO Solutions for Outsourcing | TGCX AI Solutions',
  description:
    'TGCX offers AI BPO Solutions combining automation and skilled teams to streamline outsourcing, cut costs, and deliver faster results.',
};
export default function AiAutomation() {
  return (
    <>
      <AiBpoSolutionsPage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiBpoSolutionFaqSchema),
        }}
      />
    </>
  );
}
