import { useState, useEffect } from "react"
import Navbar from "./NavBar.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Header = ({ showNavbar = true }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="left">
          <span className="logo">Logo</span>
          <span className="blog">Blog</span>
          <div className="search">
            <input type="text" placeholder="What do you want to read?" />
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </div>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="right">
          <button className="signIn">Sign In</button>
        </div>
      </header>

      {showNavbar && <Navbar isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default Header