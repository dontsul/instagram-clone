import { Outlet } from "react-router-dom"
import { Menu } from "../components/menu/Menu"
export const Layout = () => {
  return (
    <div className="grid grid-cols-1 relative h-full md:grid-cols-[minmax(100px,_100px)_1fr] lg:grid-cols-[minmax(200px,_200px)_1fr]">
      <div className="md:order-2">
        <Outlet />
      </div>
      <aside className="fixed bottom-0 md:bottom-full md:sticky md:top-0 md:h-screen w-full md:order-1 bg-teal-900">
        <Menu />
      </aside>
    </div>
  )
}
