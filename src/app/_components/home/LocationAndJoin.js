import { cnm } from "@/utils/style";
import Image from "next/image";
import SvgIcon from "../utils/SvgIcon";

export default function LocationAndJoin() {
  return (
    <section className="mt-20 px-4 md:px-8">
      <div>
        {/* Location */}
        <div className="w-full p-6 md:p-7 bg-mossgreen rounded-2xl flex flex-col">
          <div className="w-full flex flex-col gap-6 md:flex-row md:items-center justify-between">
            <h1 className="font-medium text-white text-2xl md:text-3xl">
              Find your Perfect Location
            </h1>

            <div className="flex items-center gap-4">
              <button className="px-4 py-2 md:py-3 md:px-8 border rounded-lg border-white text-white text-sm md:text-base">
                Listing My Property
              </button>
              <button className="px-4 py-2 md:py-3 md:px-8 rounded-lg bg-lemongrass text-mossgreen text-sm md:text-base">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full flex gap-4 mt-20 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div
                key={item}
                className={cnm(
                  "shrink-0 rounded-2xl overflow-hidden relative h-96 lg:w-44 bg-neutral-300 flex flex-col group",
                  "lg:card-location"
                )}
              >
                <Image
                  src={"/assets/images/listed-sample.png"}
                  className="w-full h-full object-cover"
                  fill
                  sizes="360px"
                  alt="house-sample"
                />

                <div className="absolute w-full h-[50%] pointer-events-none bg-gradient-to-b from-transparent via-cyan-700/50 to-black/80 bottom-0"></div>
                <div className="flex items-center justify-between w-full mt-auto bg-red-300 p-4">
                  <div className="flex flex-col gap-1 mt-auto text-white relative items-start">
                    <p className="font-semibold text-lg">Canggu, Bali</p>
                    <p className="h-0 font-light overflow-hidden opacity-0 group-hover:opacity-100 group-hover:h-10 transition-all duration-300 ease-in-out whitespace-nowrap">
                      Start from Rp640.000.000
                    </p>
                  </div>
                  <button
                    className={cnm(
                      "w-10 shrink-0 aspect-square rounded-full bg-lemongrass relative opacity-0 flex items-center justify-center",
                      "translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-opacit duration-300 ease-in-out"
                    )}
                  >
                    <SvgIcon
                      src={"/assets/icons/arrow-up-right.svg"}
                      className="w-7 h-7 bg-black"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* spacer */}
          <div className="w-full h-44"></div>
        </div>

        {/* Join */}
        <div className="w-full px-2 md:px-7 -mt-40">
          <div className="w-full min-h-[400px] bg-neutral-100 rounded-2xl flex flex-col lg:flex-row overflow-hidden">
            <div className="flex flex-col items-start w-full max-w-lg p-6 md:p-10">
              <p className="text-3xl md:text-4xl font-medium">
                Join our community and be the first to know about new listings,
                updates, and exclusive offers.
              </p>
              <p className="text-lg md:text-xl font-light mt-10">
                Sign Up with your email today!
              </p>
              <div className="flex border rounded-lg bg-white overflow-hidden mt-6 p-0">
                <input
                  type="text"
                  className="outline-none pl-4 md:px-4 py-3 grow lg:min-w-80"
                  placeholder="Enter your email"
                />
                <button className="text-sm md:text-base px-3 md:px-5 py-3 bg-mossgreen text-lemongrass rounded-md">
                  Submit
                </button>
              </div>
            </div>
            <div className="w-full h-80 md:h-auto md:grow relative">
              <Image
                src="/assets/images/holding-house.png"
                alt="holding-house"
                fill
                sizes="500px"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
