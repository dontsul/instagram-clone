import { PostsList } from "../postsList/PostsList"

import img1 from "../../assets/images/posts/1.png"
import img2 from "../../assets/images/posts/2.jpg"
import img3 from "../../assets/images/posts/3.jpg"
import img4 from "../../assets/images/posts/4.jpg"
import img5 from "../../assets/images/posts/5.jpg"
import img6 from "../../assets/images/posts/6.jpg"
import img7 from "../../assets/images/posts/7.jpg"
import img8 from "../../assets/images/posts/8.jpg"
import img9 from "../../assets/images/posts/9.jpg"
import img10 from "../../assets/images/posts/10.jpg"
import img11 from "../../assets/images/posts/11.jpg"
import img12 from "../../assets/images/posts/12.png"

const posts = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
]

export const Posts = () => {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  )
}
