'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ArrowUpFromLine, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { TextHoverEffect } from '../ui/text-hover-effect';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t pt-10 md:pt-20">
      <div className="border-t border-b">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative border-x bg-[#F5F5F5] dark:bg-[#030712]">
            {/* footer content */}
            <div className="grid grid-cols-2 gap-8 px-4 py-8 md:grid-cols-3 md:px-6 md:py-12 lg:grid-cols-5">
              {/* about us and contact us */}
              <div className="col-span-2 flex flex-col justify-between md:col-span-3 md:flex-row md:gap-5 lg:col-span-2 lg:flex-col lg:gap-0">
                {/* about us */}
                <div className="md:w-1/2 lg:w-full">
                  <h3 className="mb-2 text-lg font-bold">
                    <span className="dark:text-primary text-brand">
                      Trust Global Communications
                    </span>
                  </h3>
                  <p className="text-brand dark:text-primary mb-4 text-xs md:text-sm">
                    We are a team of passionate professionals dedicated to
                    providing exceptional services to our clients. With a strong
                    focus on quality, innovation, and customer satisfaction, we
                    strive to deliver results that exceed expectations.
                  </p>
                </div>
                {/* contact us */}
                <div className="space-y-1 md:w-1/2 lg:w-full lg:space-y-2">
                  <h4 className="text-lg font-semibold lg:mb-4">Contact Us</h4>
                  {/* address */}
                  <p className="dark:text-primary text-brand flex items-start gap-1 text-xs md:text-sm">
                    <Icon
                      icon="ic:outline-location-on"
                      width="18"
                      height="18"
                    />
                    Sheikh Kamal Software technology park, Chittagong,
                    Bangladesh.
                  </p>
                  {/* email address */}
                  <p className="dark:text-primary text-brand flex items-center gap-1 text-xs md:text-sm">
                    <Icon icon="ic:baseline-email" width="14" height="14" />
                    service@trustglobalcommunications.com
                  </p>
                  {/* phone number */}
                  <p className="dark:text-primary text-brand flex items-center gap-1 text-xs md:text-sm">
                    <Icon icon="ic:baseline-phone" width="14" height="14" />
                    Phone: +8801710205657
                  </p>
                  {/* calling time */}
                  <p className="dark:text-primary text-brand flex items-center gap-1 text-xs md:text-sm">
                    <Icon
                      icon="ic:baseline-access-time"
                      width="14"
                      height="14"
                    />
                    Monday to Friday: 9:00 AM to 6:00 PM STD
                  </p>
                </div>
              </div>

              {/* quick links */}
              <div className="flex flex-col space-y-3 lg:mx-auto">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/"
                      className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                    >
                      What We Do
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/about"
                      className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                    >
                      What we are
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/services"
                      className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                    >
                      Results
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/contact"
                      className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                    >
                      Resources
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/contact"
                      className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* privacy policy */}
              <div className="flex flex-col space-y-3 lg:mx-auto">
                <h4 className="text-md font-semibold">Privacy Policy</h4>
                <ul className="space-y-2 text-sm">
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/privacy-policy"
                      className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/terms-and-conditions"
                      className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              {/* social links and follow us */}
              <div className="col-span-2 mx-auto flex flex-col space-y-3 md:col-span-1 lg:mx-auto">
                <h4 className="mb-4 text-center text-lg font-semibold md:text-start">
                  Follow Us
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="mailto:morzmamun@gmail.com"
                    target="_blank"
                    className="text-brand dark:text-primary text-xs transition-colors md:text-base"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            {/* back to top button for large screens */}
            <div className="absolute right-2 bottom-4 hidden lg:block">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="shadow-primary/70 flex cursor-pointer items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-colors dark:shadow-lg"
              >
                <ArrowUpFromLine
                  size={24}
                  className="dark:text-primary animate-bounce"
                />
                Back to Top
              </button>
            </div>
            {/* back to top button for medium and small screens */}
            <div className="flex items-center justify-center lg:hidden">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-brand dark:bg-primary shadow-primary/70 flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg transition-colors dark:text-black dark:shadow-lg"
              >
                <ArrowUpFromLine
                  size={24}
                  className="animate-bounce text-white dark:text-black"
                />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="py-5 text-center text-zinc-500">
        <p className="text-xs md:text-sm">
          © {currentYear} Trust Global Communications. All rights reserved.
        </p>
      </div>

      {/* bottom pattern */}
      <div className="border-t">
        <div className="mx-4 h-[6rem] border-x md:mx-6 md:h-[9rem] lg:h-[12rem]">
          <TextHoverEffect text="Trust Global Communications" />
        </div>
      </div>
    </footer>
  );
}
