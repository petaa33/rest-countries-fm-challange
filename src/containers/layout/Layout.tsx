import React from 'react'
import Header from '../../components/header/Header';
import { useContext } from 'react';
import {IThemeContext, ThemeContext} from '../../stores/theme/Theme';
import { Outlet } from 'react-router';
import style from "./layout.module.css"
import "../../global.css"

const Layout: React.FC = () => {
  const {handleToggle, theme} = useContext<IThemeContext>(ThemeContext);

  return (
    <div className={`${style.container} ${theme}`}>
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout