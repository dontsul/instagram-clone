import { FC, InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ name, ...props }, ref) => {
    return (
      <input
        {...props}
        name={name}
        ref={ref}
        className="focus:outline-none bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600"
      />
    )
  },
)
