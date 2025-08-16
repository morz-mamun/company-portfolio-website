import SectionHeading from '@/components/shared/section-heading';
import Service from '../shared/service/service';
import {
  cybersecurityForWebsitesAndIoTDevicesData,
  industrialAndOfficeAutomationData,
  iotAccessControlAndRealTimeMonitoringData,
  smartAlarmsSensorsAndSurveillanceData,
} from '@/constants/what-we-do-data/iot-smart-security-data';

export default function ExploreOurSolution() {
  return (
    <section className="pt-14">
      {/* section heading */}
      <SectionHeading title="Explore Our Solutions" />
      <div className="space-y-14 border-y bg-[#FEFEFE] py-14 md:mt-14 md:space-y-32 dark:bg-[#030712]">
        {/* Ai Chatbot and Voice Assistant */}
        <Service sectionData={iotAccessControlAndRealTimeMonitoringData} />
        {/* Workflow Automation */}
        <Service sectionData={smartAlarmsSensorsAndSurveillanceData} />
        {/* Multi-Agent Orchestration */}
        <Service sectionData={cybersecurityForWebsitesAndIoTDevicesData} />
        {/* Facility and Security Automation */}
        <Service sectionData={industrialAndOfficeAutomationData} />
      </div>
    </section>
  );
}
