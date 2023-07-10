import { FC } from "react"
import { Avatar } from "../avatar/Avatar"
import { BsThreeDots } from "react-icons/bs"
import { BiHeart, BiMessageRoundedDots } from "react-icons/bi"
interface IUserProps {
  username: string
  avatar: string
}

interface ILikeProps {
  count: number
  listUsers: IUserProps[]
  createdAt: string
}
interface ICommentProps {
  count: number
  listUse: {
    username: string
    avatar: string
    text?: string
    createdAt?: string
  }[]
}

interface IPostProps {
  post: {
    id: string
    image: string
    user: IUserProps
    likes: ILikeProps[]
    comments: ICommentProps[]
  }
}

export const HomeItemPostsList: FC<IPostProps> = ({ post }) => {
  console.log(post)

  return (
    <div className="flex flex-col py-2 max-w-[400px] mx-auto">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-start">
          <Avatar h={40} w={40} cn="mr-2" />
          <div className="text-sm text-center">{post.user.username}</div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div>
        <img src={post.image} alt="some post" />
      </div>
      <div className="flex items-center justify-start py-2">
        <BiHeart size={25} className="mr-2" />
        <BiMessageRoundedDots size={25} />
      </div>
      <div className="">
        Likes: <span>{post.likes.count}</span>
      </div>
    </div>
  )
}
