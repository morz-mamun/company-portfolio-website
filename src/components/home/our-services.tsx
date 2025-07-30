const whatWeDo = [
  {
    serviceName: 'Digital Marketing',
    description: 'Maximize your ROI with a driven ad campaigns.',
  },
  {
    serviceName: 'SEO',
    description: 'Boost your organic traffic and search rankings.',
  },
  {
    serviceName: 'Email Marketing',
    description: 'Automate personalize email campaigns for higher engagement.',
  },
  {
    serviceName: 'Social Media Marketing',
    description: 'Leverage all insights to optimize our social strategy.',
  },
];

const otherServices = [
  {
    serviceName: 'Saas Solutions',
    description: 'Develop and scale AI-powered Saas Applications',
  },
  {
    serviceName: 'AI Automation',
    description: 'Streamline business processes with intelligent automation',
  },
  {
    serviceName: 'Sales Automation',
    description: 'Enhance your sales process using AI-powered tools.',
  },
];

export default function OurServices() {
  return (
    <section className="mt-[60px] mb-[74px] flex justify-between px-20">
      {/* left side content */}
      <div className="max-w-[565px]">
        {/* heading */}
        <SectionHeading title="What we do" />
        {/* service list */}
        <div className="flex flex-col gap-5">
          {whatWeDo?.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="text-[30px] leading-[76px] font-semibold">
                  {item?.serviceName}
                </h3>
                <p className="text-2xl">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* right side content */}
      <div className="max-w-[493px]">
        <div className="mb-[63px]">
          <SectionHeading title="Who we are" />
          <p className="mt-3 text-2xl leading-[40px]">
            Trust Global is an AI-powered digital marketing agency dedicated to
            helping businesses achieve growth through innovative automation
            solutions.
          </p>
        </div>
        {/* others services */}
        <div>
          <SectionHeading title="Other Services" />
          <div className="flex flex-col gap-5">
            {otherServices?.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className="text-[30px] leading-[76px] font-semibold">
                    {item?.serviceName}
                  </h3>
                  <p className="text-2xl">{item?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reuseable heading
const SectionHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="bg-brand w-fit px-10 py-4 text-[50px] leading-[76px] font-bold text-white">
      {title}
    </h2>
  );
};
