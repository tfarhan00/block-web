import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="px-4 md:px-8 mt-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:flex-1 max-w-2xl rounded-xl h-[420px] w-full md:w-auto bg-neutral-400 overflow-hidden relative">
          <Image
            src={"/assets/images/about-us.png"}
            alt="about-us"
            fill
            sizes="500px"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:flex-1 flex flex-col items-start">
          <p className="px-5 py-2 rounded-full border border-black">About Us</p>
          <p className="text-3xl md:text-4xl font-medium mt-6 max-w-xl">
            Blockestate aims to resolve land dispute issues in Indonesia by
            ensuring transparent and verified property transactions
          </p>

          <p className="text-neutral-400 mt-8 max-w-md">
            Whether you&apos;re selling property, finding listings as an agent,
            or searching for your dream home, Blockestate simplifies real estate
            transactions.
          </p>

          <button className="border px-6 rounded-md md:px-8 py-3 font-medium mt-6">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
