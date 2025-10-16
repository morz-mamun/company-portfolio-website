'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import { termsAndConditionsBannerData } from '@/constants/banner-data/terns-and-condition-banner-data';

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'our-values', title: 'Our Values' },
  { id: 'why-we-process', title: 'Why We Process Your Information' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'sharing-information', title: 'Sharing Your Information' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'security', title: 'Security' },
  { id: 'contact-us', title: 'Contact Us' },
];

export function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const intersectingSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingSections.set(
              entry.target.id,
              entry.boundingClientRect.top,
            );
          } else {
            intersectingSections.delete(entry.target.id);
          }
        });

        if (intersectingSections.size > 0) {
          const closestSection = Array.from(
            intersectingSections.entries(),
          ).reduce((closest, current) => {
            return Math.abs(current[1]) < Math.abs(closest[1])
              ? current
              : closest;
          });
          setActiveSection(closestSection[0]);
        }
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main>
      <BannerTitleAndDescription
        sectionData={termsAndConditionsBannerData}
        className="!h-[200px] md:!h-[250px] lg:!h-[300px]"
      />
      {/* Main Content */}
      <div className="bg-background min-h-screen">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-4 lg:gap-12">
            {/* Sidebar */}
            <aside className="hidden w-64 shrink-0 md:block xl:w-72">
              <div className="sticky top-16 pt-12">
                <nav className="space-y-1">
                  <h2 className="font-inter text-foreground mb-4 px-3 text-xl font-semibold">
                    Table of Contents
                  </h2>
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        'block w-full rounded-md px-3 py-2 text-left text-sm transition-colors',
                        activeSection === section.id
                          ? 'text-foreground bg-muted font-medium dark:bg-gradient-to-b dark:from-[#0908C3] dark:to-[#0C34E9]'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                      )}
                    >
                      <span className="text-muted-foreground mr-2">
                        {index + 1}.
                      </span>
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="min-w-0 flex-1 px-6 py-12 md:py-22 lg:px-8 lg:py-24">
              <div className="max-w-3xl">
                <section id="introduction" className="mb-12 scroll-mt-20">
                  <h1 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Introduction
                  </h1>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      In our mission to make commerce better for everyone at
                      Shopify, we collect and use information about you, our:
                    </p>
                    <ul className="text-foreground/80 space-y-4">
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Merchants using Shopify
                        </strong>{' '}
                        to power their business
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Customers
                        </strong>{' '}
                        who shop at a Shopify-powered business
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Partners who
                        </strong>{' '}
                        develop apps for merchants to use, build stores on
                        behalf of merchants, refer potential entrepreneurs to
                        Shopify, or otherwise help merchants operate or improve
                        their Shopify-powered business
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Users of
                        </strong>{' '}
                        Shopify apps and services like Shop or Shop Pay
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Visitors to
                        </strong>{' '}
                        Shopify&apos;s websites, or anyone contacting Shopify
                        support
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="our-values" className="mb-12 scroll-mt-20">
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Our Values
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      Trust is the foundation of the Shopify platform and
                      includes trusting us to do the right thing with your
                      information. We believe in transparency and want you to
                      understand what information we collect, why we collect it,
                      and how we use it.
                    </p>
                    <p className="text-foreground/90 text-lg leading-relaxed">
                      This Privacy Policy describes our privacy practices in
                      plain language, keeping legal and technical jargon to a
                      minimum. We also provide links to resources that allow you
                      to learn more about the privacy and security practices of
                      Shopify.
                    </p>
                  </div>
                </section>

                <section id="why-we-process" className="mb-12 scroll-mt-20">
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Why We Process Your Information
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      We generally process your information when we need to do
                      so to fulfill a contractual obligation, or where we or
                      someone we work with needs to use your personal
                      information for a reason related to their business.
                    </p>
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      European data protection laws provide specific reasons for
                      processing personal information, including:
                    </p>
                    <ul className="text-foreground/80 space-y-3">
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Consent:
                        </strong>{' '}
                        You have given clear consent for us to process your
                        personal information for a specific purpose
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Contract:
                        </strong>{' '}
                        Processing is necessary to fulfill a contract with you
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Legal obligation:
                        </strong>{' '}
                        Processing is necessary for us to comply with the law
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Legitimate interests:
                        </strong>{' '}
                        Processing is necessary for our legitimate interests or
                        the legitimate interests of a third party
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="information-we-collect"
                  className="mb-12 scroll-mt-20"
                >
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Information We Collect
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      We collect information about you when you use our
                      services. This includes information you provide to us,
                      information we collect automatically, and information we
                      receive from third parties.
                    </p>
                    <div className="bg-muted mb-4 rounded-lg p-6">
                      <h3 className="text-foreground mb-3 text-xl font-semibold">
                        Information You Provide
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Account information, payment details, business
                        information, and any other information you choose to
                        provide when using our services or contacting our
                        support team.
                      </p>
                    </div>
                    <div className="bg-muted mb-4 rounded-lg p-6">
                      <h3 className="text-foreground mb-3 text-xl font-semibold">
                        Automatically Collected Information
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Device information, log data, usage information, and
                        location data collected through cookies and similar
                        technologies when you use our services.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                      <h3 className="text-foreground mb-3 text-xl font-semibold">
                        Information from Third Parties
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Information from partners, service providers, and
                        publicly available sources that help us provide and
                        improve our services.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="how-we-use" className="mb-12 scroll-mt-20">
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    How We Use Your Information
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      We use your information to provide, maintain, and improve
                      our services, including:
                    </p>
                    <ul className="text-foreground/80 space-y-3">
                      <li className="leading-relaxed">
                        Processing transactions and sending related information
                      </li>
                      <li className="leading-relaxed">
                        Providing customer service and support
                      </li>
                      <li className="leading-relaxed">
                        Sending technical notices, updates, and security alerts
                      </li>
                      <li className="leading-relaxed">
                        Responding to your comments and questions
                      </li>
                      <li className="leading-relaxed">
                        Analyzing usage patterns to improve our services
                      </li>
                      <li className="leading-relaxed">
                        Detecting and preventing fraud and abuse
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="sharing-information"
                  className="mb-12 scroll-mt-20"
                >
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Sharing Your Information
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      We share your information only in the ways described in
                      this Privacy Policy. We do not sell your personal
                      information to third parties.
                    </p>
                    <p className="text-foreground/90 text-lg leading-relaxed">
                      We may share your information with service providers who
                      help us operate our business, partners who help merchants
                      build their businesses, and when required by law or to
                      protect our rights.
                    </p>
                  </div>
                </section>

                <section id="your-rights" className="mb-12 scroll-mt-20">
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Your Rights
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      Depending on where you live, you may have certain rights
                      regarding your personal information, including:
                    </p>
                    <ul className="text-foreground/80 space-y-3">
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Access:
                        </strong>{' '}
                        Request access to your personal information
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Correction:
                        </strong>{' '}
                        Request correction of inaccurate information
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Deletion:
                        </strong>{' '}
                        Request deletion of your personal information
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Portability:
                        </strong>{' '}
                        Request a copy of your information in a portable format
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Objection:
                        </strong>{' '}
                        Object to processing of your information
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="data-retention" className="mb-12 scroll-mt-20">
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Data Retention
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      We retain your information for as long as necessary to
                      provide our services, comply with legal obligations,
                      resolve disputes, and enforce our agreements.
                    </p>
                    <p className="text-foreground/90 text-lg leading-relaxed">
                      When we no longer need your information, we securely
                      delete or anonymize it in accordance with our data
                      retention policies and applicable laws.
                    </p>
                  </div>
                </section>

                <section id="security" className="mb-12 scroll-mt-20">
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Security
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      We take the security of your information seriously and use
                      appropriate technical and organizational measures to
                      protect it against unauthorized access, alteration,
                      disclosure, or destruction.
                    </p>
                    <p className="text-foreground/90 text-lg leading-relaxed">
                      However, no method of transmission over the internet or
                      electronic storage is 100% secure. While we strive to
                      protect your information, we cannot guarantee its absolute
                      security.
                    </p>
                  </div>
                </section>

                <section id="contact-us" className="mb-12 scroll-mt-20">
                  <h2 className="font-inter text-foreground mb-4 text-2xl font-bold text-balance lg:text-3xl">
                    Contact Us
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/90 mb-4 text-lg leading-relaxed">
                      If you have any questions about this Privacy Policy or our
                      privacy practices, please contact us at:
                    </p>
                    <div className="bg-muted rounded-lg p-6">
                      <p className="text-foreground/80 mb-2 leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Email:
                        </strong>{' '}
                        privacy@company.com
                      </p>
                      <p className="text-foreground/80 mb-2 leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Address:
                        </strong>{' '}
                        123 Privacy Street, Suite 100, San Francisco, CA 94102
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        <strong className="text-foreground font-semibold">
                          Phone:
                        </strong>{' '}
                        +1 (555) 123-4567
                      </p>
                    </div>
                    <p className="text-muted-foreground mt-8 text-sm">
                      Last updated: January 15, 2025
                    </p>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
