import SectionHeading from '../shared/section-heading';
import BlogCard from '../cards/blog-card';
import PrimaryBtn from '../buttons/primary-btn';
import { TBlog } from '@/types/blog';
import Link from 'next/link';
import { getBLogs } from '@/lib/api/blogs-api';
import { EmptyStatusState } from '../shared/empty-status-state';

export default async function OurBlogs() {
  const blogsData = await getBLogs(3);
  const allBlogs = blogsData?.docs;

  return (
    <section className="border-y py-10 lg:py-14">
      {/* section heading */}
      <SectionHeading
        title="Latest Insights & Articles"
        description="Explore our blogs, case studies, and expert insights on AI automation, digital marketing, and technology strategies to drive business growth."
      />

      {/* All Blogs */}
      {allBlogs && allBlogs.length > 0 ? (
        <>
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
              <PrimaryBtn
                title="View All Blogs"
                iconName=""
                showCalDrawer={false}
              />
            </Link>
          </div>
        </>
      ) : (
        <div className="mt-10">
          <EmptyStatusState
            type="empty"
            title="No Blogs Are Available"
            description="We don't have any blogs to show at the moment. Please check back later!"
          />
        </div>
      )}
    </section>
  );
}
