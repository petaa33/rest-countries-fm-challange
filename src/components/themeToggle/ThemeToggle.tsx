import moon from "../../icons/moon.svg";
import sun from "../../icons/sun.svg";
import style from "./themetoggle.module.css";
import { useContext } from "react";
import { ThemeContext, IThemeContext, themes, ThemeEnum } from "../../stores/theme/Theme";

const ThemeToggle = () => {
	const {theme, handleToggle} = useContext<IThemeContext>(ThemeContext);

  return (
    <button className={`${style.container} ${theme}`} type="button" onClick={handleToggle}>
      <img src={theme === themes.get(ThemeEnum.DARK) ? sun : moon} alt="theme-icon" />
      <div>{theme === themes.get(ThemeEnum.DARK) ? "Light mode" : "Dark mode"}</div>
    </button>
  );
};

export default ThemeToggle;
