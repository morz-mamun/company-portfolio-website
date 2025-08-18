/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function Blogs() {
  const res = await fetch('https://tgc-admin.vercel.app/api/blogs', {
    next: { revalidate: 60 }, // Revalidate every 60s (ISR)
  });

  if (!res.ok) throw new Error('Failed to fetch blogs');

  const data = await res.json();
  const blogs = data.docs;
  console.log(blogs);

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-bold">Latest Blogs</h1>
      {blogs?.map((blog: any) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}
