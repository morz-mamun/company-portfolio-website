import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';

import {
  brandingAndLeadGenerationData,
  contentStrategyData,
  paidAdsData,
  seoData,
  servicesSectionTitleData,
  socialMediaData,
} from '@/constants/what-we-do-data/digital-marketing-seo-data';

export default function ExploreOurSolution() {
  return (
    <section className="pt-14">
      {/* section heading */}
      <SectionHeading title={servicesSectionTitleData} />
      <div className="space-y-14 border-y bg-[#FEFEFE] py-14 md:mt-14 md:space-y-32 dark:bg-[#030712]">
        {/* seo and marketing */}
        <Service sectionData={seoData} />
        {/* Workflow Automation */}
        <Service sectionData={paidAdsData} />
        {/* Multi-Agent Orchestration */}
        <Service sectionData={socialMediaData} />
        {/* Facility and Security Automation */}
        <Service sectionData={contentStrategyData} />
        {/* Branding and Lead Generation */}
        <Service sectionData={brandingAndLeadGenerationData} />
      </div>
    </section>
  );
}
