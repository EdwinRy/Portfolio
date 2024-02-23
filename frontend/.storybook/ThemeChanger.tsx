import React from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeChanger = ({ theme }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return null;
};

export default React.memo(ThemeChanger);

