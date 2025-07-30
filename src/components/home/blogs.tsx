import { Icon } from '@iconify/react';

const blogs = [
  {
    image: '/blog1.png',
    category: 'Tech',
    title:
      'Contrary to popular belief Lorem Ipsum is not simply random text. It has roots.',
    date: '24.07.2025',
    comments: 'Comments',
  },
  {
    image: '/blog1.png',
    category: 'AI',
    title:
      'Contrary to popular belief Lorem Ipsum is not simply random text. It has roots.',
    date: '24.07.2025',
    comments: 'Comments',
  },
  {
    image: '/blog1.png',
    category: 'Automation',
    title:
      'Contrary to popular belief Lorem Ipsum is not simply random text. It has roots.',
    date: '24.07.2025',
    comments: 'Comments',
  },
];
export default function Blogs() {
  return (
    <section className="mx-20 my-20">
      {/* section heading */}
      <div className="mx-auto mb-[58px] max-w-[760px] text-center">
        <h3 className="text-[50px] leading-[76px] font-bold text-[#100F0F]">
          Our Latest Blogs
        </h3>
        <p className="text-2xl">
          Explore articles, case studies and insights on the latest in digital
          marketing, AI Automation and business growth.{' '}
        </p>
      </div>
      {/* blogs */}

      <div className="grid grid-cols-3 gap-9">
        {blogs?.map((blog, index) => (
          <div
            style={{ boxShadow: '1px 1px 6.2px rgba(0, 0, 0, 0.25)' }}
            key={index}
            className="rounded px-4 py-6"
          >
            {/* category */}
            <div className="mb-[30px] w-fit rounded-full bg-[#C8102E] px-[30px] py-[10px] text-white">
              <p>{blog?.category}</p>
            </div>
            {/* blog title */}
            <h3 className="text-[23px] leading-[33px] font-semibold">
              {blog?.title}
            </h3>
            {/* date and comments */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Icon
                  icon="material-symbols:calendar-month-outline-rounded"
                  width={20}
                  height={20}
                  color="#878787"
                />
                <span className="text-sm font-medium text-[#878787]">
                  {blog?.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="material-symbols:comment"
                  width={20}
                  height={20}
                  color="#878787"
                />
                <span className="text-sm font-medium text-[#878787]">
                  {blog?.comments}
                </span>
              </div>
            </div>

            {/* image */}
            <div className="mt-[23px] h-[261px] max-w-[370px]">
              <img
                src={blog?.image}
                alt="Blog image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
