import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export default function BentoGridCards() {
  return (
    <BentoGrid className="w-full">
      {items?.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          className={`${item.className} cursor-pointer`}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: 'AI Automation & Multi-Agent Systems',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service07.jpg',
    className: 'md:col-span-2',
  },
  {
    title: 'Web & Software Development',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service06.jpg',
    className: 'md:col-span-2',
  },
  {
    title: 'Digital Marketing & SEO',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service03.jpg',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'SaaS & Affiliate Tools',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service04.jpg',
    className: 'md:col-span-4',
  },
  {
    title: 'E-commerce & Affiliate Services',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service02.png',
    className: 'md:col-span-3',
  },
  {
    title: 'IoT & Smart Security Solutions',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
    image: 'https://pub-3c3fbc3b66a54a4ab707f64d0f564e7d.r2.dev/service01.png',
    className: 'md:col-span-3',
  },
];
