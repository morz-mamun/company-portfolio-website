'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ArrowUpFromLine, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t pt-20">
      <div className="border-t border-b">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative border-x bg-[#F5F5F5]">
            {/* footer content */}
            <div className="grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6 lg:grid-cols-5">
              {/* about us and contact us */}
              <div className="md:col-span-2">
                {/* about us */}
                <div>
                  <h3 className="mb-2 text-lg font-bold">
                    <span className="dark:text-primary text-brand">
                      Global Trust Communications
                    </span>
                  </h3>
                  <p className="text-brand dark:text-primary mb-4 text-sm">
                    We are a team of passionate professionals dedicated to
                    providing exceptional services to our clients. With a strong
                    focus on quality, innovation, and customer satisfaction, we
                    strive to deliver results that exceed expectations.
                  </p>
                </div>
                {/* contact us */}
                <div className="space-y-2">
                  <h4 className="text-md mb-4 font-semibold">Contact Us</h4>
                  {/* address */}
                  <p className="dark:text-primary text-brand flex items-center gap-1 text-sm">
                    <Icon
                      icon="ic:outline-location-on"
                      width="14"
                      height="14"
                    />
                    Sheikh Kamal Software technology park, Chittagong,
                    Bangladesh.
                  </p>
                  {/* email address */}
                  <p className="dark:text-primary text-brand flex items-center gap-1 text-sm">
                    <Icon icon="ic:baseline-email" width="14" height="14" />
                    service@trustglobalcommunications.com
                  </p>
                  {/* phone number */}
                  <p className="dark:text-primary text-brand flex items-center gap-1 text-sm">
                    <Icon icon="ic:baseline-phone" width="14" height="14" />
                    Phone: +8801710205657
                  </p>
                  {/* calling time */}
                  <p className="dark:text-primary text-brand flex items-center gap-1 text-sm">
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
              <div className="flex flex-col items-center space-y-3">
                <h4 className="text-md font-semibold">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/"
                      className="text-brand dark:text-primary transition-colors"
                    >
                      What We Do
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/about"
                      className="text-brand dark:text-primary transition-colors"
                    >
                      What we are
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/services"
                      className="text-brand dark:text-primary transition-colors"
                    >
                      Results
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/contact"
                      className="text-brand dark:text-primary transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/contact"
                      className="text-brand dark:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* privacy policy */}
              <div className="flex flex-col items-center space-y-3">
                <h4 className="text-md font-semibold">Privacy Policy</h4>
                <ul className="space-y-2 text-sm">
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/privacy-policy"
                      className="text-brand dark:text-primary transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="hover:font-medium hover:underline">
                    <Link
                      href="/terms-and-conditions"
                      className="text-brand dark:text-primary transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              {/* social links and follow us */}
              <div className="flex flex-col items-center space-y-3">
                <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-brand dark:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-brand dark:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-brand dark:text-primary transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="mailto:morzmamun@gmail.com"
                    target="_blank"
                    className="text-brand dark:text-primary transition-colors"
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
                className="shadow-primary/70 dark:shadow-brand/50 flex cursor-pointer items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-colors"
              >
                <ArrowUpFromLine
                  size={24}
                  className="dark:text-primary animate-bounce"
                />
                Back to Top
              </button>
            </div>
            {/* back to top button for medium and small screens */}
            <div className="mt-4 flex items-center justify-center border lg:hidden">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="shadow-primary/70 dark:shadow-brand/50 flex cursor-pointer items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-colors"
              >
                <ArrowUpFromLine
                  size={24}
                  className="text-primary dark:text-primary animate-bounce"
                />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="py-5 text-center text-zinc-500">
        <p className="text-sm">
          © {currentYear} Global Trust Communications. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
