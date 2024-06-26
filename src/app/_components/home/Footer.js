import { INSTA_LINK, TWITTER_LINK } from "@/config";
import SvgIcon from "../utils/SvgIcon";

export default function Footer() {
  return (
    <footer className="w-full flex px-4 md:px-16 justify-start items-start mt-20 py-6 gap-24 flex-col md:flex-row">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 aspect-square rounded-full bg-neutral-400"></div>
          <p className="text-xl font-medium">BlockEstate</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={TWITTER_LINK} target="_blank">
            <SvgIcon
              src={"/assets/icons/twitter.svg"}
              className={"w-6 h-6 bg-black"}
            />
          </a>
          <a href={INSTA_LINK} target="_blank">
            <SvgIcon
              src={"/assets/icons/insta.svg"}
              className={"w-6 h-6 bg-black"}
            />
          </a>
        </div>
        <p className="font-light">
          &copy; 2024 Blockstate. All rights reserved
        </p>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-3">
          <a className="font-semibold">Menu</a>
          <a>About Us</a>
          <a>How To Work</a>
          <a>Benefit</a>
          <a>Contact Uss</a>
        </div>
      </div>
    </footer>
  );
}
