import { ComponentPropsWithoutRef, CSSProperties, FC } from 'react';

import { cn } from '@/lib/utils';

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<'span'> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          '--shiny-width': `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        'font-inter mx-auto max-w-md font-medium text-black dark:text-white',

        // Shine effect
        'animate-shiny-text rounded-full [background-size:var(--shiny-width)_100%] [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',

        // Shine gradient
        'bg-gradient-to-r from-transparent via-[#ced5f1] via-50% to-transparent dark:via-[#323a60] dark:via-50% dark:to-transparent',

        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
