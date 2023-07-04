import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "../button/Button"
import { Input } from "../input/Input"

type FormData = {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup.string().email().required("Email is a required field"),
    password: yup.string().required("Password is a required field").min(6),
  })
  .required()

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
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
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Password" type="password" />
          )}
        />
        <p className="text-sm text-red-600">{errors.password?.message}</p>
      </div>

      <div className="flex items-center justify-center  mb-4">
        <Button type="submit" onClick={() => {}} cn="w-full">
          Sign in
        </Button>
      </div>
    </form>
  )
}
