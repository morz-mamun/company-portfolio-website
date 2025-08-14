import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import {
  affiliateOptimizationAndLinkManagementData,
  dropshippingAndInventoryAutomationData,
  productResearchAndTrendAnalysisData,
  servicesSectionTitleData,
  shopifyWooCommerceData,
} from '@/constants/what-we-do-data/e-commerce-data';

export default function ExploreOurSolution() {
  return (
    <section className="pt-14">
      {/* section heading */}
      <SectionHeading title={servicesSectionTitleData} />
      <div className="mt-14 space-y-32 border-y bg-[#FEFEFE] py-14">
        {/* Ai Chatbot and Voice Assistant */}
        <Service sectionData={shopifyWooCommerceData} />
        {/* Workflow Automation */}
        <Service sectionData={productResearchAndTrendAnalysisData} />
        {/* Multi-Agent Orchestration */}
        <Service sectionData={dropshippingAndInventoryAutomationData} />
        {/* Facility and Security Automation */}
        <Service sectionData={affiliateOptimizationAndLinkManagementData} />
      </div>
    </section>
  );
}
