import HomePage from '@/app/pages/homePage';
import { homeFaqSchema } from '@/lib/seo/faq-schema/home';
import Script from 'next/script';

export default async function Home() {
  return (
    <>
      <HomePage />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqSchema),
        }}
      />
    </>
  );
}
