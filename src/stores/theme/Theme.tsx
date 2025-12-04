import { createContext, useState } from "react";

export const enum ThemeEnum {
    LIGHT,
    DARK
}

export const themes = new Map<ThemeEnum, string>([
    [ThemeEnum.LIGHT, "theme-light"],
    [ThemeEnum.DARK, "theme-dark"]
]);

interface Props {
    children: React.ReactNode;
}

export interface IThemeContext {
    theme: string,
    handleToggle: () => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme: "light",
    handleToggle: () => {}
});

const Theme: React.FC<Props> = ({children}) => {
    const[theme, setTheme] = useState<string>(themes.get(ThemeEnum.DARK)!);

    const handleToggle = () => {
        setTheme(theme === themes.get(ThemeEnum.DARK) ? themes.get(ThemeEnum.LIGHT)! : themes.get(ThemeEnum.DARK)!);
    }

    return (
        <ThemeContext value={{
            theme,
            handleToggle
        }}>
            {children}
        </ThemeContext>
    )
}

export default Theme;



