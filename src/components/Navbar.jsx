// Navbar.tsx
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // start closed

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
     <div className="container mx-auto flex items-center justify-between px-2 sm:px-4">
  {/* LEFT: toggle + brand together */}
  <div className="flex items-center gap-2 -ml-1">
    <ThemeToggle />
    <a className="text-xl font-bold text-primary flex items-center" href="#home">
      <span className="relative z-10">
        <span className="text-glow text-foreground">Naveena </span> Portfolio
      </span>
    </a>
    </div>

        {/* Desktop nav + toggle */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
         
        </div>

        {/* Mobile right controls: toggle + menu */}
        <div className="md:hidden flex items-center gap-3">
         
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="p-2 text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
