'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, MotionProps, useScroll } from 'motion/react';

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[1px] origin-left bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#FBBF24]',
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = 'ScrollProgress';
