import MobileNav from "../Nav/MobileNav";
import Nav from "../Nav/Nav"; // Import client-side Nav component
import Link from "next/link"; // Link is safe to use on the server side
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jakkapat<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Nav & hire me*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav /> {/* Nav is client-side, so it will render dynamically */}
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
