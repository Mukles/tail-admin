"use client";

import { Dark } from "@/icons";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Button
      className="rounded-full border border-border bg-transparent"
      variant={"outline"}
      size={"icon"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted &&
        (theme === "dark" ? (
          <Sun className="size-5" />
        ) : (
          <Dark className="size-5" />
        ))}
    </Button>
  );
};

export default ThemeSwitcher;
