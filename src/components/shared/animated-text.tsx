'use client';

import { motion } from 'framer-motion';

export default function AnimatedText({ data }: { data: string[] }) {
  return (
    <motion.div
      className="font-space-grotesk flex flex-wrap justify-center text-center text-3xl font-bold md:text-[50px]"
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
          className="dark:text-primary inline-block bg-[linear-gradient(to_bottom,_#100F0F,_#5C5B5B)] bg-clip-text text-transparent"
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
