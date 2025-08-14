import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import {
  fullStackWebAndAppDevelopmentData,
  ongoinTechnicalSupportAndMaintenanceData,
  softwareArchitectureAndIntegrationData,
  webPortalsCmsAndApisData,
} from '@/constants/what-we-do-data/web-software-development-data';

export default function ExploreOurSolution() {
  return (
    <section className="pt-14">
      {/* section heading */}
      <SectionHeading title="Explore Our Solutions" />
      <div className="mt-14 space-y-32 border-y bg-[#FEFEFE] py-14">
        {/* Ai Chatbot and Voice Assistant */}
        <Service sectionData={fullStackWebAndAppDevelopmentData} />
        {/* Workflow Automation */}
        <Service sectionData={webPortalsCmsAndApisData} />
        {/* Multi-Agent Orchestration */}
        <Service sectionData={softwareArchitectureAndIntegrationData} />
        {/* Facility and Security Automation */}
        <Service sectionData={ongoinTechnicalSupportAndMaintenanceData} />
      </div>
    </section>
  );
}
