import PrimaryBtn from '../shared/primary-btn';

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden px-20 pt-[93px] text-white">
      <div
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#00000073]" />
      </div>
      {/* content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Banner Heading */}
        <h1 className="mb-5 max-w-[1045px] text-6xl leading-[76px] font-bold">
          Empowering Business with <br /> AI automation, Digital Marketing &
          Technology solutions.
        </h1>
        {/* Banner Description */}
        <p className="mb-[67px] max-w-[782px] text-[25px] leading-[40px]">
          We build smarter systems, powerful websites and scalable automation
          workflows for modern brands, e-commerce stores and SaaS platforms
          across the U.S and beyond.
        </p>

        {/* Schedule a Call Button */}
        <PrimaryBtn label="Schedule a Call" className="w-fit" />
      </div>
    </section>
  );
}
