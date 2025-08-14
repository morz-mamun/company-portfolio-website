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
      <div className="mt-14 space-y-32 border-y bg-[#FEFEFE] py-14">
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
