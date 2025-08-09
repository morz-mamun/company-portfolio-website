import BorderXPattern from '../shared/border-x-pattern';
import { Button } from '../ui/button';
import { Icon } from '@iconify/react';

export default function JoiningOurTeam() {
  return (
    <section className="border-y px-6">
      <div className="relative border-x px-[120px] pt-[70px] pb-[150px]">
        <div className="flex flex-col items-center justify-center">
          <Button className="bg-brand dark:text-brand shadow-primary/60 hover:text-brand dark:hover:bg-brand mt-10 cursor-pointer rounded-full p-6 text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:font-bold dark:hover:text-white">
            Current Job Opening
          </Button>

          {/* title */}
          <h3 className="text-brand mt-2 text-[28px] font-semibold">
            Interested to join our team?
          </h3>

          <div className="mt-10 rounded-[12px] border-2 bg-[linear-gradient(to_right,_#F4F4F4,_#F0F0F0)] px-10 pt-10 pb-20">
            <div className="flex items-center justify-between gap-[74px]">
              <div className="space-y-4">
                <h3 className="text-[28px] font-semibold">Join us</h3>
                <p className="text-brand/70 text-xl">
                  We are hiring across a range of roles and expertise
                </p>
              </div>
              {/* right button */}

              <button className="group text-brand shadow-primary/60 hover:bg-brand flex cursor-pointer items-center gap-2 rounded-[17px] bg-[#FAFAFA] px-5 py-4 font-semibold shadow-lg duration-500 ease-in-out hover:text-white hover:transition">
                <span className="text-xl"> View open positions</span>
                <Icon
                  icon="icons8:right-round"
                  width={20}
                  height={20}
                  color="#7E7E7E"
                />
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
