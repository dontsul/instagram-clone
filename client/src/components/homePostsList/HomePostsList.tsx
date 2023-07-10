import { HomeItemPostsList } from "../homeItemPostsList/HomeItemPostsList"

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

import { Avatar } from "../avatar/Avatar"

const posts = [
  {
    id: "4",
    image: img4,
    user: { username: "vasyl", avatar: "avatar.png" },
    likes: {
      count: 1507,
      listUsers: [{ username: "vasyl", avatar: "avatar.png" }],
    },
    comments: {
      count: 504,
      listUsers: [
        {
          username: "vasyl",
          avatar: "avatar.png",
          text: "some comments",
          createdAt: "05.07.2023",
        },
      ],
    },
  },

  // { image: img2 },
  // { image: img3 },
  // { image: img4 },
  // { image: img5 },
  // { image: img6 },
  // { image: img7 },
  // { image: img8 },
  // { image: img9 },
  // { image: img10 },
  // { image: img11 },
  // { image: img12 },
]

export const HomePostsList = () => {
  return (
    <div className="flex flex-col  items-center ">
      {posts.map((post) => {
        return <HomeItemPostsList key={post.id} post={post} />
      })}
    </div>
  )
}
