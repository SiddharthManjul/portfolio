import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import MoonIcon from "./moonIcon";
import SunIcon from "./sunIcon";

const ThemeSwitcher = () => {
  const [lightMode, setLightMode] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Set initial theme
    setTheme(lightMode ? "light" : "dark");
  }, [lightMode]);

  const toggleLightMode = () => {
    setLightMode((prevLightMode) => !prevLightMode);
  };

  return (
    <div>
      <Switch
        checked={lightMode}
        onChange={toggleLightMode}
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
