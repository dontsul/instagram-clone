import { SignInFormContent } from "../../components/signInFormContent/SignInFormContent"
import { PhoneSignIn } from "../../components/phoneSignIn/PhoneSignIn"
import { Footer } from "../../components/footer/Footer"
import { Toaster } from "react-hot-toast"

export const SignIn = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-36 justify-center pt-10 px-6">
        <PhoneSignIn />
        <SignInFormContent />
      </div>
      <Footer />
      <Toaster position="bottom-left" />
    </div>
  )
}
