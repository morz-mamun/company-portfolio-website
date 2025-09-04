import WorldMap from '@/components/ui/world-map';

export function WorldMapDemo() {
  return (
    <div className="group cursor-pointer border border-r-0 border-b-0 border-l-0 md:border-l">
      <div className="w-full bg-white pb-0 md:pb-11 lg:pb-0 dark:bg-black">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>

      {/* bottom content */}
      <div className="max-w-[544px] space-y-2 p-2 transition-transform duration-300 group-hover:-translate-y-8 lg:mx-2">
        <h4 className="font-space-grotesk text-lg font-bold md:text-xl lg:text-2xl">
          Delivering excellence anywhere on Earth
        </h4>
        <p className="text-brand dark:text-primary text-xs md:text-sm lg:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
}
