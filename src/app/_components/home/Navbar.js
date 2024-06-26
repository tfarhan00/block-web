import SvgIcon from "../utils/SvgIcon";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center py-4 px-4 md:px-8">
      <div className="flex items-center gap-3">
        <div className="w-8 aspect-square rounded-full bg-neutral-400"></div>
        <p className="text-lg md:text-xl font-medium">BlockEstate</p>
      </div>

      <div className="ml-12 hidden md:flex items-center gap-6">
        <a>How It Works</a>
        <a>Features</a>
        <a>Contact Us</a>
      </div>

      <button className="flex items-center gap-1.5 px-4 py-2 font-medium rounded-lg bg-mossgreen ml-auto">
        <SvgIcon
          src={"/assets/icons/login.svg"}
          className="h-4 w-4 bg-lemongrass"
        />
        <p className="text-lemongrass text-sm md:text-base">Sign In</p>
      </button>
    </nav>
  );
}
