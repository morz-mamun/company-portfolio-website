import BlogsPage from '@/app/pages/blogs-page';
import { EmptyStatusState } from '@/components/shared/empty-status-state';
import { getAllBlogs } from '@/lib/api/blogs-api';

export default async function Blogs() {
  const blogsData = await getAllBlogs();
  return <BlogsPage blogsData={blogsData} />;
}
