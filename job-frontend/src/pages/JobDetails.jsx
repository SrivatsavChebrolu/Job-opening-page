// src/pages/JobDetails.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function JobDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)

  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error('Failed to load job details:', err))
  }, [id])

  if (!job) {
    return <div className="p-6">Loading job details...</div>
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{job.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{job.location}</p>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 mb-6 whitespace-pre-line">{job.description}</p>

        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <p className="text-gray-700 mb-6 whitespace-pre-line">{job.requirements}</p>

        <button
          onClick={() => navigate('/apply', { state: { jobTitle: job.title, jobId: job._id, } })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
        >
          Apply Now
        </button>
      </div>
    </div>
  )
}
