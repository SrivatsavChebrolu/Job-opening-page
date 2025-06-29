// src/components/Footer.jsx
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4 text-center">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/company/the-barabari-collective/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F6B000] transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/barabaricollective/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F6B000] transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://x.com/BarabariProject"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F6B000] transition"
        >
          <FaXTwitter size={24} />
        </a>
      </div>

      {/* Links to PDFs */}
      <div className="mb-4">
        <a
          href="https://drive.google.com/file/d/1Jh0R_1U-H5kXNb_Sd6FVQpeBf8PXU5W4/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F6B000] mx-4 transition"
        >
          Know Us
        </a>
        <a
          href="https://drive.google.com/file/d/1iGVnpKlxPzmzDZhiacwmM7HttBq9cDyd/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#F6B000] mx-4 transition"
        >
          Our Ecosystem
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} The Barabari Collective.
      </p>
    </footer>
  )
}
