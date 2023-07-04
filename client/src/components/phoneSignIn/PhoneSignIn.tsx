import { motion, AnimatePresence } from "framer-motion"
import one from "../../assets/images/signIn/one.png"
import zuck from "../../assets/images/signIn/zuck.png"

export const PhoneSignIn = () => {
  return (
    <div className="hidden md:flex items-start justify-end ">
      <div className="relative">
        <div className="flex items-start justify-center z-0">
          <img src={one} alt="one" width={280} height={660} />
          <img
            className="absolute top-6 left-20 z-10"
            src={zuck}
            alt="one"
            width={280}
            height={660}
          />
        </div>
      </div>
    </div>
  )
}
