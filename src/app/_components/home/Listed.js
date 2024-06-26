import Image from "next/image";
import SvgIcon from "../utils/SvgIcon";

export default function Listed() {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-start w-full">
        <div className="w-full px-4 md:px-8 flex flex-col items-start">
          <p className="px-5 py-2 rounded-full border border-black text-sm">
            LISTED PROPERTIES
          </p>
          <p className="text-4xl md:text-5xl font-medium mt-6 max-w-3xl leading-snug">
            Explore more properties that resonate with your preferences
          </p>
          <div className="w-full flex items-center justify-between mt-8">
            <div className="rounded-full bg-[#F2FED1]">
              <button className="bg-mossgreen text-lemongrass rounded-full h-10 w-16 md:h-12 md:w-24">
                Sell
              </button>
              <button className="text-mossgreen rounded-full h-10 w-16 md:h-12 md:w-24">
                Rents
              </button>
            </div>
            <button className="bg-mossgreen text-lemongrass rounded-lg px-3 py-2 md:px-8 md:py-3">
              Explore Property
            </button>
          </div>
        </div>

        <div
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent 100%)",
          }}
          className="w-full overflow-x-auto flex gap-4 mt-8 px-4 md:px-8"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div
              key={item}
              className="w-full shrink-0 max-w-[290px] rounded-2xl overflow-hidden relative h-96 bg-neutral-300 flex flex-col"
            >
              <Image
                src={"/assets/images/listed-sample.png"}
                className="w-full h-full object-cover"
                fill
                sizes="260px"
                alt="house-sample"
              />

              <div className="absolute w-full h-[70%] pointer-events-none bg-gradient-to-b from-transparent to-black/80 bottom-0"></div>
              <div className="flex flex-col gap-1 mt-auto text-white relative p-4">
                <p className="font-light">Canggu, Bali</p>
                <p className="text-xl font-medium">$2,000</p>
                <div className="flex items-center gap-3 font-light">
                  <div className="flex items-center gap-1">
                    <SvgIcon
                      src={"/assets/icons/bed.svg"}
                      className="w-4 h-4 bg-white"
                    />
                    <span>6</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SvgIcon
                      src={"/assets/icons/shower.svg"}
                      className="w-4 h-4 bg-white"
                    />
                    <span>3</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SvgIcon
                      src={"/assets/icons/expand.svg"}
                      className="w-4 h-4 bg-white"
                    />
                    <span>500m2</span>
                  </div>
                </div>
              </div>
              <div className="rounded-full flex items-center gap-1 px-2 bg-lemongrass absolute left-4 top-4">
                <SvgIcon
                  src={"/assets/icons/verified.svg"}
                  className="w-4 h-4 bg-mossgreen"
                />
                <p>Notarized</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
