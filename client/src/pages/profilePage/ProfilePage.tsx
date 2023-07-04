import { Profile } from "../../components/profile/Profile"
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../../components/avatar/Avatar"
import { UserSocial } from "../../components//userSocial/UserSocial"
import { UserBio } from "../../components//userBio/UserBio"
import { UserAction } from "../../components//userAction/UserAction"
import { CurrentUserAction } from "../../components/currentUserAction/CurrentUserAction"
import { Outlet } from "react-router-dom"
import { NavPosts } from "../../components/navPosts/NavPosts"

export const ProfilePage = () => {
  return (
    <div className="pb-[50px] md:pb-0 pt-3">
      <header className="flex items-center justify-center relative mb-7">
        <div className="absolute left-2 cursor-pointer  hover:bg-teal-900 rounded-lg p-1">
          <IoIosArrowBack color={"white"} size={25} className="" />
        </div>

        <div className="flex items-center justify-center font-medium text-base">
          username
        </div>
      </header>
      <div className="flex items-center justify-start gap-6 px-3">
        <Avatar />
        <UserSocial />
      </div>
      <UserBio />
      <UserAction />
      {/* <CurrentUserAction /> */}
      <NavPosts />
      <Outlet />
    </div>
  )
}
