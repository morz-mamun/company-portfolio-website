'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import Link from 'next/link';
import { whatWeDoItemsData } from '@/constants/navbar-data/what-we-do-items-data';
import { Icon } from '@iconify/react/dist/iconify.js';
import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/navbar-data/main-nav-items-data';
import ThemeToggleButton from '@/components/buttons/theme-toggle-btn';

export default function WebSiteNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="z-[999] flex items-center gap-4">
            {/* Theme Toggle Button */}
            <ThemeToggleButton />
            <NavbarButton
              href="/contact-us"
              className="rounded-full text-base font-medium"
              variant="dark"
            >
              Contact
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="z-[999] flex items-center gap-2">
              {/* Theme Toggle Button */}
              <ThemeToggleButton />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems?.map((item, idx) => {
              if (item.name === 'What we do') {
                return (
                  <Popover
                    key={`nav-${idx}`}
                    open={open}
                    onOpenChange={setOpen}
                  >
                    <PopoverTrigger asChild>
                      <button className="text-brand relative rounded-full px-3 py-1 text-sm md:text-base dark:text-neutral-300">
                        <span className="relative z-20">{item.name}</span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      side="right"
                      sideOffset={-40}
                      alignOffset={30}
                      className="w-[260px] p-2 md:w-[300px] dark:bg-[#0A0A0A]"
                    >
                      <div className="flex flex-col gap-1">
                        {whatWeDoItemsData?.map((item, idx) => {
                          const subIsActive = item?.link === pathname;
                          return (
                            <Link
                              href={item.link}
                              key={`link-${idx}`}
                              onClick={() => setOpen(false)}
                              className={`relative flex items-center rounded-md px-2 py-1 text-sm text-neutral-600 transition hover:bg-[#CCCCCC]/40 md:text-base dark:text-neutral-300 dark:hover:bg-neutral-800/60 ${subIsActive ? 'bg-[#CCCCCC]/40 px-2 py-1 dark:bg-neutral-800/60' : ''}`}
                            >
                              <Icon icon={item?.icon} className="mr-2" />
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </PopoverContent>
                  </Popover>
                );
              }

              // Default mobile links
              return (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative rounded-full px-3 py-1 text-sm text-neutral-600 transition hover:bg-[#CCCCCC]/40 md:text-base dark:text-neutral-300 dark:hover:bg-neutral-800/60"
                >
                  {item.name}
                </Link>
              );
            })}

            {/* navbar right button */}
            <div className="mt-4 flex w-full flex-col gap-4">
              <NavbarButton
                href="/contact-us"
                className="rounded-full text-base font-medium"
                variant="dark"
              >
                Contact
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
