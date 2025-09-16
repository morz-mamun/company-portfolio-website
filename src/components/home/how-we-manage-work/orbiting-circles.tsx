import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function OrbitingCirclesAnimation() {
  return (
    <div className="group h-[500px] cursor-pointer border border-t border-r-0 border-l-0 md:border-t-0 md:border-l">
      <div className="relative flex h-[374px] w-full flex-col items-center justify-center overflow-hidden md:h-[330px] lg:h-[374px]">
        <OrbitingCircles iconSize={30} radius={170}>
          <Icons.n8n />
          <Icons.semrush />
          <Icons.openai />
          <Icons.perflexity />
          <Icons.midjourney />
        </OrbitingCircles>
        <OrbitingCircles iconSize={25} radius={130} reverse speed={3}>
          <Icons.openai />
          <Icons.gemini />
          <Icons.perflexity />
          <Icons.figma />
        </OrbitingCircles>
        <OrbitingCircles iconSize={20} radius={90} speed={2}>
          <Icons.illustrator />
          <Icons.figma />
          <Icons.photoshop />
        </OrbitingCircles>
        <OrbitingCircles iconSize={15} radius={50} reverse speed={3}>
          {/* <Icons.openai />
          <Icons.n8n /> */}
        </OrbitingCircles>
        <p className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-[#3D3D3D] md:text-4xl dark:text-[#F6F6F6]">
          TGC
        </p>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      </div>
      {/* bottom content */}
      <div className="max-w-[544px] space-y-2 p-2 transition-transform duration-300 group-hover:-translate-y-8 lg:mx-2">
        <h3 className="font-inter text-lg font-bold md:text-xl lg:text-2xl">
          Next-level work with next-gen tools
        </h3>
        <p className="text-brand dark:text-primary text-xs md:text-sm lg:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
}

const Icons = {
  n8n: () => (
    <Icon
      icon="simple-icons:n8n"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),
  semrush: () => (
    <Icon
      icon="simple-icons:semrush"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),
  figma: () => (
    <Icon
      icon="material-icon-theme:figma"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),
  gemini: () => (
    <Icon
      icon="material-icon-theme:gemini-ai"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),
  perflexity: () => (
    <Icon
      icon="ri:perplexity-fill"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),
  photoshop: () => (
    <Icon
      icon="devicon:photoshop"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),
  midjourney: () => (
    <Icon
      icon="logos:midjourney"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),

  illustrator: () => (
    <Icon
      icon="devicon:illustrator"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),

  openai: () => (
    <Icon
      icon="arcticons:openai-chatgpt"
      className="text-4xl text-[#3D3D3D] md:text-[80px] dark:text-[#F6F6F6]"
    />
  ),
};
