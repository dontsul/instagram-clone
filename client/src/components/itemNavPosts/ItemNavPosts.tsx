import { FC, ReactNode, ElementType } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface ItemsProps {
  el: ElementType
  link: string
  size: number
}

interface ItemNavPostsProps {
  item: ItemsProps
  isSelected: boolean
  handleClick: () => void
}

export const ItemNavPosts: FC<ItemNavPostsProps> = ({
  item,
  isSelected,
  handleClick,
}) => {
  const { el: Element, link, size } = item

  return (
    <motion.li
      onClick={handleClick}
      className="flex justify-center items-center cursor-pointer relative"
    >
      {isSelected && <ActiveLine />}
      <Link
        className="h-full w-full flex justify-center"
        to={`/:profile/${link}`}
      >
        <Element size={size} />
      </Link>
    </motion.li>
  )
}

export const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeItem"
      className={`w-full h-[2px] absolute bottom-0 bg-slate-200 `}
    />
  )
}
