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
  console.log(blog);

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
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
      <div className="mb-8">
        <div className="mb-6 h-[200px] overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Article Meta */}
        <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {formatDate(createdAt)}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />5 min read
          </div>
          <Badge variant="default">{category?.name}</Badge>
        </div>

        {/* Title */}
        <h1 className="text-foreground font-space-grotesk mb-6 text-4xl leading-tight font-bold md:text-5xl">
          {title}
        </h1>

        {/* Author Info */}
        <div className="border-border mb-8 flex items-center gap-4 rounded-lg border bg-[#ECFEFF] p-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback>
              <User className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-card-foreground font-semibold capitalize">
              {Author?.username}
            </p>
            <p className="text-muted-foreground text-sm">
              Writen by {Author?.username}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-lg mb-12 max-w-none">
        <div className="payload-richtext">
          <RichText data={content} />
        </div>
      </article>

      {/* Tags */}
      <div className="mb-12">
        <h3 className="text-foreground mb-4 text-lg font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag: { label: string; id: string }) => (
            <Badge
              key={tag?.id}
              variant="destructive"
              className="bg-accent text-accent-foreground border-accent hover:bg-accent/80"
            >
              {tag?.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Share Section */}
      <div className="mb-12 rounded-lg border bg-[#ECFEFF] p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-2 text-base font-semibold md:text-lg">
              Enjoyed this article?
            </h3>
            <p className="text-brand/70 text-sm md:text-base">
              Share it with your network
            </p>
          </div>
          <Button
            onClick={() => handleShareBlog(title)}
            className="hover:bg-primary/90 cursor-pointer bg-[#164E63]"
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
