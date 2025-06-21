// src/components/JobCard.jsx
import { Link } from 'react-router-dom'

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{job.location}</p>
        <p className="text-gray-600 mt-4">{job.description?.slice(0, 100)}...</p>
      </div>
      <Link to={`/jobs/${job._id}`} className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium">
        View Details
      </Link>
    </div>
  )
}
