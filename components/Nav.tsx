"use client";

import { useLayoutEffect, useState } from "react";
import HumeLogo from "./logos/Hume";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";
import Link from "next/link";
import { Button } from "./ui/button";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center bg-gradient-to-b from-teal-50 to-cyan-100  h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        <HumeLogo className={"h-5 w-auto"} />
      </div>
      <div className={"ml-auto flex items-center gap-5"}>
        <Link href="/" passHref>
          Accueil
        </Link>

        <Link href="/explorer" passHref>
          Explorer
        </Link>

        <Link href="/podcast" passHref>
          Podcast
        </Link>
      </div>
    </div>
  );
};
