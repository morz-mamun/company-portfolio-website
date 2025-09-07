'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  link: string;
  color: string;
  position: string;
  subServices: string[];
}

const services: Service[] = [
  {
    id: 'ai-automation',
    name: 'AI Automation',
    link: '/ai-automation',
    color: 'bg-teal-500',
    position: 'top-10 left-1/2 -translate-x-1/2',
    subServices: [
      'Chatbot Development',
      'Process Automation',
      'Machine Learning Models',
      'AI Content Generation',
      'Predictive Analytics',
    ],
  },
  {
    id: 'seo-marketing',
    name: 'SEO & Digital Marketing',
    link: '/digital-marketing-seo',
    color: 'bg-pink-500',
    position: 'top-1/4 left-1/7 -translate-y-1/2',
    subServices: [
      'Search Engine Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Brand Strategy',
    ],
  },
  {
    id: 'web-development',
    name: 'Web & Software Developer',
    link: '/web-software-development',
    color: 'bg-green-500',
    position: 'top-1/4 right-1/10 -translate-y-1/2',
    subServices: [
      'Frontend Development',
      'Backend Development',
      'Mobile App Development',
      'Database Design',
      'API Integration',
      'DevOps & Deployment',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Affiliate Services',
    link: '/e-commerce-affiliate-service',
    color: 'bg-blue-500',
    position: 'bottom-1/3 left-16',
    subServices: [
      'Online Store Development',
      'Payment Gateway Integration',
      'Affiliate Program Setup',
      'Inventory Management',
      'Order Processing Systems',
    ],
  },
  {
    id: 'iot-security',
    name: 'IoT & Smart Security Solutions',
    link: '/iot-smart-security-solutions',
    color: 'bg-purple-500',
    position: 'bottom-1/3 right-16',
    subServices: [
      'Smart Home Systems',
      'Security Camera Setup',
      'IoT Device Integration',
      'Network Security',
      'Access Control Systems',
    ],
  },
  {
    id: 'saas-tools',
    name: 'SAAS & Affiliate tools',
    link: '/saas-affiliate-tools',
    color: 'bg-teal-400',
    position: 'bottom-28 left-1/2 -translate-x-1/2',
    subServices: [
      'SaaS Platform Development',
      'Subscription Management',
      'Analytics Dashboard',
      'User Management Systems',
      'API Development',
    ],
  },
];

export default function ExploreServices() {
  const [isExploring, setIsExploring] = useState(false);
  const [visibleSubServices, setVisibleSubServices] = useState<{
    [key: string]: boolean;
  }>({});
  const [servicesAnimated, setServicesAnimated] = useState(false);

  const toggleExplore = () => {
    if (isExploring) {
      setIsExploring(false);
      setVisibleSubServices({});
    } else {
      setIsExploring(true);

      services.forEach((service, serviceIndex) => {
        service.subServices.slice(0, 4).forEach((_, subIndex) => {
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
    <div className="relative mx-auto h-[600px] max-w-5xl">
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
          className="relative h-40 w-40 cursor-pointer rounded-full border-1 bg-gradient-to-r from-[#19DDDD] via-[#BDFF7C] to-[#E51177] p-0.5 shadow-[0_1px_1px_4px_rgba(255,109,184,0.20)] hover:scale-105"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
            <span className="text-3xl font-semibold text-gray-800">
              {isExploring ? 'Close' : 'Explore'}
            </span>
          </div>
        </button>
      </motion.div>

      {/* Service Items */}
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`absolute transition-all duration-[1200ms] ease-out ${
            servicesAnimated
              ? `opacity-100 ${service.position} scale-100`
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 250}ms` }}
        >
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className={`h-3 w-3 rounded-full ${service.color}`} />
              {!isExploring && servicesAnimated && (
                <div
                  className={`absolute inset-0 h-3 w-3 rounded-full ${service.color} animate-ping opacity-75`}
                />
              )}
            </div>
            <span className="text-sm font-medium whitespace-nowrap text-gray-700">
              {service.name}
            </span>
          </div>

          {isExploring && (
            <div className="absolute top-6 ml-4 w-[180px]">
              {service.subServices.slice(0, 2).map((subService, subIndex) => (
                <motion.div
                  key={subIndex}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: visibleSubServices[`${service.id}-${subIndex}`]
                      ? 1
                      : 0,
                    y: visibleSubServices[`${service.id}-${subIndex}`]
                      ? 0
                      : -20,
                  }}
                  transition={{ duration: 0.8, delay: subIndex * 0.5 }}
                  className="cursor-pointer py-1.5 text-xs text-gray-600 hover:text-gray-800"
                >
                  • {subService}
                </motion.div>
              ))}
              {service.subServices.length > 2 && (
                <Link
                  href={service.link}
                  className="cursor-pointer py-1 pt-2 text-xs text-gray-500"
                >
                  +{service.subServices.length - 2} more services...
                </Link>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
