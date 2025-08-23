/* eslint-disable @typescript-eslint/no-explicit-any */

export type TBlog = {
  id: string;
  Author?: {
    username: string;
  };
  content?: any;
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
