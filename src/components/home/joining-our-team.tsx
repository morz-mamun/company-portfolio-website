import PrimaryBtn from '../buttons/primary-btn';
import BorderXPattern from '../shared/border-x-pattern';
import { Icon } from '@iconify/react';

export default function JoiningOurTeam() {
  return (
    <section className="border-y px-4 md:px-6">
      <div className="relative border-x px-2 pt-10 pb-[50px] md:px-4 md:pt-[50px] md:pb-[80px] lg:px-[120px] lg:pt-[70px] lg:pb-[150px]">
        <div className="flex flex-col items-center justify-center">
          <PrimaryBtn title="Current Job Opening" iconName="" />

          {/* title */}
          <h3 className="text-brand dark:text-primary mt-2 text-xl font-semibold md:text-[28px]">
            Interested to join our team?
          </h3>

          <div className="mt-10 rounded-[12px] border-2 bg-[linear-gradient(to_right,_#F4F4F4,_#F0F0F0)] px-2 py-5 md:px-5 md:py-10 lg:px-10 lg:pb-20 dark:bg-[linear-gradient(to_right,#0D0D0D,#0D0D0D)]">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row lg:gap-[74px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold md:text-[28px]">
                  Join us
                </h3>
                <p className="text-brand/70 dark:text-primary/70 text-sm md:text-lg lg:text-xl">
                  We are hiring across a range of roles and expertise
                </p>
              </div>
              {/* right button */}
              <button className="group text-brand shadow-primary/60 hover:bg-brand flex cursor-pointer items-center gap-2 rounded-[17px] bg-[#FAFAFA] px-2 py-4 font-semibold shadow-lg duration-500 ease-in-out hover:text-white hover:transition md:w-[280px] lg:px-5 lg:py-4">
                <span className="text-sm md:text-lg lg:text-xl">
                  {' '}
                  View open positions
                </span>
                <Icon icon="icons8:right-round" width={18} height={18} />
              </button>
            </div>
          </div>
          {/* border x design */}
          <BorderXPattern className="-left-4 w-4 md:-left-6 md:w-6" />
          <BorderXPattern className="-right-4 w-4 md:-right-6 md:w-6" />
        </div>
      </div>
    </section>
  );
}
