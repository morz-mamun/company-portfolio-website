import PrimaryBtn from '@/components/buttons/primary-btn';
import { TLetsBuildFutureBusiness } from '@/constants/what-we-do-data/ai-automation-data';
export default function LetsBuildFutureBusiness({
  sectionData,
}: {
  sectionData: TLetsBuildFutureBusiness;
}) {
  return (
    <div className="py-10 lg:py-14">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 py-10 md:px-10 md:py-[60px] lg:py-[120px]">
        <div className="z-10 mt-4 flex flex-col items-center text-center text-black">
          <h3 className="font-space-grotesk mb-4 max-w-4xl text-2xl font-bold md:text-3xl lg:text-[42px]">
            {sectionData?.title}
          </h3>
          <p className="mb-4 text-sm font-medium md:text-base">
            {sectionData?.description}
          </p>
          <PrimaryBtn
            title="Contact Now"
            iconName="icons8:right-round"
            className="mt-5"
          />
        </div>
        {/* Rotated marquee group */}
        <div className="absolute h-full w-full">
          <div className="group overflow-hidden[--duration:20s] flex h-full flex-col [--gap:1rem]">
            <img
              className="h-full object-cover"
              src={sectionData?.image}
              alt="background-image"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-white to-70% dark:h-full dark:from-transparent dark:to-black/70"></div>
      </div>
    </div>
  );
}
