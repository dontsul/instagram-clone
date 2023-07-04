import { Link } from "react-router-dom"

export const CurrentUserAction = () => {
  return (
    <div className="flex items-center justify-start gap-6 px-3 pt-5 mb-8">
      <Link
        className="bg-emerald-600 py-1 px-4  rounded-lg cursor-pointer h-8 shadow hover:shadow-md hover:shadow-teal-900 transition-all"
        to={`/message`}
      >
        Edit profile
      </Link>
    </div>
  )
}
