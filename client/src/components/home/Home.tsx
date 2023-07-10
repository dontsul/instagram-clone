import { HomePostsList } from "../homePostsList/HomePostsList"
import { HomeStoriesList } from "../homeStoriesList/HomeStoriesList"
import { InstagramTextIcon } from "../instagramTextIcon/InstagramTextIcon"

import { BiMessageRoundedDots, BiHeart } from "react-icons/bi"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="px-2 w-full">
      <header className="flex items-center justify-between px-2 mb-4">
        <div className="flx items-center">
          {" "}
          <InstagramTextIcon w={140} />
        </div>
        <div className="flex items-center">
          <Link to={`/`}>
            <BiHeart className="mr-4" size={30} color={"#e2e8f0"} />
          </Link>
          <Link to={`/`}>
            <BiMessageRoundedDots size={30} color={"#e2e8f0"} />
          </Link>
        </div>
      </header>
      <div className="overflow-x-auto">
        {" "}
        <HomeStoriesList />{" "}
      </div>
      <HomePostsList />
    </div>
  )
}
