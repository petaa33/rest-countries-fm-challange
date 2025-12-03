import moon from "../../icons/moon.svg";
import sun from "../../icons/sun.svg";
import style from "./themetoggle.module.css";
import { useContext } from "react";
import { ThemeContext, IThemeContext } from "../../stores/theme/Theme";

const ThemeToggle = () => {
	const {theme, handleToggle} = useContext<IThemeContext>(ThemeContext);

  return (
    <button className={`${style.container} ${theme}`} type="button" onClick={handleToggle}>
      <img src={sun} alt="theme-icon" />
      <div>Dark mode</div>
    </button>
  );
};

export default ThemeToggle;
