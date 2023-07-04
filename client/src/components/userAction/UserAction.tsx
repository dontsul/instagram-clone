import { Link } from "react-router-dom"

export const UserAction = () => {
  return (
    <div className="flex items-center justify-start gap-6 px-3 pt-5 mb-8">
      <button className="bg-emerald-600 py-1 px-4  rounded-lg cursor-pointer w-24 h-8 shadow hover:shadow-md hover:shadow-teal-900 transition-all">
        Follow
      </button>
      <Link
        className="py-1 px-4 rounded-lg border border-gray-300 w-24 h-8 flex items-center justify-center shadow hover:shadow-md hover:shadow-teal-900 transition-all"
        to={`/message`}
      >
        Message
      </Link>
    </div>
  )
}
