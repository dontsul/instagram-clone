import { FC } from "react"
import { ItemPostsLists } from "../itemPostsList/ItemPostsLists"

interface postProps {
  image: string
}

interface PostsListProps {
  posts: postProps[]
}

export const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <div className="grid gap-[2px] grid-cols-3">
      {posts.map((element, index) => (
        <ItemPostsLists key={index} element={element} />
      ))}
    </div>
  )
}
