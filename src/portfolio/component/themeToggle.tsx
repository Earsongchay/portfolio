import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hook/useDarkMode";
import { Toggle } from "@/components/ui/toggle";

function ThemeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <Toggle onClick={toggleDarkMode}>{isDark ? <Sun /> : <Moon />}</Toggle>
  );
}

export default ThemeToggle;
