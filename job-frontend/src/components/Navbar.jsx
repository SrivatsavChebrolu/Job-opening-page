import logo from '../assets/barabari_logo.png'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { Mail, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Left side: Logo + Name + Links in one flex group */}
      <div className="flex items-center space-x-6 flex-wrap">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Barabari Logo" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-black">
              The Barabari Collective.
            </span>
            <span className="text-xs md:text-sm text-gray-600">
              Taleem. Tajurba. Taqat.
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links — left aligned immediately after logo */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://barabariprojectdonations.my.canva.site/overview-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg text-black font-semibold"
          >
            Home
          </a>
          <a
            href="https://www.services.barabaricollective.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg text-black font-semibold"
          >
            Services
          </a>
          <a
            href="https://barabariprojectdonations.my.canva.site/impact-mentor-s-hub-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg text-black font-semibold"
          >
            Mentor
          </a>
        </div>
      </div>

      {/* Right side: Contact + Hamburger */}
      <div className="flex items-center space-x-4">
        {/* Contact Icon */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full transition"
          >
            <Mail className="w-6 h-6 text-black" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
              <h4 className="text-md font-semibold mb-2">Contact Us</h4>
              <p className="text-sm text-gray-700 mb-1">
                thebarabariproject@gmail.com
              </p>
              <p className="text-sm text-gray-700">+91-8639322365</p>
            </div>
          )}
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4 md:hidden">
          <a
            href="https://barabariprojectdonations.my.canva.site/overview-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-black font-semibold"
          >
            Home
          </a>
          <a
            href="https://www.services.barabaricollective.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-black font-semibold"
          >
            Services
          </a>
          <a
            href="https://barabariprojectdonations.my.canva.site/impact-mentor-s-hub-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-black font-semibold"
          >
            Mentor
          </a>
        </div>
      )}
    </nav>
  )
}
