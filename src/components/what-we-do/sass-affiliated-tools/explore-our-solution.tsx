import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import {
  affiliateTrackingDashboardsData,
  ecommerceFunnelsAndIntegrationsData,
  microSaaSDevelopmentData,
  servicesSectionTitleData,
  subscriptionAndPaymentSystemsData,
} from '@/constants/what-we-do-data/saas-affiliated-tools-data';

export default function ExploreOurSolution() {
  return (
    <section className="pt-14">
      {/* section heading */}
      <SectionHeading title={servicesSectionTitleData} />
      <div className="space-y-14 border-y bg-[#FEFEFE] py-14 md:mt-14 md:space-y-32">
        {/* Ai Chatbot and Voice Assistant */}
        <Service sectionData={microSaaSDevelopmentData} />
        {/* Workflow Automation */}
        <Service sectionData={affiliateTrackingDashboardsData} />
        {/* Multi-Agent Orchestration */}
        <Service sectionData={ecommerceFunnelsAndIntegrationsData} />
        {/* Facility and Security Automation */}
        <Service sectionData={subscriptionAndPaymentSystemsData} />
      </div>
    </section>
  );
}
