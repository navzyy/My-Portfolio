// ThemeToggle.jsx (pure JS)
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = (props) => {
  const { variant = "inline", className = "" } = props || {};
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme = stored ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    setIsDarkMode(theme === "dark");
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        variant === "fixed"
          ? "fixed top-5 left-5 z-50 p-2 rounded-full"
          : "inline-flex p-2 rounded-full",
        "transition-colors duration-300 focus:outline-none",
        className
      )}
    >
      {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-yellow-900" />}
    </button>
  );
};
