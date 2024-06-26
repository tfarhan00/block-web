import { cnm } from "@/utils/style";
import Image from "next/image";

const benefits = [
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or inflated prices--just fair market value for every property.",
    image: "",
  },
  {
    title: "Transparency and Trust",
    desc: "All property are recorded on the blockchain.",
    image: "",
  },
  {
    title: "Seamless integration",
    desc: "From listing to verification and purchase, every step of the process is streamlined and efficient",
    image: "",
  },
  {
    title: "Market Insight",
    desc: "Access valuable insights and data on property prices and trends.",
    image: "",
  },
  {
    title: "Verified Listings",
    desc: "All properties are thoroughly verified by professional notaries",
    image: "",
  },
  {
    title: "Blockchain Security",
    desc: "Your transactions are secure and transparent thanks to blockchain technology",
    image: "",
  },
];

export default function Benefit() {
  return (
    <section className="px-4 md:px-8 mt-24">
      <div className="w-full flex flex-col items-center">
        <p className="px-5 py-2 rounded-full border border-black">BENEFIT</p>
        <h2 className="text-3xl md:text-4xl font-medium mt-6 max-w-xl text-center leading-snug">
          What Makes Blockestate <br /> The Preferred Choice?
        </h2>

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className={cnm(
                "bg-[#F6F6F6] rounded-md border p-5 relative min-h-64 flex flex-col items-start overflow-hidden",
                idx === 0 && "items-end",
                idx === 1 && "justify-end items-start",
                idx === 2 && "items-start",
                idx === 3 && "items-start",
                idx === 4 && "items-end text-end",
                idx === 5 && "items-end justify-end text-end"
              )}
            >
              <Image
                src={`/assets/images/benefit/benefit-${idx + 1}.png`}
                alt="benefit-img"
                fill
                className="w-full h-full object-cover"
              />
              <p className="text-xl relative">{item.title}</p>
              <p className="font-light max-w-xs mt-3 relative">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
