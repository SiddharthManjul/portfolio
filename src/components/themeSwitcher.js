import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import MoonIcon from "./moonIcon";
import SunIcon from "./sunIcon";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Set initial theme
    setTheme(darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div>
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        defaultSelected
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      />
    </div>
  );
};

export default ThemeSwitcher;
