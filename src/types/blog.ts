export type TBlog = {
  id: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  category: {
    name: string;
  };
  tags?: {
    id: string;
    label: string;
  }[];
  meta?: {
    description: string;
  };
  createdAt: string;
  title: string;
};
