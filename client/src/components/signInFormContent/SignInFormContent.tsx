import { InstagramTextIcon } from "../instagramTextIcon/InstagramTextIcon"
import { Button } from "../button/Button"
import { AiFillFacebook } from "react-icons/ai"
import { SignInForm } from "../signInForm/SignInForm"
import { Devider } from "../devider/Devider"
import { Link } from "react-router-dom"
import { AppStore } from "../appStore/AppStore"
import { GooglePlay } from "../googlePlay/GooglePlay"

export const SignInFormContent = () => {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="mb-20 max-w-[380px]">
        <div className="p-8 w-full ring-transparent sm:ring-1 sm:ring-gray-200 rounded-md mb-4">
          <InstagramTextIcon />
          <p className="text-center font-medium text-blue-gray-400 text-base mb-4">
            Sign in to see photos and videos from your friends.
          </p>
          <SignInForm />
          <Devider />

          <div className="flex items-center justify-center mb-8 w-full">
            <Button bg="bg-blue-600" onClick={() => {}} cn="w-full  w-full">
              <AiFillFacebook className="mr-2" size={25} />
              Log in with Facebook
            </Button>
          </div>
          <div className="flex items-center justify-center w-full">
            <Link className="text-sm " to={`/forgotpassword`}>
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="p-8 max-w-[380px] ring-transparent sm:ring-1 sm:ring-gray-200 rounded-md mb-4 flex items-center justify-center">
          <span>
            Don't have an account?{" "}
            <Link className="text-emerald-600 font-medium" to={`/signup`}>
              Sign up
            </Link>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-sm mb-4">Get the app.</div>
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-2 ">
            <GooglePlay />
            <AppStore />
          </div>
        </div>
      </div>
    </div>
  )
}
