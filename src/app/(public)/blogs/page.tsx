import BlogsPage from '@/app/pages/blogs-page';
import { notFound } from 'next/navigation';
import { toast } from 'sonner';

export default async function Blogs() {
  const res = await fetch('https://tgc-admin.vercel.app/api/blogs');
  if (!res.ok) {
    toast.error('Something went wrong', {
      description: 'Please try again later.',
    });
  }
  const blogsData = await res.json();

  // if no blogs data found it will return not found component
  if (!blogsData.docs || blogsData.docs.length === 0) {
    notFound();
  }
  return <BlogsPage blogsData={blogsData} />;
}
