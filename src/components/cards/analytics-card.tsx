import { TAnalyticsCard } from '@/types/analytics';

export default function AnalyticsCard({ item }: { item: TAnalyticsCard }) {
  return (
    <div
      key={item?.id}
      className="cursor-pointer rounded-md border border-gray-950/[.1] bg-gray-950/[.01] px-2 py-8 shadow-[1px_1px_7.4px_0_rgba(0,0,0,0.25)] hover:bg-gray-950/[.05] lg:px-6 lg:py-12 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div className="flex flex-col items-center">
        <h3 className="font-inter bg-[linear-gradient(122deg,#E8E8E8_24.49%,#818181_82.24%)] bg-clip-text text-center text-[50px] font-bold text-transparent backdrop-blur-[35px] [-webkit-text-stroke-color:#6C6C6C] [-webkit-text-stroke-width:1px]">
          {item?.count}
        </h3>
        <p className="text-brand/70 dark:text-primary/70 text-sm lg:text-base">
          {item?.title}
        </p>
      </div>
    </div>
  );
}
