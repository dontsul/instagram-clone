import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../avatar/Avatar"
import { UserSocial } from "../userSocial/UserSocial"
import { UserBio } from "../userBio/UserBio"
import { UserAction } from "../userAction/UserAction"
import { CurrentUserAction } from "../currentUserAction/CurrentUserAction"
import { Posts } from "../posts/Posts"
import { Outlet } from "react-router-dom"

export const Profile = () => {
  return (
    <div>
      <header className="flex items-center justify-center py-3 relative">
        <div className="absolute top-3 left-2 cursor-pointer  hover:bg-teal-900 rounded-lg p-1">
          <IoIosArrowBack color={"white"} size={25} className="" />
        </div>

        <div className="flex items-center justify-center font-medium text-base pt-1">
          username
        </div>
      </header>
      <div className="flex items-center justify-start gap-6 px-3 pt-5">
        <Avatar />
        <UserSocial />
      </div>
      <div className="px-3 pt-5">
        <UserBio />
      </div>
      <div className="px-3 pt-5 mb-8">
        <UserAction />
        {/* <CurrentUserAction /> */}
      </div>
      <Outlet />
      {/* <Posts /> */}
    </div>
  )
}
