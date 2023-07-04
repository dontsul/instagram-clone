import { ReelsList } from "../reelsList/ReelsList"
import v1 from "../../assets/video/v1.mp4"
import v2 from "../../assets/video/v2.mp4"
import v3 from "../../assets/video/v3.mp4"

const reels = [{ reel: v1 }, { reel: v2 }, { reel: v3 }]

export const Reels = () => {
  return (
    <div>
      <ReelsList reels={reels} />
    </div>
  )
}
