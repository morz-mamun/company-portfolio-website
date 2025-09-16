'use client';

import { motion } from 'framer-motion';

export default function AnimatedText({ data }: { data: string[] | undefined }) {
  return (
    <motion.div
      className="font-inter flex flex-wrap justify-center text-center text-[17px] font-bold md:text-3xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Delay between each child animation
            delayChildren: 0.1, // Delay before the first child starts animating
          },
        },
      }}
    >
      {data?.map((part, index) => (
        <motion.span
          key={index}
          className="dark:text-primary inline-block bg-gradient-to-b from-[#011659] via-[#0A2F89] to-[#1F55BB] bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-[#3B82F6] dark:via-[#274690] dark:to-[#1A2A6C]"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: 'easeOut',
              },
            },
          }}
        >
          {part}
          {index < data?.length - 1 && ' '} {/* Add space between parts */}
        </motion.span>
      ))}
    </motion.div>
  );
}
