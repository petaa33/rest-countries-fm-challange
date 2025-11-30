import React from 'react'
import Header from '../../components/header/Header';
import { useContext } from 'react';
import {IThemeContext, ThemeContext} from '../../stores/theme/Theme';
import style from "./layout.module.css"
import "../../global.css"

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  const {handleToggle, theme} = useContext<IThemeContext>(ThemeContext);

  return (
    <div className={`${style.container} ${theme}`}>
        <Header />
        {children}
    </div>
  )
}

export default Layout