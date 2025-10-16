'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ArrowUpFromLine, Linkedin, X } from 'lucide-react';
import Link from 'next/link';
import { TextHoverEffect } from '../ui/text-hover-effect';
import { socialMediaData } from '@/constants/social-media-data';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useState } from 'react';
import { whatWeDoItemsData } from '@/constants/navbar-data/what-we-do-items-data';
import { usePathname } from 'next/navigation';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTiktok,
  IconBrandX,
} from '@tabler/icons-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <footer className="w-full pt-10 md:pt-20">
      <div className="dark:bg-background w-full bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            {/* footer content */}
            <div className="grid grid-cols-2 gap-8 px-4 py-8 md:grid-cols-3 md:px-6 md:py-12 lg:grid-cols-5">
              {/* about us and contact us */}
              <div className="col-span-2 flex flex-col justify-between md:col-span-3 md:flex-row md:gap-5 lg:col-span-2 lg:flex-col lg:gap-0">
                {/* about us */}
                <div className="md:w-1/2 lg:w-full">
                  <h3 className="font-inter mb-2 text-lg font-bold">
                    <span className="dark:text-primary text-brand">
                      Trust Global Communications
                    </span>
                  </h3>
                  <p className="text-brand dark:text-primary mb-4 max-w-[425px] text-xs md:text-sm">
                    We are a team of passionate professionals dedicated to
                    providing exceptional services to our clients. With a strong
                    focus on quality, innovation, and customer satisfaction, we
                    strive to deliver results that exceed expectations.
                  </p>
                </div>
                {/* contact us */}
                <div className="space-y-1 md:w-1/2 lg:w-full lg:space-y-2">
                  <h4 className="font-inter text-lg font-semibold lg:mb-4">
                    Contact Us
                  </h4>
                  {/* address */}
                  <p className="dark:text-primary text-brand flex items-start gap-1 text-xs md:text-sm">
                    <Icon
                      icon="ic:outline-location-on"
                      width="18"
                      height="18"
                    />
                    Chattogram Software technology park, Chittagong, Bangladesh.
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
                    Saturday to Thursday : 9:00 AM - 5:00 PM STD
                  </p>
                </div>
              </div>

              {/* quick links */}
              <div className="flex flex-col space-y-3 lg:mx-auto">
                <h4 className="font-inter text-lg font-semibold">
                  Quick Links
                </h4>

                <div className="flex flex-col items-start space-y-2 text-sm">
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <button className="relative inline-block cursor-pointer text-base after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#0908C3] after:to-[#0C34E9] after:transition-all after:duration-300 hover:after:w-full dark:hover:text-blue-600">
                        What we do
                        {/* <ArrowUpFromLine size={16} /> */}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      sideOffset={8}
                      className="w-[330px] p-2"
                    >
                      <div className="space-y-1">
                        {whatWeDoItemsData?.map((item, idx) => {
                          const subIsActive = item?.link === pathName;
                          return (
                            <Link
                              href={item.link}
                              key={`link-${idx}`}
                              onClick={() => setIsOpen(false)}
                              className={`relative flex items-center gap-2 rounded-md px-2 py-1 text-sm text-neutral-600 transition hover:bg-[#CCCCCC]/40 md:text-base dark:text-neutral-300 dark:hover:bg-neutral-800/60 ${
                                subIsActive
                                  ? 'bg-[#CCCCCC]/40 px-2 py-1 dark:bg-neutral-800/60'
                                  : ''
                              }`}
                            >
                              <Icon icon={item?.icon} width={16} height={16} />
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </PopoverContent>
                  </Popover>

                  <Link
                    href="/who-we-are"
                    className="text-brand dark:text-primary relative inline-block text-xs transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#0908C3] after:to-[#0C34E9] after:transition-all after:duration-300 hover:after:w-full md:text-base dark:hover:text-blue-600"
                  >
                    Who we are
                  </Link>

                  <Link
                    href="/contact-us"
                    className="text-brand dark:text-primary relative inline-block text-xs transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#0908C3] after:to-[#0C34E9] after:transition-all after:duration-300 hover:after:w-full md:text-base dark:hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* privacy policy, terms and conditions */}
              <div className="flex flex-col space-y-3 lg:mx-auto">
                <h4 className="font-inter text-md font-semibold">
                  Legal Documents
                </h4>

                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-brand dark:text-primary relative inline-block text-xs transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#0908C3] after:to-[#0C34E9] after:transition-all after:duration-300 hover:after:w-full md:text-base dark:hover:text-blue-600"
                    >
                      Privacy & Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#/terms-and-conditions"
                      className="text-brand dark:text-primary relative inline-block text-xs transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#0908C3] after:to-[#0C34E9] after:transition-all after:duration-300 hover:after:w-full md:text-base dark:hover:text-blue-600"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* social links and follow us */}
              <div className="col-span-2 mx-auto flex flex-col space-y-3 md:col-span-1 lg:mx-auto">
                <h4 className="font-inter mb-4 text-center text-lg font-semibold md:text-start">
                  Follow Us
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href={socialMediaData?.linkedin}
                    target="_blank"
                    aria-label="linkedin"
                    className="text-brand dark:text-primary rounded-full bg-black px-2 py-2 text-xs transition-colors hover:bg-[#0908C3] md:text-base dark:bg-white dark:hover:bg-[#0C34E9]"
                  >
                    <Linkedin
                      size={18}
                      className="text-white dark:text-black"
                    />
                  </a>
                  <a
                    href={socialMediaData?.twitter}
                    target="_blank"
                    aria-label="twitter"
                    className="text-brand dark:text-primary rounded-full bg-black px-2 py-2 text-xs transition-colors hover:bg-[#0908C3] md:text-base dark:bg-white dark:hover:bg-[#0C34E9]"
                  >
                    <IconBrandX
                      size={18}
                      className="text-white dark:text-black"
                    />
                  </a>
                  <a
                    href={socialMediaData?.facebook}
                    target="_blank"
                    aria-label="facebook"
                    className="text-brand dark:text-primary rounded-full bg-black px-2 py-2 text-xs transition-colors hover:bg-[#0908C3] md:text-base dark:bg-white dark:hover:bg-[#0C34E9]"
                  >
                    <IconBrandFacebook
                      size={18}
                      className="text-white dark:text-black"
                    />
                  </a>
                  {/* instagram */}
                  <a
                    href={socialMediaData?.instagram}
                    target="_blank"
                    aria-label="instagram"
                    className="text-brand dark:text-primary rounded-full bg-black px-2 py-2 text-xs transition-colors hover:bg-[#0908C3] md:text-base dark:bg-white dark:hover:bg-[#0C34E9]"
                  >
                    <IconBrandInstagram
                      size={18}
                      className="text-white dark:text-black"
                    />
                  </a>

                  {/* pinterest */}
                  <a
                    href={socialMediaData?.pinterest}
                    target="_blank"
                    aria-label="pinterest"
                    className="text-brand dark:text-primary rounded-full bg-black px-2 py-2 text-xs transition-colors hover:bg-[#0908C3] md:text-base dark:bg-white dark:hover:bg-[#0C34E9]"
                  >
                    <IconBrandPinterest
                      size={18}
                      className="text-white dark:text-black"
                    />
                  </a>
                  {/* tiktok */}
                  <a
                    href={socialMediaData?.tiktok}
                    target="_blank"
                    aria-label="tiktok"
                    className="text-brand dark:text-primary rounded-full bg-black px-2 py-2 text-xs transition-colors hover:bg-[#0908C3] md:text-base dark:bg-white dark:hover:bg-[#0C34E9]"
                  >
                    <IconBrandTiktok
                      size={18}
                      className="text-white dark:text-black"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* copyright */}
            <div className="pb-5 text-center text-zinc-500">
              <p className="text-xs md:text-sm">
                © {currentYear} Trust Global Communications. All rights
                reserved.
              </p>
            </div>
            {/* back to top button for large screens */}
            <div className="absolute right-2 bottom-4 hidden lg:block">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-b from-[#0908C3] to-[#0C34E9] px-3 pt-3 pb-1 text-white shadow-lg transition-colors hover:scale-105 hover:bg-gradient-to-b hover:from-[#000EAC] hover:to-[#00163C] dark:shadow-lg"
              >
                <ArrowUpFromLine
                  size={24}
                  className="animate-bounce text-white"
                />
              </button>
            </div>
            {/* back to top button for medium and small screens */}
            <div className="flex items-center justify-center lg:hidden">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#0908C3] to-[#0C34E9] px-3 pt-3 pb-1 text-sm text-white shadow-lg transition-colors hover:scale-105 hover:bg-gradient-to-b hover:from-[#000EAC] hover:to-[#00163C] dark:shadow-lg"
              >
                <ArrowUpFromLine
                  size={20}
                  className="animate-bounce text-white"
                />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* bottom pattern */}
      <div className="border-t">
        <div className="mx-4 h-[6rem] md:mx-6 md:h-[9rem] lg:h-[12rem]">
          <TextHoverEffect text="Trust Global Communications" />
        </div>
      </div>
    </footer>
  );
}
