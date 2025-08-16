import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import {
  aiChatBotAndVoiceAssistantData,
  facilityAndSecurityAutomation,
  multiAgentOrchestrationData,
  servicesSectionTitleData,
  workflowAutomationData,
} from '@/constants/what-we-do-data/ai-automation-data';

export default function ExploreOurSolution() {
  return (
    <section className="md:pt-14">
      {/* section heading */}
      <SectionHeading title={servicesSectionTitleData} />
      <div className="space-y-14 border-y bg-[#FEFEFE] py-14 md:mt-14 md:space-y-32 dark:bg-[#030712]">
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
