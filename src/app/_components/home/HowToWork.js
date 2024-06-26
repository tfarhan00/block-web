"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cnm } from "@/utils/style";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const steps = [
  {
    title: "List Your Property",
    desc: "All property transactions and verifications are recorded on the blockchain, ensuring complete transparency",
    image: "/assets/images/how-to-1.png",
  },
  {
    title: "Verification by Notaries",
    desc: "Our trusted notaries verify the details to ensure accuracy and fairness",
    image: "/assets/images/how-to-2.png",
  },
  {
    title: "Discover and Buy",
    desc: "Buyers can explore, trust, and invest in properties with confidence",
    image: "/assets/images/how-to-3.png",
  },
];

export default function HowToWork() {
  const container = useRef();

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: container.current.offsetHeight * steps.length + "px",
          pin: true,
          scrub: true,
        },
      });

      steps.forEach((_, index) => {
        if (index > 0) {
          timeline.to("#list-slider", {
            xPercent: -100 * index,
            delay: 0.2,
          });

          timeline.to(`#list-title-${index}`, { opacity: 0 }, "<");
          timeline.to(
            `#list-image-${index}`,
            {
              opacity: 0,
            },
            "<"
          );
          timeline.to(`#list-title-${index + 1}`, { opacity: 1 }, "<");
          timeline.to(
            `#list-image-${index + 1}`,
            {
              opacity: 1,
            },
            "<"
          );
        }
      });
    },
    {
      scope: container,
    }
  );

  return (
    <section ref={container} className="mt-24">
      <div className="flex h-dvh w-full flex-col lg:flex-row">
        <div className="p-8 md:p-12 w-full lg:max-w-md flex flex-col justify-center items-center bg-mossgreen">
          <div className="flex flex-col items-start">
            <p
              id="how"
              className="px-5 py-2.5 rounded-full border border-white text-white text-sm md:text-base"
            >
              HOW TO WORK
            </p>
            <p className="mt-4 text-3xl md:text-5xl text-white md:leading-snug">
              How We List and Tokenize Real Estate Properties
            </p>
            <div className="w-full relative h-16 md:h-20 mt-12 hidden md:flex">
              <Image
                src="/assets/images/order-step.png"
                alt="steps-svg"
                fill
                className="w-full h-full object-contain mr-auto"
              />
            </div>

            <button className="text-sm md:text-base px-4 py-2 md:px-8 md:py-3 rounded-lg bg-lemongrass text-mossgreen mt-6 md:mt-12">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:grow bg-[#FAFFF3] p-6 md:p-10 relative overflow-hidden h-full md:h-auto">
          <div className="w-full absolute bottom-0 h-full left-0">
            <Image
              src="/assets/bg/wave.svg"
              alt="wave-svg"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center h-full justify-center w-full">
            <div className="w-full relative h-32">
              <div id="list-slider" className="w-full h-full absolute flex">
                {steps.map((item, idx) => (
                  <div
                    key={idx}
                    id={`list-title-${idx + 1}`}
                    className={cnm(
                      "flex items-start gap-5 shrink-0 w-full",
                      idx === 0 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <p className="text-3xl text-green-300">0{idx + 1}</p>
                    <div className="flex flex-col gap-3">
                      <p className="text-2xl font-medium">{item.title}</p>
                      <p className="font-light max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full max-w-md h-[300px] mt-12">
              <Image
                src={"/assets/images/macbook.png"}
                alt="macbook"
                fill
                sizes="300px"
                className="w-full h-full object-contain"
              />

              <div
                className={cnm(
                  "absolute w-[80%] h-[60%] md:w-[81%] md:h-[80%] left-[50%] -translate-x-[50%] top-[18%] md:top-[7%] overflow-hidden"
                )}
              >
                <div className="w-full h-full relative">
                  {steps.map((item, idx) => (
                    <div
                      key={idx}
                      id={`list-image-${idx + 1}`}
                      className={cnm(
                        "w-full h-full absolute",
                        idx === 0 ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="350px"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
