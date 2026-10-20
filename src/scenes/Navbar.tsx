import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const flexBetween = "flex items-center justify-between"

  return (
    <nav className={`${flexBetween} w-full p-4`}>
      <img src={Logo} alt="Logo" />
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
    </nav>
  )
}

export default Navbar