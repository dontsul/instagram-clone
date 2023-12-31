import { SignUpFormContent } from "../../components/signUpFormContent/SignUpFormContent"
import { Footer } from "../../components/footer/Footer"
import { Toaster } from "react-hot-toast"

export const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-1 py-10 px-6">
        <SignUpFormContent />
      </div>
      <Footer />
      <Toaster position="bottom-left" />
    </div>
  )
}
