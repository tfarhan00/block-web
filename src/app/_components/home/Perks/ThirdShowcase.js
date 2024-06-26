import { motion } from "framer-motion";
import SvgIcon from "../../utils/SvgIcon";
import Image from "next/image";

export default function ThirdShowcase() {
  return (
    <div className="h-full relative flex items-center justify-center w-full max-w-2xl">
      <div className="relative w-full max-w-sm">
        <div className="flex flex-col items-center gap-3 max-w-[240px]">
          <motion.div className="w-full h-[260px] bg-white rounded-2xl relative -rotate-6 border -translate-y-4">
            <div className="w-full h-full flex flex-col gap-2.5 p-3">
              <div className="w-full h-32 bg-blue-400 rounded-lg relative overflow-hidden">
                <Image
                  src={"/assets/images/listed-sample.png"}
                  className="w-full h-full object-cover"
                  fill
                  sizes="360px"
                  alt="house-sample"
                />
              </div>
              <p className="font-medium">Rp 12.000.000.000</p>
              <p className="font-light text-neutral-500 text-sm">
                Canggu, Bali
              </p>
              <div className="flex items-center gap-3 font-light text-xs">
                <div className="flex items-center gap-1">
                  <SvgIcon
                    src={"/assets/icons/bed.svg"}
                    className="w-4 h-4 bg-black"
                  />
                  <span>6</span>
                </div>
                <div className="flex items-center gap-1">
                  <SvgIcon
                    src={"/assets/icons/shower.svg"}
                    className="w-4 h-4 bg-black"
                  />
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                  <SvgIcon
                    src={"/assets/icons/expand.svg"}
                    className="w-4 h-4 bg-black"
                  />
                  <span>500m2</span>
                </div>
              </div>
            </div>
            <div className="rounded-full flex items-center gap-1 px-2 bg-lemongrass absolute left-4 top-4 text-sm">
              <SvgIcon
                src={"/assets/icons/verified.svg"}
                className="w-4 h-4 bg-mossgreen"
              />
              <p>Notarized</p>
            </div>
          </motion.div>
        </div>
        {/* cv pict */}
        <div className="w-64 aspect-square absolute -bottom-12 right-0">
          <Image
            src={"/assets/images/cv.png"}
            alt="cv-img"
            fill
            sizes="300px"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
