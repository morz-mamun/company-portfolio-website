import WebAndSoftwareDevlopmentPage from '@/app/pages/web-software-development-page';
import { webSoftwareDevelopmentFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Web & Software Development Services | TGCX Technology Solutions',
  description:
    'TGCX provides Web & Software Development services to build secure, scalable websites, SaaS products, and enterprise applications for growth.',
};
export default function WebAndSoftwareDevlopment() {
  return (
    <>
      <WebAndSoftwareDevlopmentPage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSoftwareDevelopmentFaqSchema),
        }}
      />
    </>
  );
}
