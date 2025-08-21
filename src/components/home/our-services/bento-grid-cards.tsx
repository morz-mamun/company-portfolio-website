import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { servicesData } from '@/constants/our-services-data';

export default function BentoGridCards() {
  return (
    <BentoGrid className="w-full">
      {servicesData?.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item?.title}
          description={item?.description}
          image={item?.image}
          link={item.link}
          className={`${item.className} cursor-pointer`}
        />
      ))}
    </BentoGrid>
  );
}
