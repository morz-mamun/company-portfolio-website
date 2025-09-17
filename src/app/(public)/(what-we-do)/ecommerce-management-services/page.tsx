import ECommercePage from '@/app/pages/e-commerce-page';
import { ecommerceManagementServiceFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'E-commerce Management Services | TGCX Growth Solutions',
  description:
    'TGCX provides E-commerce Management Services to optimize online stores, manage inventory, and increase sales with data-driven strategies.',
};
export default function AiAutomation() {
  return (
    <>
      <ECommercePage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecommerceManagementServiceFaqSchema),
        }}
      />
    </>
  );
}
