// src/components/Navbar.jsx
import logo from '../assets/barabari_logo.png' // placeholder, update when image is ready
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow">
      <button onClick={scrollToTop} className="flex items-center space-x-3">
        <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        <span className="text-xl font-semibold text-black">The Barabari Collective</span>
      </button>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          className="px-4 py-2 bg-white text-[#1434CB] rounded-md font-medium hover:bg-gray-100"
        >
          <Globe className="w-5 h-5" />
        </button>

        {isOpen && (
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50"
          >
            <Link to="/partners" className="block px-4 py-2 hover:bg-gray-100">About us</Link>
            <a href="https://external-site.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">Projects</a>
            <Link to="/language" className="block px-4 py-2 hover:bg-gray-100">News</Link>
          </div>
        )}
      </div>
    </nav>
  )
}