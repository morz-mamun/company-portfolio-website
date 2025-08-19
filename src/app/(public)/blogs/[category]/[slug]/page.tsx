import { RichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

interface BlogDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function BlogDetails({ params }: BlogDetailPageProps) {
  const { category, slug } = await params;
  console.log(category, slug);

  const res = await fetch(
    `https://tgc-admin.vercel.app/api/blogs?where[category.name][equals]=${category}&where[slug][equals]=${slug}&depth=2&draft=false&locale=undefined&trash=false`,
    { cache: 'no-store' },
  );

  console.log(res);

  if (!res.ok) throw new Error('Failed to fetch blog');

  const data = await res.json();
  const blog = data.docs[0];
  console.log(blog);
  const content = blog?.content as SerializedEditorState;
  console.log('content', content);

  if (!blog) return <p>Blog not found</p>;

  return (
    <article className="mx-auto max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-600">{blog?.meta?.description}</p>

      <div className="payload-richtext">
        <RichText data={content} />
      </div>
    </article>
  );
}
