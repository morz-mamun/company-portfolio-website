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
  const { theme, setTheme } = useTheme();
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
  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems className="" items={navItems} />
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
