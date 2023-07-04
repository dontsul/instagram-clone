import { PostsList } from "../postsList/PostsList"

import img1 from "../../assets/images/posts/1.png"
import img2 from "../../assets/images/posts/2.jpg"
import img3 from "../../assets/images/posts/3.jpg"
import img4 from "../../assets/images/posts/4.jpg"
import img5 from "../../assets/images/posts/5.jpg"

const posts = [
  { image: img5 },
  { image: img4 },
  { image: img2 },
  { image: img3 },
  { image: img1 },
]

export const Tagged = () => {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  )
}
