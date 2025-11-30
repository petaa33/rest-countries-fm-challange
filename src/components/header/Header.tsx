import ThemeToggle from '../themeToggle/ThemeToggle';
import { useContext } from "react";
import { ThemeContext, IThemeContext } from "../../stores/theme/Theme";
import style from "./header.module.css";

const Header = () => {
  const {theme} = useContext<IThemeContext>(ThemeContext);

  return (
    <div className={`${style.container} ${theme}`}>
        <div>
            Where in the world
        </div>
        <ThemeToggle />
    </div>
  )
}

export default Header