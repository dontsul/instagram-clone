import { FC, ReactNode, HTMLProps } from "react"

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  onClick: () => void
  cn: string
  type?: "button" | "submit" | "reset"
  bg?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  cn,
  bg = "bg-emerald-600",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`flex justify-center items-center py-2 px-4 rounded-lg 
       ${bg}
      ${cn ? cn : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
