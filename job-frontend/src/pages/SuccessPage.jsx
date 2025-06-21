import { Link } from 'react-router-dom'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-10 rounded-xl shadow text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Application Submitted!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for applying. Our team will review your application and get back to you soon.
        </p>
        <Link to="/jobs">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Back to Job Listings
          </button>
        </Link>
      </div>
    </div>
  )
}
