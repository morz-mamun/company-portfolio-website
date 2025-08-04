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
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function WebSiteNavbar() {
  const { setTheme } = useTheme();
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems className="" items={navItems} />
          <div className="z-[999] flex items-center gap-4">
            {/* Theme Toggle Button */}
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild className="cursor-pointer rounded-full">
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-28 p-2 font-normal">
                <div>
                  <button
                    onClick={() => {
                      setTheme('light');
                      setIsOpen(false);
                    }}
                    className="hover:bg-muted w-full rounded-md px-2 py-1.5 text-left text-sm"
                  >
                    Light
                  </button>
                  <button
                    onClick={() => {
                      setTheme('dark');
                      setIsOpen(false);
                    }}
                    className="hover:bg-muted w-full rounded-md px-2 py-1.5 text-left text-sm"
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => {
                      setTheme('system');
                      setIsOpen(false);
                    }}
                    className="hover:bg-muted w-full rounded-md px-2 py-1.5 text-left text-sm"
                  >
                    System
                  </button>
                </div>
              </PopoverContent>
            </Popover>

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
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* navbar right button */}
            <div className="flex w-full flex-col gap-4">
              {/* Theme Toggle Button */}
              <Popover>
                <PopoverTrigger asChild className="cursor-pointer rounded-full">
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-28 p-2 font-normal">
                  <div>
                    <button
                      onClick={() => setTheme('light')}
                      className="hover:bg-muted w-full rounded-md px-2 py-1.5 text-left text-sm"
                    >
                      Light
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className="hover:bg-muted w-full rounded-md px-2 py-1.5 text-left text-sm"
                    >
                      Dark
                    </button>
                    <button
                      onClick={() => setTheme('system')}
                      className="hover:bg-muted w-full rounded-md px-2 py-1.5 text-left text-sm"
                    >
                      System
                    </button>
                  </div>
                </PopoverContent>
              </Popover>

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
