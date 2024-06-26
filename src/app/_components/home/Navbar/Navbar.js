import SignIn from "./SignIn";

export default function Navbar() {
  return (
    <>
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

        <SignIn />
      </nav>
    </>
  );
}
