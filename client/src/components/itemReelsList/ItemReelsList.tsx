import { FC } from "react"
import { Link } from "react-router-dom"

interface elementProps {
  reel: string
}

interface ItemReelsListProps {
  element: elementProps
}

export const ItemReelsList: FC<ItemReelsListProps> = ({ element }) => {
  return (
    <div className="">
      <Link to={`:profile/reels/reel`} className="block h-ful w-full">
        <video src={element.reel} controls></video>
      </Link>
    </div>
  )
}
