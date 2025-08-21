/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import BlogCard from '@/components/cards/blog-card';
import BannerTitleAndDescription from '@/components/shared/banner-title-description';
import NewsLetterSection from '@/components/shared/news-letter-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogsBannerData } from '@/constants/banner-data/blogs-banner-data';
import { TBlog } from '@/types/blog';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Search } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useMemo, useState } from 'react';

export default function BlogsPage({ blogsData }: any) {
  const allBlogs = blogsData?.docs;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Latest Blogs');
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpToPage, setJumpToPage] = useState('');
  const itemsPerPage = 6;
  // unique categories from blog data
  const uniqueCategories = Array.from(
    new Set(allBlogs?.map((blog: TBlog) => blog?.category?.name)),
  );
  const allCategories = ['Latest Blogs', ...uniqueCategories];

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    let filteredBlogs = allBlogs;

    // Filter by category
    if (selectedCategory !== 'Latest Blogs') {
      filteredBlogs = filteredBlogs?.filter(
        (blog: TBlog) => blog?.category?.name === selectedCategory,
      );
      console.log('filteredBlogs', filteredBlogs);
    }

    // Filter by search term
    if (searchTerm) {
      filteredBlogs = filteredBlogs?.filter(
        (blog: TBlog) =>
          blog?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog?.meta?.description
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          blog?.tags?.find((tag) =>
            tag?.label?.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    return filteredBlogs;
  }, [searchTerm, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleJumpToPage = () => {
    const pageNum = Number.parseInt(jumpToPage);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setJumpToPage('');
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('....');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('....');
      if (totalPages > 1) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden">
      <div className="mt-20 lg:mt-28">
        <BannerTitleAndDescription sectionData={blogsBannerData} />
      </div>

      {/* search button */}
      <div className="mx-auto mt-8 mb-10 flex max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-white p-1 shadow-md lg:mb-16">
        <Input
          type="text"
          placeholder="Search any blog"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border-0 px-2 text-sm shadow-none placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 md:py-5"
        />
        <Button
          disabled={!searchTerm}
          className="hover:bg-[] cursor-pointer rounded-[8px] border-0 bg-black px-4 text-xs font-medium text-white shadow-[inset_2px_2px_4px_0_rgba(255,254,254,0.25)] disabled:opacity-50 md:py-5 md:text-sm"
        >
          <Search className="h-4 w-4 text-white" />
        </Button>
      </div>
      {/* all blogs with pagination */}
      {/* category tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {allCategories?.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => {
                setSelectedCategory(category as string);
                setCurrentPage(1);
              }}
              className={`cursor-pointer rounded-[8px] text-xs shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] lg:p-5 lg:text-sm ${
                selectedCategory === category
                  ? 'hover:bg-[] border border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                  : 'bg-[#FDFDFD] text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200'
              }`}
            >
              {category as string}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="mx-2 mb-8 grid grid-cols-1 gap-4 md:mx-4 md:grid-cols-2 lg:mx-6 lg:grid-cols-3 lg:gap-6">
        {paginatedBlogs?.map((blog: any) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-4">
          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {generatePageNumbers().map((page, index) => (
              <Button
                key={index}
                variant={currentPage === page ? 'default' : 'outline'}
                size="sm"
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                disabled={page === '....'}
                className={`h-10 w-10 p-0 ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : page === '....'
                      ? 'cursor-default'
                      : 'hover:bg-gray-50'
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          {/* Jump to Page */}
          <div className="mx-auto mt-0 mb-16 flex w-[200px] overflow-hidden rounded-lg border border-gray-100 bg-white p-1 shadow-md">
            {/* <span className="text-sm text-gray-600">Jump to page</span> */}
            <Input
              type="number"
              min="1"
              max={totalPages}
              value={jumpToPage}
              onChange={(e) => setJumpToPage(e.target.value)}
              className="flex-1 border-0 px-2 text-sm shadow-none placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 md:py-5"
              placeholder="Jump to page"
            />
            <Button
              onClick={handleJumpToPage}
              className="hover:bg-[] cursor-pointer rounded-[8px] border-0 bg-black px-4 text-xs font-medium text-white shadow-[inset_2px_2px_4px_0_rgba(255,254,254,0.25)] disabled:opacity-50 md:py-5 md:text-sm"
            >
              <Icon icon="icons8:right-round" />
            </Button>
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredBlogs?.length === 0 && notFound()}

      {/* newsletter section */}
      <NewsLetterSection />
    </main>
  );
}
