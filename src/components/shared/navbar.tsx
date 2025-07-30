'use client';
import Link from 'next/link';
import {
  Bell,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Menu,
  Moon,
  Sun,
} from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { useState } from 'react';
import PrimaryBtn from './primary-btn';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#000000] px-20 py-3 shadow-xs">
      {/* Website logo */}
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="Website logo" width={107} height={69} />
        </Link>
      </div>

      {/* Navigation Links */}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {/* Item One - who we do */}
          <Button
            variant="ghost"
            className="hover:text-brand hover:bg-[] text-xl font-semibold text-white"
          >
            <Link href="/">Who we do</Link>
          </Button>
          <Button
            variant="ghost"
            className="hover:text-brand hover:bg-[] text-xl font-semibold text-white"
          >
            <Link href="/">Who we are</Link>
          </Button>
          <Button
            variant="ghost"
            className="hover:text-brand hover:bg-[] text-xl font-semibold text-white"
          >
            <Link href="/">Result</Link>
          </Button>
          <Button
            variant="ghost"
            className="hover:text-brand hover:bg-[] text-xl font-semibold text-white"
          >
            <Link href="/">Resources</Link>
          </Button>

          {/* This are use in future if we want to add more pages */}
          {/* <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              // className={navigationMenuTriggerStyle() } --- if want to use default style
              className='text-white font-semibold text-xl hover:text-brand hover:bg-[]'
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem> */}
          {/* dropdown menu */}
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-black text-white hover:bg-[]'>List</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Components</div>
                      <div className="text-muted-foreground">
                        Browse all components in the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Documentation</div>
                      <div className="text-muted-foreground">
                        Learn how to use the library.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Blog</div>
                      <div className="text-muted-foreground">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>

      {/* contact button  */}
      <PrimaryBtn label="Contact" className="px-[27px] py-[14px]" />
    </nav>
  );
}
