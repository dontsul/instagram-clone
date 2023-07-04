import { ReactNode, ElementType } from "react"
import { Link } from "react-router-dom"
import {
  BiHomeAlt,
  BiCompass,
  BiVideo,
  BiPlusCircle,
  BiMessageRoundedDots,
  BiUserCircle,
  BiSearch,
  BiHeart,
  BiLogoInstagram,
} from "react-icons/bi"
import { InstagramTextIcon } from "../instagramTextIcon/InstagramTextIcon"

interface menuItemTypes {
  el: ElementType
  title: string
  path: string
  cn: string
}

const menuItem: menuItemTypes[] = [
  {
    el: BiHomeAlt,
    title: "Home",
    path: "/",
    cn: "block",
  },
  {
    el: BiCompass,
    title: "Explore",
    path: "/explore",
    cn: "hidden md:block",
  },

  {
    el: BiMessageRoundedDots,
    title: "Message",
    path: "/message",
    cn: "hidden md:block",
  },

  {
    el: BiSearch,
    title: "Search",
    path: "/search",
    cn: "block",
  },
  {
    el: BiHeart,
    title: "Notifications",
    path: "/notifications",
    cn: "hidden md:block",
  },
  {
    el: BiPlusCircle,
    title: "Create",
    path: "/create",
    cn: "block",
  },
  {
    el: BiVideo,
    title: "Reels",
    path: "/reels",
    cn: "block",
  },
  {
    el: BiUserCircle,
    title: "Profile",
    path: "/profile",
    cn: "block",
  },
]

export const Menu = () => {
  return (
    <div className="md:py-3 px-6 border-t-gray-200 w-full  md:border-r-gray-200">
      <div className="md:py-10">
        <BiLogoInstagram
          size={40}
          className="hidden md:block lg:hidden mx-auto"
        />
        <InstagramTextIcon
          cn="hidden md:hidden lg:block w-[200px]"
          h={25}
          w={100}
        />
      </div>
      <ul className="flex items-center justify-between flex-row md:flex-col md:items-center lg:items-start md:h-full md:space-y-1 ">
        {menuItem.map(({ el: Element, title, path, cn }, i) => (
          <li
            className={`md:hover:bg-teal-950 px-4 py-3 rounded-lg cursor-pointe ${cn}`}
            key={i}
          >
            <Link className="flex items-center justify-center" to={path}>
              <Element className="" size={25} color={"#e2e8f0"} />{" "}
              <span className="hidden lg:block ml-2">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
