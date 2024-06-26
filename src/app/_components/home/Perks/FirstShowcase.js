import { motion } from "framer-motion";
import Image from "next/image";
import SvgIcon from "../../utils/SvgIcon";

export default function FirstShowcase() {
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      whileInView={{
        y: 40,
      }}
      transition={{
        delay: 0.3,
      }}
      className="h-full relative flex items-center justify-center w-full max-w-xl"
    >
      <motion.div
        initial={{
          rotate: 0,
        }}
        whileInView={{
          rotate: 6,
          top: "12px",
        }}
        transition={{
          delay: 0.2,
        }}
        className="w-[50vw] md:w-[20vw] h-[270px] bg-white rounded-2xl border absolute"
      >
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
          <p className="text-xl font-medium">Rp 12.000.000.000</p>
          <p className="font-light text-neutral-500">Canggu, Bali</p>
          <div className="flex items-center gap-3 font-light">
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
      <motion.div
        initial={{
          rotate: 0,
          x: 0,
        }}
        whileInView={{
          rotate: -6,
          x: -30,
        }}
        transition={{
          delay: 0.3,
        }}
        className="w-[50vw] md:w-[20vw] h-[270px] bg-white rounded-2xl border absolute origin-bottom-left"
      >
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
          <p className="text-xl font-medium">Rp 12.000.000.000</p>
          <p className="font-light text-neutral-500">Canggu, Bali</p>
          <div className="flex items-center gap-3 font-light">
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
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="rounded-full flex items-center gap-1 px-2 py-1 bg-lemongrass absolute -left-8 top-4"
        >
          <SvgIcon
            src={"/assets/icons/verified.svg"}
            className="w-6 h-6 bg-mossgreen"
          />
          <p>Notarized</p>
        </motion.div>
      </motion.div>

      {/* List */}
      <div className="flex flex-col gap-4 absolute right-0 md:right-14 text-xs">
        <motion.div
          initial={{
            x: 20,
            y: 10,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="w-36 md:w-44 border rounded-xl bg-[#F2FED1] py-3 px-3 flex items-center justify-between"
        >
          <p className="font-medium">Price</p>
          <div className="px-2 bg-[#026423] flex items-center rounded gap-1 py-0.5">
            <p className="text-[#F3FFC5] text-[10px]">Verified</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 20,
            y: 10,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
          className="w-40 md:w-44 border rounded-xl bg-[#F2FED1] py-3 px-3 flex items-center justify-between ml-6"
        >
          <p className="font-medium">Certificate</p>
          <div className="px-2 bg-[#026423] flex items-center rounded gap-1 py-0.5">
            <p className="text-[#F3FFC5] text-[10px]">Verified</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 20,
            y: 10,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="w-40 md:w-44 border rounded-xl bg-[#F2FED1] py-3 px-3 flex items-center justify-between"
        >
          <p className="font-medium">Location</p>
          <div className="px-2 bg-[#026423] flex items-center rounded gap-1 py-0.5">
            <p className="text-[#F3FFC5] text-[10px]">Verified</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
