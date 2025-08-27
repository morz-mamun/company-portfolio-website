'use client';

import type React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Icon } from '@iconify/react/dist/iconify.js';
import SectionHeading from '@/components/shared/section-heading';
import { testimonials } from '@/constants/testimonial-data';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const goToSlide = useCallback(
    (targetIndex: number) => {
      if (isTransitioning || targetIndex === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(targetIndex);
      setProgress(0);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    },
    [currentIndex, isTransitioning],
  );

  const nextTestimonial = useCallback(() => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide]);

  const prevTestimonial = useCallback(() => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide]);

  const handleDragStart = useCallback(
    (clientX: number) => {
      if (isTransitioning) return;
      setIsDragging(true);
      setDragStart(clientX);
      setDragOffset(0);
      setIsPaused(true);
    },
    [isTransitioning],
  );

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging || isTransitioning) return;
      const dragDistance = clientX - dragStart;
      const containerWidth = carouselRef.current?.offsetWidth || 1;
      const dragPercentage = (dragDistance / containerWidth) * 100;

      // Add resistance at boundaries
      let resistance = 1;
      if (
        (currentIndex === 0 && dragDistance > 0) ||
        (currentIndex === testimonials.length - 1 && dragDistance < 0)
      ) {
        resistance = 0.3;
      }

      setDragOffset(dragPercentage * resistance);
    },
    [isDragging, isTransitioning, dragStart, currentIndex],
  );

  const handleDragEnd = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      setIsDragging(false);
      setIsPaused(false);

      const dragDistance = clientX - dragStart;
      const threshold = 50;

      if (Math.abs(dragDistance) > threshold) {
        if (dragDistance > 0 && currentIndex > 0) {
          goToSlide(currentIndex - 1);
        } else if (dragDistance < 0 && currentIndex < testimonials.length - 1) {
          goToSlide(currentIndex + 1);
        }
      }

      setDragOffset(0);
    },
    [isDragging, dragStart, currentIndex, goToSlide],
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleDragEnd(e.clientX);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isDragging) {
      handleDragEnd(e.clientX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length > 0) {
      handleDragEnd(e.changedTouches[0].clientX);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      window.clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }

    if (!isPaused && !isDragging && !isTransitioning) {
      progressIntervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 100 / 30; // 4000ms / 100ms intervals
        });
      }, 100);

      intervalRef.current = window.setInterval(() => {
        nextTestimonial();
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [isPaused, isDragging, isTransitioning, nextTestimonial]);

  const getTransformValue = () => {
    const baseTransform = -currentIndex * 100;
    return baseTransform + dragOffset;
  };

  return (
    <section className="mx-auto max-w-4xl overflow-hidden p-2 md:p-6 lg:p-8">
      <SectionHeading
        title="People love working with Trust Global Communication."
        descriptionClassName="mb-8 md:mb-10 lg:mb-14"
      />

      <div className="relative text-center">
        <div
          ref={carouselRef}
          className="relative cursor-grab overflow-hidden active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={(e) => {
            setIsPaused(false);
            handleMouseLeave(e);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'pan-y pinch-zoom' }}
        >
          <div
            className="flex will-change-transform"
            style={{
              transform: `translateX(${getTransformValue()}%)`,
              transition: isDragging
                ? 'none'
                : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
                style={{
                  transform: `scale(${index === currentIndex ? 1 : 0.95})`,
                  opacity: Math.max(
                    0.3,
                    1 - Math.abs(index - currentIndex) * 0.3,
                  ),
                  transition:
                    'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease-out',
                }}
              >
                <div className="relative flex min-h-[200px] items-center justify-center">
                  <div className="absolute top-5 -left-0 transition-all duration-500 ease-out md:top-6 md:left-8">
                    <Icon
                      icon="pixel:quote-left-solid"
                      width={18}
                      height={18}
                      className="text-gray-400 transition-colors duration-300 hover:text-gray-600"
                    />
                  </div>

                  <blockquote className="text-brand dark:text-primary/80 max-w-3xl px-4 text-sm leading-relaxed transition-all duration-300 md:px-8 md:text-lg">
                    {testimonial.quote}
                  </blockquote>

                  <div className="absolute right-0 bottom-5 transition-all duration-500 ease-out md:right-8 md:bottom-8">
                    <Icon
                      icon="pixel:quote-right-solid"
                      width={20}
                      height={20}
                      className="text-gray-400 transition-colors duration-300 hover:text-gray-600"
                    />
                  </div>
                </div>

                <div className="flex transform items-center justify-center space-x-4 transition-all duration-500 ease-out">
                  <div className="group relative h-10 w-10 md:h-12 md:w-12">
                    <Image
                      src={testimonial.image || '/placeholder.svg'}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="text-left">
                    <div className="text-brand dark:text-primary/80 text-sm font-semibold transition-colors duration-300 hover:text-gray-700 md:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500 transition-colors duration-300 md:text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 pt-10">
          <Button
            aria-label="Previous testimonial"
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            disabled={isTransitioning}
            className="h-10 w-10 transform cursor-pointer rounded-full border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-50 hover:shadow-lg active:scale-95 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600 transition-colors duration-200" />
          </Button>

          <div className="flex justify-center space-x-3 px-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-2 transform cursor-pointer rounded-full transition-all duration-500 ease-out hover:scale-125 ${
                  index === currentIndex
                    ? 'w-8 bg-gray-600 shadow-md'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && !isPaused && (
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-gray-900 to-gray-900 shadow-sm transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          <Button
            aria-label="Next testimonial"
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            disabled={isTransitioning}
            className="h-10 w-10 transform cursor-pointer rounded-full border-gray-200 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-50 hover:shadow-lg active:scale-95 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4 text-gray-600 transition-colors duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
