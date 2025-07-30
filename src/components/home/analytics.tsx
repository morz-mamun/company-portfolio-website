const analytics = [
  {
    count: '250+',
    description: 'projects completed',
  },
  {
    count: '100+',
    description: 'clients served',
  },
  {
    count: '30+',
    description: 'industries served in',
  },
  {
    count: '15+',
    description: 'years of experiences',
  },
];

export default function Analytics() {
  return (
    <section className="mb-[70px] px-20">
      <div className="bg-black px-[105px] pt-5 pb-[74px] text-white">
        <h3 className="text-[50px] leading-[76px] font-bold">Analytics</h3>
        {/* Analytics content */}
        <div className="mt-[28px] flex justify-between">
          {analytics.map((item, index) => (
            <div key={index}>
              <h4 className="text-[50px] font-bold">{item.count}</h4>
              <p className="text-[19px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
