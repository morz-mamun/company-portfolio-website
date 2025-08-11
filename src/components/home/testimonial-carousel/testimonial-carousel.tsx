'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Icon } from '@iconify/react/dist/iconify.js';
import SectionHeading from '@/components/shared/section-heading';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: 'John Smith',
    title: 'UI/UX Designer',
    image: '/user1.png',
  },
  {
    id: 2,
    quote:
      "The team's attention to detail and innovative approach transformed our entire user experience. Their design thinking process helped us identify pain points we didn't even know existed.",
    name: 'Sarah Johnson',
    title: 'Product Manager',
    image: '/user2.png',
  },
  {
    id: 3,
    quote:
      'Working with this team was a game-changer for our startup. They delivered exceptional results on time and within budget, exceeding all our expectations.',
    name: 'Michael Chen',
    title: 'CEO & Founder',
    image: '/user1.png',
  },
  {
    id: 4,
    quote:
      'The level of professionalism and creativity they brought to our project was outstanding. They truly understood our vision and brought it to life beautifully.',
    name: 'Emily Rodriguez',
    title: 'Marketing Director',
    image: '/user2.png',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(isAnimating);

  // keep ref in sync with state so interval callback sees current value
  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  const nextTestimonial = () => {
    if (isAnimatingRef.current) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimatingRef.current) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index: number) => {
    if (isAnimatingRef.current || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // single interval that does NOT depend on currentIndex
  useEffect(() => {
    // clear any existing interval
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        // don't start a new transition while animating
        if (isAnimatingRef.current) return;
        setDirection('next');
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused]); // only recreate interval when pause state changes

  // Reset animation state after transition duration (match CSS duration)
  useEffect(() => {
    const t = window.setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(t);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="mx-auto max-w-4xl overflow-hidden p-2 md:p-6 lg:p-8">
      {/* section heading */}
      <SectionHeading
        title="People love working with Trust Global Communication."
        className="mb-8 md:mb-10 lg:mb-14"
      />
      <div className="relative text-center">
        {/* Quote with sliding animation */}
        <div
          className="relative flex min-h-[200px] items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="absolute top-5 -left-0 md:top-6 md:left-8">
            <Icon icon="pixel:quote-left-solid" width={18} height={18} />
          </div>

          <div
            className={`transform cursor-pointer transition-all duration-300 ease-in-out ${
              isAnimating
                ? direction === 'next'
                  ? '-translate-x-1/2 opacity-0'
                  : 'translate-x-1/2 opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <blockquote className="text-brand dark:text-primary/80 max-w-3xl px-4 text-sm leading-relaxed md:px-8 md:text-lg">
              {currentTestimonial.quote}
            </blockquote>
          </div>

          <div className="absolute right-0 bottom-5 md:right-8 md:bottom-8">
            <Icon icon="pixel:quote-right-solid" width={20} height={20} />
          </div>
        </div>

        {/* Profile */}
        <div
          className={`flex transform items-center justify-center space-x-4 transition-all duration-300 ease-in-out ${
            isAnimating
              ? direction === 'next'
                ? '-translate-x-1/2 opacity-0'
                : 'translate-x-1/2 opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="text-brand dark:text-primary/80 text-sm font-semibold md:text-base">
              {currentTestimonial.name}
            </div>
            <div className="text-xs text-gray-500 md:text-sm">
              {currentTestimonial.title}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 pt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="h-10 w-10 cursor-pointer rounded-full border-gray-200 bg-transparent hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4 text-gray-400" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 pt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-200 ${index === currentIndex ? 'w-6 bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="h-10 w-10 cursor-pointer rounded-full border-gray-200 bg-transparent hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Button>
        </div>
      </div>
    </section>
  );
}
