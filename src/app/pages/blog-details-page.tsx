'use client';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import NewsLetterSection from '@/components/shared/news-letter-section';
import { TBlog } from '@/types/blog';
import { handleShareBlog } from '@/utils/handleShareBlog';

export default function BlogDetailsPage({ blog }: { blog: TBlog }) {
  const { Author, featuredImage, title, createdAt, tags, category } = blog;
  const imageUrl =
    featuredImage?.url ||
    'https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80';
  const content = blog?.content as SerializedEditorState;

  return (
    <main className="mx-auto max-w-4xl px-4 pt-16 pb-14 md:pt-20">
      <div className="py-4">
        <Link href="/blogs">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground cursor-pointer dark:text-gray-300 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
      <div className="mb-8">
        <div className="mb-6 h-[200px] overflow-hidden rounded-lg border">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Article Meta */}
        <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-4 text-sm dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {formatDate(createdAt)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />5 min read
          </div>
          <Badge
            variant="default"
            className="dark:bg-gray-700 dark:text-gray-200"
          >
            {category?.name}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-foreground font-space-grotesk mb-6 text-2xl leading-tight font-bold md:text-4xl lg:text-5xl dark:text-white">
          {title}
        </h1>

        {/* Author Info */}
        <div className="border-border dark:bg-card mb-8 flex items-center gap-4 rounded-lg border bg-[#ECFEFF] p-4 dark:border-gray-700">
          <Avatar className="h-12 w-12">
            <AvatarFallback>
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-card-foreground font-semibold capitalize dark:text-white">
              {Author?.username}
            </p>
            <p className="text-muted-foreground text-sm dark:text-gray-400">
              Writen by {Author?.username}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-lg dark:prose-invert mb-12 max-w-none">
        <div className="payload-richtext">
          <RichText data={content} />
        </div>
      </article>

      {/* Tags */}
      <div className="mb-12">
        <h3 className="text-foreground mb-4 text-lg font-semibold dark:text-white">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag: { label: string; id: string }) => (
            <Badge
              key={tag?.id}
              variant="destructive"
              className="bg-accent text-accent-foreground border-accent hover:bg-accent/80 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              {tag?.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Share Section */}
      <div className="dark:bg-card mb-12 rounded-lg border bg-[#ECFEFF] p-4 md:p-8 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-2 text-base font-semibold md:text-lg dark:text-white">
              Enjoyed this article?
            </h3>
            <p className="text-brand/70 text-sm md:text-base dark:text-gray-400">
              Share it with your network
            </p>
          </div>
          <Button
            onClick={() => handleShareBlog(title)}
            className="hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 cursor-pointer bg-[#164E63]"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      {/* Newsletter CTA */}
      <NewsLetterSection />
    </main>
  );
}
