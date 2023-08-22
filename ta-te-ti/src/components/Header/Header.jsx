import style from "./Header.module.css";
import {Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { defineTitle } from "./logic";

function Header() {
  const {pathname} = useLocation()
  const [isHome,setIsHome] = useState(pathname!=="/"? false : true)
  const [title,setTitle] = useState(()=>defineTitle(pathname))

  useEffect(()=>{
    //modifico el estado de acuerdo a el cambio de url por pathname 
    pathname !== "/" ? setIsHome(false) : setIsHome(true)
    setTitle(()=>defineTitle(pathname))

  },[pathname])
  

  return (
    <header className={isHome ? style.header : style.headerWithLink}>
      <div  className={isHome  ? style.none : style.btnBack }>
        {
        pathname!=="/" 
          ? <Link to="/" > Atras</Link>
          : null
        }
      </div>
      <h1 className={isHome ? style.title :style.titleTwo }>{title}</h1>
      <div className={isHome ? style.none :style.space}></div>
    </header>
  )
}

export default Header