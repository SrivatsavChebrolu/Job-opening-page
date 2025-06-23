import { Link } from 'react-router-dom'
import bgImage from '../assets/photo-1504384308090-c894fdcc538e.jpeg';

export default function SuccessPage() {
  return (
  <div
    className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-6"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Light overlay */}
    <div className="absolute inset-0 bg-white bg-opacity-40 z-0"></div>

    {/* Content above overlay */}
    <div className="relative z-10 bg-white p-10 rounded-xl shadow text-center max-w-md">
      <h1 className="text-3xl font-bold text-[#24267A] mb-4">Application Submitted!</h1>
      <p className="text-gray-700 mb-6">
        Thank you for applying. Our team will review your application and get back to you soon.
      </p>
      <Link to="/jobs">
        <button className="bg-[#24267A] hover:[#24267A] text-white py-2 px-6 rounded">
          Back to Job Listings
        </button>
      </Link>
    </div>
  </div>
)

}
