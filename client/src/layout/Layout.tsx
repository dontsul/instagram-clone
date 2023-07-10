import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"

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
      gridTemplateColumns: `${window.innerWidth < 1023 ? 100 : 200}px ${
        window.innerWidth < 1023
          ? window.innerWidth - 100
          : window.innerWidth - 200
      }px`,
    })
  }, [windowWidth])

  return (
    <div
      style={windowWidth > 767 ? styles : {}}
      className={`grid grid-cols-1 relative`}
    >
      <div className="md:order-2">
        <Outlet />
      </div>
      <aside className="fixed bottom-0 md:bottom-full md:sticky md:top-0 md:min-h-screen md:max-h-full w-full md:order-1 bg-teal-900">
        <Menu />
      </aside>
      <Toaster position="bottom-left" />
    </div>
  )
}
