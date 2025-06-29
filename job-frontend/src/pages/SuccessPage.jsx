import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function SuccessPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#e9ecf1] flex items-center justify-center p-6">
        <div className="relative bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full border border-gray-200">

          {/* Subtle Accent Shape */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-[#F6B000] rounded-full"></div>

          <h1 className="text-3xl font-bold text-[#24267A] mb-4">
            Application Submitted!
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Thank you for applying! Our team will carefully review your application
            and reach out to you soon. We appreciate your interest in being a part of The Barabari Collective.
          </p>

          <Link to="/jobs">
            <button className="bg-[#2A2C8F] hover:bg-[#1f236f] transition-colors text-white py-3 px-8 rounded font-medium shadow hover:shadow-md">
              Back to Job Listings
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
