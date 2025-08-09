import SectionHeading from '../shared/section-heading';
import BlogCard from '../cards/blog-card';

const blogs = [
  {
    _id: '1',
    imageUrl:
      'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service06.jpg',
    date: '2025-08-02T00:00:00.000Z',
    title: 'Smart Security in 2025',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    _id: '2',
    imageUrl:
      'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service06.jpg',
    date: '2025-08-02T00:00:00.000Z',
    title: 'Smart Security in 2025',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    _id: '3',
    imageUrl:
      'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service06.jpg',
    date: '2025-08-02T00:00:00.000Z',
    title: 'Smart Security in 2025',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
];

export default function OurBlogs() {
  return (
    <section className="border-y py-14">
      {/* section heading */}
      <SectionHeading
        title="Our Latest Blogs"
        description="Explore articles, case studies and insights on the latest in digital marketing, AI Automation and business growth. "
      />

      {/* blogs */}
      <div className="mt-10 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog, index) => (
          <BlogCard blog={blog} key={index} />
        ))}
      </div>
    </section>
  );
}
