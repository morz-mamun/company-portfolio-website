import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import NewsLetterSection from '@/components/shared/news-letter-section';
import BlogDetailsPage from '@/app/pages/blog-details-page';

interface BlogDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function BlogDetails({ params }: BlogDetailPageProps) {
  const { category, slug } = await params;

  const res = await fetch(
    `https://tgc-admin.vercel.app/api/blogs?where[category.name][equals]=${category}&where[slug][equals]=${slug}&depth=2&draft=false&locale=undefined&trash=false`,
    { cache: 'no-store' },
  );

  if (res.ok === false) {
    return notFound();
  }

  const data = await res.json();
  const blog = data?.docs[0];
  if (!blog) return notFound();

  return <BlogDetailsPage blog={blog} />;
}
