/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DemoBlogCard({ blog }: { blog: any }) {
  const { Author, featuredImage, slug, category, title } = blog;

  const imageUrl =
    featuredImage?.url ||
    'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80';

  return (
    <Link
      href={`/blogs/${category?.name}/${slug}`}
      className="group/card block w-full max-w-sm"
    >
      <div
        className={cn(
          'relative flex h-80 flex-col justify-between overflow-hidden rounded-lg bg-cover bg-center p-4 shadow-xl transition-all duration-300 sm:h-96 md:h-96',
        )}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover/card:from-black/90 group-hover/card:via-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between text-white">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <img
              src="/user2.png"
              alt="Avatar"
              className="h-10 w-10 rounded-full border-2 object-cover sm:h-12 sm:w-12"
            />
            <div className="flex flex-col">
              <p className="ca text-sm font-medium text-white drop-shadow-md sm:text-base">
                {Author?.username || 'John Doe'}
              </p>
              <p className="text-xs text-gray-300 drop-shadow-md sm:text-sm">
                2 min read
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <h1 className="text-lg font-bold text-white drop-shadow-md sm:text-xl md:text-2xl">
              {title || 'Author Card'}
            </h1>
            <p className="mt-2 text-xs text-white drop-shadow-md sm:text-sm md:text-base">
              Card with Author avatar, complete name and time to read - most
              suitable for blogs.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
