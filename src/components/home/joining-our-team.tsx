import BorderXPattern from '../shared/border-x-pattern';
import { Icon } from '@iconify/react';
import SectionHeading from '../shared/section-heading';
import { socialMediaData } from '@/constants/social-media-data';

export default function JoiningOurTeam() {
  return (
    <section className="border px-4 md:px-6">
      <div className="relative border-x px-2 pt-10 pb-[50px] md:px-4 md:pt-[50px] md:pb-[80px] lg:px-10 lg:pt-[50px] lg:pb-[100px] xl:px-[120px] xl:pt-[70px] xl:pb-[150px]">
        <div className="flex flex-col items-center justify-center">
          <SectionHeading
            title="Join Our Team"
            description="We are hiring across a range of roles and expertise"
          />
          <div className="relative mt-10 flex w-full max-w-5xl overflow-hidden rounded-[2rem] border px-3 py-6 md:py-14 lg:px-10">
            <div className="z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row lg:gap-[74px]">
              <div className="space-y-4">
                <h3 className="font-inter text-2xl font-semibold md:text-3xl lg:text-[32px]">
                  Join us
                </h3>
                <p className="text-brand/70 text-sm md:text-base lg:text-lg dark:text-white/80">
                  We are hiring across a range of roles and expertise
                </p>
              </div>
              {/* right button */}
              <a
                href={socialMediaData?.linkedin}
                target="_blank"
                className="flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-b from-[#0908C3] to-[#0C34E9] px-6 py-3 text-xs font-semibold text-white shadow-[inset_2px_3px_9px_0_rgba(0,0,0,0.25)] backdrop-blur-[5px] transition duration-200 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-[#000EAC] hover:to-[#00163C] hover:font-bold hover:shadow-sm md:py-4 md:text-base"
              >
                <span className="text-sm md:text-base lg:text-xl">
                  View open positions
                </span>
                <Icon icon="icons8:right-round" width={18} height={18} />
              </a>
            </div>
            {/* transparent gradient */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black"></div>
          </div>
          {/* border x design */}
          <BorderXPattern className="-left-4 w-4 md:-left-6 md:w-6" />
          <BorderXPattern className="-right-4 w-4 md:-right-6 md:w-6" />
        </div>
      </div>
    </section>
  );
}
