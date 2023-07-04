import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "../button/Button"
import { Input } from "../input/Input"

type FormData = {
  email: string
  fullName: string
  username: string
  password: string
}

const schema = yup
  .object({
    email: yup.string().email().required("Email is a required field"),
    fullName: yup.string().required("Full Name is a required field"),
    username: yup.string().required("Username is a required field"),
    password: yup.string().required("Password is a required field").min(6),
  })
  .required()

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
    },
  })
  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Email" />}
        />
        <p className="text-sm text-red-600">{errors.email?.message}</p>
      </div>

      <div className="mb-4">
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Full Name" />}
        />
        <p className="text-sm text-red-600">{errors.fullName?.message}</p>
      </div>

      <div className="mb-4">
        <Controller
          name="username"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Username" />}
        />
        <p className="text-sm text-red-600">{errors.username?.message}</p>
      </div>

      <div className="mb-4">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Password" type="password" />
          )}
        />
        <p className="text-sm text-red-600">{errors.password?.message}</p>
      </div>

      <div>
        <div className="text-gray-400 text-sm text-center mb-4">
          People who use our service may have uploaded your contact information
          to Instagram.
        </div>
        <div className="text-gray-400 text-sm text-center mb-4">
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy .
        </div>
      </div>

      <div className="flex items-center justify-center  mb-4">
        <Button type="submit" onClick={() => {}} cn="w-full">
          Sign up
        </Button>
      </div>
    </form>
  )
}
