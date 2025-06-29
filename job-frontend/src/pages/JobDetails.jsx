import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

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
    return (
      <>
        <Navbar />
        <div className="p-6">Loading job details...</div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f9fafb] p-6 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white p-10 rounded-xl shadow-md relative">

          {/* Brand Accent Bar */}
          <div className="absolute top-0 left-0 h-2 w-20 bg-[#F6B000] rounded-full"></div>

          <h1 className="text-4xl font-bold text-[#2A2C8F] mb-2">{job.title}</h1>
          <p className="text-sm text-[#2A2C8F] mb-6">{job.location}</p>

          <h2 className="text-2xl text-black font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-6 whitespace-pre-line">{job.description}</p>

          <h2 className="text-2xl text-black font-semibold mb-2">Requirements</h2>
          <p className="text-gray-700 mb-8 whitespace-pre-line">{job.requirements}</p>

          <button
            onClick={() => navigate('/apply', { state: { jobTitle: job.title, jobId: job._id } })}
            className="bg-[#2A2C8F] hover:bg-[#24267A] text-white px-8 py-3 rounded font-medium transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  )
}
