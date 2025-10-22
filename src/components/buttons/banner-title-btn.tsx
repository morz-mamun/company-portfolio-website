import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { ArrowRightIcon } from 'lucide-react';
export default function BannerTitleBtn() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          'group dark:bg-background rounded-full border border-black/5 bg-neutral-100 text-xs text-white transition-all ease-in hover:cursor-pointer md:text-base dark:border-white/5',
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <p className="flex items-center gap-2">
            <Icon
              className="animate-pulse"
              icon="ix:ai"
              width="20"
              height="20"
            />{' '}
            Introducing Trust Global Communications
          </p>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>
    </div>
  );
}
