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
      <div className="mt-14 space-y-32 border-y bg-[#FEFEFE] py-14">
        {/* Ai Chatbot and Voice Assistant */}
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
