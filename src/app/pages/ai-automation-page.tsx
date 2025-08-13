import AiAutomationBanner from '@/components/what-we-do/ai-automation/ai-automation-banner';
import ExploreOurSolution from '@/components/what-we-do/ai-automation/explore-our-solution/explore-our-solution';
import WhyChooseUs from '@/components/what-we-do/ai-automation/explore-our-solution/why-choose-us';
import ServiceDescription from '@/components/what-we-do/ai-automation/service-description';

export default function AiAutomationPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      {/* Banner Section */}
      <div className="mt-20 md:mt-28 lg:mt-32">
        <AiAutomationBanner />
      </div>
      {/* service description section */}
      <div className="mt-14">
        <ServiceDescription />
      </div>
      {/* explore our services / solutions */}
      <div className="my-14">
        <ExploreOurSolution />
      </div>
      {/* why client choose us */}
      <div className="my-14">
        <WhyChooseUs />
      </div>
    </main>
  );
}
