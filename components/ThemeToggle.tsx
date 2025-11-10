"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // Initialize theme once on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      const initialTheme: "light" | "dark" =
        stored === "dark" || (!stored && prefersDark) ? "dark" : "light";

      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    } catch {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Prevent render before theme is known to avoid flash/hydration mismatch
  if (!theme) return null;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 text-sm rounded-lg border dark:border-gray-600 border-gray-300 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
