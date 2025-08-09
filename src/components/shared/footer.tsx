'use client';
import { ArrowUpFromLine, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t pt-20">
      <div className="border-t border-b">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="border-x">
            <div className="grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6 lg:grid-cols-4">
              <div className="md:col-span-2">
                <h3 className="mb-4 text-xl font-bold">
                  <span className="dark:text-brand text-[#000]">
                    Global Trust Communications
                  </span>
                </h3>
                <p className="text-textPrimary dark:text-textPrimary mb-6 max-w-md">
                  We are a team of passionate professionals dedicated to
                  providing exceptional services to our clients. With a strong
                  focus on quality, innovation, and customer satisfaction, we
                  strive to deliver results that exceed expectations.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="mailto:morzmamun@gmail.com"
                    target="_blank"
                    className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-textPrimary dark:text-textPrimary hover:text-brand transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* back to top button */}
              <div className="hidden lg:block">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  className="hover:text-brand shadow-primary/70 dark:shadow-brand/50 flex cursor-pointer items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-colors"
                >
                  <ArrowUpFromLine
                    size={24}
                    className="dark:text-brand animate-bounce"
                  />
                  Back to Top
                </button>
              </div>
            </div>
            {/* back to top button for medium and small screens */}
            <div className="mt-4 flex items-center justify-center lg:hidden">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-brand shadow-primary/70 dark:shadow-brand/50 flex cursor-pointer items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-colors"
              >
                <ArrowUpFromLine
                  size={24}
                  className="text-primary dark:text-brand animate-bounce"
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
