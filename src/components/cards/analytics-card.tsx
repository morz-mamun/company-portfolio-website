import { TAnalyticsCard } from '@/types/analytics';

export default function AnalyticsCard({ item }: { item: TAnalyticsCard }) {
  return (
    <div className="group relative cursor-pointer rounded-md">
      {/* Hover Glow Background */}
      <div className="absolute -inset-1 z-0 rounded-[inherit] bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 opacity-0 blur-sm transition-all duration-300 ease-out group-hover:opacity-100" />

      {/* Card Content */}
      <div
        key={item?.id}
        className="bg-background dark:bg-background relative z-10 rounded-md border border-gray-950/[.1] px-2 py-8 shadow-[1px_1px_7.4px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:translate-y-[-1px] lg:px-6 lg:py-12 dark:border-gray-50/[.1]"
      >
        <div className="flex flex-col items-center">
          <h3 className="font-inter bg-[linear-gradient(122deg,#E8E8E8_24.49%,#818181_82.24%)] bg-clip-text text-center text-[50px] font-bold text-transparent backdrop-blur-[35px] [-webkit-text-stroke-color:#3D3D3D] [-webkit-text-stroke-width:1px] dark:[-webkit-text-stroke-color:#FFFFFF]">
            {item?.count}
          </h3>
          <p className="text-brand/80 text-sm lg:text-base dark:text-white">
            {item?.title}
          </p>
        </div>
      </div>
    </div>
  );
}
