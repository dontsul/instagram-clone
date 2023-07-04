import { Link } from "react-router-dom"

export const UserSocial = () => {
  return (
    <div className="flex items-center justify-start gap-6">
      <Link
        to={"/"}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <span className="font-medium text-base ">1894</span>
        <span className="font-sm text-xs ">Posts</span>
      </Link>
      <Link
        to={"/"}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <span className="font-medium text-base ">5515</span>
        <span className="font-sm text-xs ">Followes</span>
      </Link>
      <Link
        to={"/"}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <span className="font-medium text-base ">2050</span>
        <span className="font-sm text-xs">Following</span>
      </Link>
    </div>
  )
}
