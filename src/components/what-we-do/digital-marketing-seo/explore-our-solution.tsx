import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import {
  aiChatBotAndVoiceAssistantData,
  facilityAndSecurityAutomation,
  multiAgentOrchestrationData,
  workflowAutomationData,
} from '@/constants/what-we-do-data/ai-automation-data';
import { servicesSectionTitleData } from '@/constants/what-we-do-data/digital-marketing-seo-data';

export default function ExploreOurSolution() {
  return (
    <section className="pt-14">
      {/* section heading */}
      <SectionHeading title={servicesSectionTitleData} />
      <div className="mt-14 space-y-32 border-y bg-[#FEFEFE] py-14">
        {/* Ai Chatbot and Voice Assistant */}
        <Service sectionData={aiChatBotAndVoiceAssistantData} />
        {/* Workflow Automation */}
        <Service sectionData={workflowAutomationData} />
        {/* Multi-Agent Orchestration */}
        <Service sectionData={multiAgentOrchestrationData} />
        {/* Facility and Security Automation */}
        <Service sectionData={facilityAndSecurityAutomation} />
      </div>
    </section>
  );
}
