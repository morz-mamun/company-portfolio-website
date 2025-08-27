// get all blogs with limit
export const getBLogs = async (limit: number) => {
  const res = await fetch(
    `https://tgc-admin.vercel.app/api/blogs?limit=${limit}`,
    { cache: 'no-store', next: { revalidate: 60 } },
  );
  if (!res.ok) {
    throw new Error('Failed to load blogs.');
  }
  return res.json();
};
