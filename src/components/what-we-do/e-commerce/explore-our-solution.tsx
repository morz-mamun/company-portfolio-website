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
      <div className="space-y-14 border-y bg-[#FEFEFE] py-14 md:mt-14 md:space-y-32 dark:bg-[#030712]">
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
