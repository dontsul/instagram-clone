import { useState } from "react"
import { BsGrid3X3, BsCameraVideo } from "react-icons/bs"
import { PiUserSquareLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import { ItemNavPosts } from "../itemNavPosts/ItemNavPosts"

const navMenu = [
  {
    link: "",
    el: BsGrid3X3,
    size: 20,
  },
  {
    link: "reels",
    el: BsCameraVideo,
    size: 25,
  },
  {
    link: "tagged",
    el: PiUserSquareLight,
    size: 30,
  },
]

export const NavPosts = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <nav>
      <ul className="grid grid-cols-3 justify-center mb-[2px]">
        {navMenu.map((item, index) => (
          <ItemNavPosts
            key={index}
            item={item}
            isSelected={activeIndex === index}
            handleClick={() => {
              setActiveIndex(index)
            }}
          />
        ))}
      </ul>
    </nav>
  )
}
