import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import BorderXPattern from '@/components/shared/border-x-pattern';
import {
  aiBpoSolutionsData,
  aiLeadGenerationAndSalesSupportData,
  backOfficeProcessOutsourcingData,
  customerSupportAndHelpdeskOutsourcingData,
  servicesSectionTitleData,
  technicalSupportOutsourcingData,
} from '@/constants/what-we-do-data/ai-bpo-solutions-data';

export default function ExploreOurSolution() {
  return (
    <section className="relative md:pt-14">
      {/* section heading */}
      <SectionHeading
        title={servicesSectionTitleData}
        descriptionClassName="md:mb-14"
      />
      {/* py-14 md:mt-14 space-y-14 md:space-y-32 */}
      <div className="relative border bg-[#FEFEFE] px-4 md:px-6 dark:bg-[#030712]">
        <div className="relative space-y-14 border-x py-14 md:space-y-32">
          {/* Ai Chatbot and Voice Assistant */}
          <Service sectionData={aiBpoSolutionsData} />
          {/* Workflow Automation */}
          <Service sectionData={customerSupportAndHelpdeskOutsourcingData} />
          {/* Multi-Agent Orchestration */}
          <Service sectionData={backOfficeProcessOutsourcingData} />
          {/* Facility and Security Automation */}
          <Service sectionData={technicalSupportOutsourcingData} />
          {/* Voice and Chatbot Assistant */}
          <Service sectionData={aiLeadGenerationAndSalesSupportData} />

          {/* border-x pattern design */}
          <BorderXPattern className="absolute top-0 -left-4 w-4 md:-left-44 md:w-44" />
          <BorderXPattern className="absolute top-0 -right-4 w-4 md:-right-44 md:w-44" />
        </div>
      </div>
    </section>
  );
}
