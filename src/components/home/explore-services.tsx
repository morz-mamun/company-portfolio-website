'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '../shared/section-heading';
import { exploreServices } from '@/constants/explore-services-data';
import { Ripple } from '../magicui/ripple';

export default function ExploreServices() {
  const [isExploring, setIsExploring] = useState(false);
  const [visibleSubServices, setVisibleSubServices] = useState<{
    [key: string]: boolean;
  }>({});
  const [servicesAnimated, setServicesAnimated] = useState(false);

  const toggleExplore = () => {
    if (isExploring) {
      // Animate out subservices first
      exploreServices?.forEach((service, serviceIndex) => {
        service?.subServices.slice(0, 2).forEach((_, subIndex) => {
          setTimeout(
            () => {
              setVisibleSubServices((prev) => ({
                ...prev,
                [`${service.id}-${subIndex}`]: false,
              }));
            },
            serviceIndex * 200 + subIndex * 150,
          );
        });
      });

      // After animations end, hide everything
      setTimeout(() => {
        setIsExploring(false);
        setVisibleSubServices({});
      }, 800); // matches exit animation duration
    } else {
      setIsExploring(true);

      // Animate in subservices with stagger
      exploreServices?.forEach((service, serviceIndex) => {
        service?.subServices.slice(0, 2).forEach((_, subIndex) => {
          setTimeout(
            () => {
              setVisibleSubServices((prev) => ({
                ...prev,
                [`${service.id}-${subIndex}`]: true,
              }));
            },
            serviceIndex * 300 + subIndex * 150,
          );
        });
      });
    }
  };

  return (
    <section className="pt-10 lg:pt-20">
      {/* Section heading */}
      <SectionHeading
        title="Find The Right Service"
        description="Click a service to explore our AI, software, and digital solutions designed to help your business succeed."
        descriptionClassName="lg:mb-20 mb-10 lg:max-w-[850px] xl:!max-w-[974px]"
      />

      <div className="bg-[#F9F9F9] backdrop-blur-[5px] lg:pt-10 dark:bg-[#030712]">
        <div className="relative mx-auto h-[500px] max-w-5xl overflow-hidden md:h-[700px]">
          {/* Central Toggle Button */}
          <motion.div
            className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: 'easeOut' },
            }}
            viewport={{ once: false }}
            onViewportEnter={() => setServicesAnimated(true)}
          >
            <button
              onClick={toggleExplore}
              className="group relative h-20 w-20 cursor-pointer rounded-full border-1 bg-gradient-to-t from-[#19DDDD] via-[#BDFF7C] to-[#E51177] p-0.5 shadow-[0_1px_1px_4px_rgba(255,109,184,0.20)] transition duration-300 ease-out hover:scale-105 md:h-32 md:w-32 lg:h-40 lg:w-40"
            >
              {/* Gradient Glow Layer */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-t from-[#19DDDD] via-[#BDFF7C] to-[#E51177] opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#030712]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isExploring ? 'services' : 'explore'}
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="font-inter text-sm font-bold md:text-2xl lg:text-3xl"
                  >
                    {isExploring ? 'Services' : 'Explore'}
                  </motion.span>
                </AnimatePresence>
              </div>
            </button>
          </motion.div>

          {/* Background Ripple Effect */}
          <Ripple />

          {/* Service Items */}
          {exploreServices?.map((service, index) => (
            <motion.div
              key={service.id}
              className={`absolute transition-all duration-[1200ms] ease-out ${
                servicesAnimated
                  ? `opacity-100 ${service.position} scale-100`
                  : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <div className="relative">
                  <div
                    className={`h-2 w-2 rounded-full md:h-3 md:w-3 ${service.color}`}
                  />
                  {!isExploring && servicesAnimated && (
                    <div
                      className={`absolute inset-0 h-2 w-2 rounded-full md:h-3 md:w-3 ${service.color} animate-ping opacity-75`}
                    />
                  )}
                </div>
                <span className="text-[10px] font-medium whitespace-nowrap md:text-sm">
                  {service.name}
                </span>
              </div>

              {isExploring && (
                <div className="absolute ml-3 w-[180px] md:top-6 md:w-[270px]">
                  {service.subServices
                    .slice(0, 2)
                    .map((subService, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                          opacity: visibleSubServices[
                            `${service.id}-${subIndex}`
                          ]
                            ? 1
                            : 0,
                          y: visibleSubServices[`${service.id}-${subIndex}`]
                            ? 0
                            : -20,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] text-gray-600 md:py-1.5 md:text-xs dark:text-gray-400"
                      >
                        • {subService}
                      </motion.div>
                    ))}

                  {service.subServices.length > 2 && (
                    <Link
                      href={service?.link}
                      className="cursor-pointer text-[10px] text-gray-600 hover:text-gray-800 md:py-1.5 md:text-xs dark:text-gray-400"
                    >
                      +{service.subServices.length - 2} more services...
                    </Link>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
