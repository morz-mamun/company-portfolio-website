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
import { Button } from '../../ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import Link from 'next/link';
import { whatWeDoItemsData } from '@/constants/navbar-data/what-we-do-items-data';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function WebSiteNavbar() {
  const { theme, setTheme } = useTheme();
  const navItems = [
    {
      name: 'What we do',
      link: '#/what-we-do',
    },
    {
      name: 'Who we are',
      link: '#/who-we-are',
    },
    {
      name: 'Results',
      link: '#/results',
    },
    {
      name: 'Resources',
      link: '#/resources',
    },
  ];

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
            {theme === 'light' ? (
              <Button
                variant="outline"
                className="rounded-full"
                size="icon"
                onClick={() => setTheme('dark')}
              >
                <Sun className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => setTheme('light')}
              >
                <Moon className="h-4 w-4" />
              </Button>
            )}
            <NavbarButton
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
              {theme === 'light' ? (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setTheme('dark')}
                >
                  <Sun className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setTheme('light')}
                >
                  <Moon className="h-4 w-4" />
                </Button>
              )}
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
                  <Popover key={`nav-${idx}`}>
                    <PopoverTrigger asChild>
                      <button className="text-brand relative rounded-full px-3 py-1 text-sm md:text-base dark:text-neutral-300">
                        <span className="relative z-20">{item.name}</span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      side="right"
                      sideOffset={-30}
                      alignOffset={30}
                      className="w-[250px] p-1"
                    >
                      <div className="flex flex-col gap-1">
                        {whatWeDoItemsData?.map((item, idx) => (
                          <Link
                            href={item.link}
                            key={`link-${idx}`}
                            className="relative flex items-center rounded-full px-2 py-1 text-sm text-neutral-600 transition hover:bg-[#CCCCCC]/40 md:text-base dark:text-neutral-300 dark:hover:bg-neutral-800/60"
                          >
                            <Icon icon={item?.icon} className="mr-2" />
                            {item.name}
                          </Link>
                        ))}
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
                className="rounded-full text-base font-medium"
                variant="dark"
              >
                Contact
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
