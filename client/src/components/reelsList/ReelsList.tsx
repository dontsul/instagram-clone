import { FC } from "react"
import { ItemReelsList } from "../itemReelsList/ItemReelsList"

export interface ReelProps {
  reel: string
}

interface ReelsListProps {
  reels: ReelProps[]
}

export const ReelsList: FC<ReelsListProps> = ({ reels }) => {
  return (
    <div className="grid gap-[2px] grid-cols-3">
      {reels.map((element, index) => (
        <ItemReelsList key={index} element={element} />
      ))}
    </div>
  )
}
