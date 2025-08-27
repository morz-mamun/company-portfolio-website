import BlogDetailsPage from '@/app/pages/blog-details-page';
import { EmptyStatusState } from '@/components/shared/empty-status-state';
import { getSingleBlog } from '@/lib/api/blogs-api';
interface BlogDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function BlogDetails({ params }: BlogDetailPageProps) {
  const { category, slug } = await params;
  // Fetch single blog data -->
  const data = await getSingleBlog(category, slug);
  const blog = data?.docs[0];

  // if no blog data found it will return not found component
  if (!blog) {
    return (
      <div className="my-10">
        <EmptyStatusState
          type="empty"
          title="No Blogs Are Available"
          description="We don't have any blogs to show at the moment. Please check back later!"
        />
      </div>
    );
  }

  return <BlogDetailsPage blog={blog} />;
}
