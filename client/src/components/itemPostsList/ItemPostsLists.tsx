import { FC } from "react"
import { Link } from "react-router-dom"

interface elementProps {
  image: string
}

interface ItemPostsListsProps {
  element: elementProps
}

export const ItemPostsLists: FC<ItemPostsListsProps> = ({ element }) => {
  return (
    <div className="relative overflow-hidden pb-[100%]">
      <Link to={`:profile/posts/post`} className="block h-ful w-full">
        <img
          className="absolute w-full h-full object-cover left-0 top-0 rounded-sm"
          src={element.image}
          alt="animal"
        />
      </Link>
    </div>
  )
}
