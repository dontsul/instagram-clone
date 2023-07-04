import { useEffect, useState } from "react"

import { Outlet } from "react-router-dom"
import { Menu } from "../components/menu/Menu"
export const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [styles, setStyles] = useState({})

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    setStyles({
      gridTemplateColumns: `${windowWidth > 1023 ? 200 : 100}px ${
        windowWidth > 1023 ? windowWidth - 200 : windowWidth - 100
      }px`,
    })
  }, [windowWidth])

  return (
    <div
      style={windowWidth > 768 ? styles : {}}
      className={`grid grid-cols-1 relative`}
    >
      <div className="md:order-2">
        <Outlet />
      </div>
      <aside className="fixed bottom-0 md:bottom-full md:sticky md:top-0 md:h-full w-full md:order-1 bg-teal-900">
        <Menu />
      </aside>
    </div>
  )
}
