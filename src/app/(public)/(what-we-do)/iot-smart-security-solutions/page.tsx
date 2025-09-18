import IotSmartSecurityPage from '@/app/pages/iot-smart-security-page';
import { iotSmartSecuritySolutionFaqSchema } from '@/lib/seo/faq-schema';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'IoT & Smart Security Solutions | TGCX AI Solutions',
  description:
    'TGCX delivers IoT & Smart Security Solutions with AI-powered surveillance, biometrics, and cloud monitoring to protect businesses 24/7.',
};
export default function AiAutomation() {
  return (
    <>
      <IotSmartSecurityPage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(iotSmartSecuritySolutionFaqSchema),
        }}
      />
    </>
  );
}
