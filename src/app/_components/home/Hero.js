import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-4 md:px-8 mt-4">
      <div className="bg-mossgreen rounded-2xl flex flex-col lg:flex-row relative gap-12 overflow-hidden">
        <Image
          src="/assets/bg/dots.svg"
          alt="wave-svg"
          fill
          priority
          className="w-full h-full object-cover translate-y-[50%] md:translate-y-0 md:translate-x-[30%]"
        />

        <div className="flex flex-col items-start p-6 md:py-20 md:px-12 relative">
          <h1 className="text-4xl md:text-5xl text-white font-medium leading-snug md:leading-relaxed">
            Mint and Stake with
            <br />
            BlockEstate
          </h1>
          <p className="text-neutral-400 text-xk md:text-2xl mt-4">
            Harnessing the power of blockchain to ensure
            <br /> transparency and trust in property transactions
          </p>
          <button className="bg-lemongrass px-6 py-4 rounded-lg text-mossgreen mt-12 md:mt-32 text-sm md:text-base">
            Explore Property
          </button>
        </div>

        <div className="ml-auto relative lg:max-w-xl w-full lg:flex-1 lg:w-auto h-72 lg:h-auto flex overflow-hidden">
          <Image
            src="/assets/images/hero-house.png"
            alt="hero-house"
            fill
            sizes="500px"
            className="object-contain w-full h-full scale-125 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
