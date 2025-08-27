// get all blogs without limit

export const getAllBlogs = async () => {
  const res = await fetch('https://tgc-admin.vercel.app/api/blogs', {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error('Failed to load blogs.');
  }
  return res.json();
};

// get all blogs with limit
export const getBLogs = async (limit: number) => {
  const res = await fetch(
    `https://tgc-admin.vercel.app/api/blogs?limit=${limit}`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    throw new Error('Failed to load blogs.');
  }
  return res.json();
};

// get single blog
export const getSingleBlog = async (category: string, slug: string) => {
  const res = await fetch(
    `https://tgc-admin.vercel.app/api/blogs?where[category.name][equals]=${category}&where[slug][equals]=${slug}&depth=2&draft=false&locale=undefined&trash=false`,
  );
  if (!res.ok) {
    throw new Error('Failed to load blog.');
  }
  return res.json();
};
