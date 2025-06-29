// src/components/Navbar.jsx
import logo from '../assets/barabari_logo.png'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { Mail } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-10 py-6 shadow-md">
      {/* Left side: Logo + Name + Links */}
      <div className="flex items-center space-x-12">
        {/* Logo + Name block */}
        <Link to="/" className="flex items-center space-x-4">
          <img src={logo} alt="Barabari Logo" className="h-14 w-auto" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-black">The BARABARI Collective.</span>
            <span className="text-sm text-gray-600">Taleem | Tajurba | Taqat</span>
          </div>
        </Link>

        {/* BIG Nav links */}
        <div className="flex space-x-10 ml-8">
          <Link to="https://barabariprojectdonations.my.canva.site/overview-website" className="text-lg text-[#2A2C8F] hover:text-[#24267A] font-semibold transition">
            Home
          </Link>
          <Link to="https://www.services.barabaricollective.org/" className="text-lg text-[#2A2C8F] hover:text-[#24267A] font-semibold transition">
            Services
          </Link>
          <Link to="https://barabariprojectdonations.my.canva.site/impact-mentor-s-hub-website" className="text-lg text-[#2A2C8F] hover:text-[#24267A] font-semibold transition">
            Mentor
          </Link>
        </div>
      </div>

      {/* Right side: Contact icon */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Mail className="w-6 h-6 text-[#2A2C8F]" />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 transform origin-top-right animate-fade-slide z-50"
          >
            <h4 className="text-md font-semibold mb-2">Contact Us</h4>
            <p className="text-sm text-gray-700 mb-1">thebarabariproject@gmail.com</p>
            <p className="text-sm text-gray-700">+91-8639322365</p>
          </div>
        )}
      </div>
    </nav>
  )
}
