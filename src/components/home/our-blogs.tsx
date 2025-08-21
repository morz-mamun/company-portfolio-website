import SectionHeading from '../shared/section-heading';
import BlogCard from '../cards/blog-card';
import PrimaryBtn from '../buttons/primary-btn';
import { toast } from 'sonner';
import { notFound } from 'next/navigation';
import { TBlog } from '@/types/blog';
import Link from 'next/link';

export default async function OurBlogs() {
  const res = await fetch('https://tgc-admin.vercel.app/api/blogs?limit=3');
  if (!res.ok) {
    toast.error('Something went wrong', {
      description: 'Please try again later.',
    });
    throw new Error('Failed to fetch data');
  }
  const blogsData = await res.json();
  const allBlogs = blogsData.docs;

  // if no blogs data found it will return not found component
  if (!blogsData.docs || blogsData.docs.length === 0) {
    notFound();
  }
  return (
    <section className="border-y py-10 lg:py-14">
      {/* section heading */}
      <SectionHeading
        title="Our Latest Blogs"
        description="Explore articles, case studies and insights on the latest in digital marketing, AI Automation and business growth. "
      />

      {/* blogs */}
      <div className="mt-10 hidden gap-4 px-4 lg:grid lg:grid-cols-3">
        {allBlogs?.map((blog: TBlog) => (
          <BlogCard blog={blog} key={blog.id} hasBorder={true} />
        ))}
      </div>
      {/* for medium device */}
      <div className="mt-10 grid grid-cols-1 gap-2 px-2 md:grid-cols-2 md:gap-4 md:px-4 lg:hidden">
        {allBlogs?.slice(0, 2)?.map((blog: TBlog) => (
          <BlogCard blog={blog} key={blog.id} hasBorder={true} />
        ))}
      </div>

      {/* view all button */}
      <div className="mt-10 flex items-center justify-center">
        <Link href="/blogs">
          <PrimaryBtn title="View All Blogs" iconName="" />
        </Link>
      </div>
    </section>
  );
}
