/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ThemeModeContext = createContext();

function ThemeModeProvider({ children }) {
  let savemode=localStorage.getItem("mode")!==null?localStorage.getItem("mode"):""
 
  const [darkMode, setDarkMode] = useState(savemode);
  useEffect(()=>{
   if (darkMode==true) {
    
     localStorage.setItem("mode",darkMode)
   }if(darkMode==false){
    localStorage.clear()
   }
      
  
  },[darkMode])

  return <ThemeModeContext.Provider value={{ setDarkMode, darkMode }}>{children}</ThemeModeContext.Provider>;
}
export { ThemeModeContext, ThemeModeProvider };
