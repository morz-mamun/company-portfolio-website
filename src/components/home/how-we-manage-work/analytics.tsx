'use client';
import { startCounting } from '@/utils/startCounting';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const Analytics = () => {
  const countRef = useRef(null);
  const [count, setCount] = useState(0);
  const end = 349;

  // Loop the counter when it ends
  useEffect(() => {
    let isCancelled = false;
    const animateLoop = async () => {
      while (!isCancelled) {
        await startCounting(end, setCount);
        await new Promise((r) => setTimeout(r, 1000)); // Wait before restarting
        setCount(0);
      }
    };
    animateLoop();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="group relative cursor-pointer overflow-hidden border border-r-0 border-b border-l-0 md:border-r md:border-b-0">
      <div
        className="relative flex size-full h-[300px] items-center justify-center overflow-hidden border-red-600 pt-10 md:h-[220px] lg:h-[300px]"
        style={{ '--color': 'rgba(21, 93, 252, 1)' } as React.CSSProperties}
      >
        {/* Vertical Line */}
        <div className="absolute top-[60%] left-1/2 h-32 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[var(--color)] to-[var(--color-transparent)] opacity-100" />

        {/* Animated Number */}
        <div
          ref={countRef}
          className="absolute top-32 left-[42%] flex h-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.07] bg-[#1A1B25] px-4 py-1 font-mono text-sm text-white opacity-100 shadow transition-opacity duration-300 ease-in-out md:top-22 md:left-[35%] lg:top-32 lg:left-[42%]"
        >
          <p className="w-10 text-center">{count}</p>
        </div>

        {/* SVG Wave Chart */}
        <svg
          width="600"
          height="200"
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(21, 93, 252, 0.3)"></stop>
              <stop offset="100%" stopColor="rgba(21, 93, 252, 0)"></stop>
            </linearGradient>
          </defs>

          {/* Wave fill */}
          <path
            d="M 0 157.33333333333331 C 20,153.06666666666666 60,138.13333333333333 100,136 C 120,138.13333333333333 160,153.0666666666667 200,146.66666666666669 C 220,138.13333333333335 260,110.4 300,104 C 320,106.13333333333333 360,118.93333333333332 400,114.66666666666666 C 420,108.26666666666667 460,97.60000000000001 500,82.66666666666667 L 600 40 L 600,200 L 0,200 Z"
            fill="url(#lineGradient)"
            opacity="1"
            style={{
              transformOrigin: '300px 120px',
              transform: 'none',
            }}
          />

          {/* Stroke line */}
          <path
            d="M 0 157.33333333333331 C 20,153.06666666666666 60,138.13333333333333 100,136 C 120,138.13333333333333 160,153.0666666666667 200,146.66666666666669 C 220,138.13333333333335 260,110.4 300,104 C 320,106.13333333333333 360,118.93333333333332 400,114.66666666666666 C 420,108.26666666666667 460,97.60000000000001 500,82.66666666666667 L 600 40"
            stroke="rgba(21, 93, 252, 1)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1px 1px"
            strokeDashoffset="0px"
          />

          {/* Main dot */}
          <circle
            cx="300"
            cy="104"
            r="4"
            fill="rgba(21, 93, 252, 1)"
            opacity="1"
          />

          {/* Animated Ripple Circles */}
          {[1.9, 1.5, 0.8].map((scale, idx) => (
            <motion.circle
              key={idx}
              cx="300"
              cy="104"
              r="10"
              stroke="rgba(21, 93, 252, 1)"
              strokeWidth="2"
              fill="none"
              initial={{ scale, opacity: 0.6 }}
              animate={{
                scale: [scale, scale + 0.2],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeOut',
                delay: idx * 0.5,
              }}
            />
          ))}
        </svg>
      </div>
      {/* bottom content */}
      <div className="max-w-[544px] space-y-2 p-2 transition-transform duration-300 group-hover:-translate-y-8 lg:mx-2">
        <h4 className="font-space-grotesk text-lg font-bold md:text-xl lg:text-2xl">
          Analytics
        </h4>
        <p className="text-brand dark:text-primary mt-0 text-xs md:mt-8 md:text-sm lg:mt-0 lg:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
