// src/pages/LandingPage.jsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 bg-white">
          <h1 className="text-5xl font-bold text-black mb-4">Let us build your career</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            []
          </p>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-100 text-center px-6">
          <h2 className="text-3xl font-bold text-black mb-4">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            []
          </p>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-blue-50 text-center px-6">
          <h2 className="text-3xl font-bold text-black mb-4">Why Join Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            []
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl px-8 py-10 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Join Us?</h2>
            <p className="text-gray-600 mb-6">
              Discover opportunities to grow, collaborate, and make an impact.
            </p>
            <Link to="/jobs">
              <button className="bg-[#1434CB] hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg">
                View Open Positions
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
