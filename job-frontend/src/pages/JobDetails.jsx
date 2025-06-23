// src/pages/JobDetails.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import bgImage from '../assets/photo-1504384308090-c894fdcc538e.jpeg';

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
  <div
    className="relative min-h-screen bg-cover bg-center bg-no-repeat p-6"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Light overlay */}
    <div className="absolute inset-0 bg-white bg-opacity-40 z-0"></div>

    {/* Content above overlay */}
    <div className="relative z-10 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold text-[#2A2C8F] mb-2">{job.title}</h1>
      <p className="text-sm text-[#2A2C8F] mb-4">{job.location}</p>

      <h2 className="text-xl text-black font-semibold mb-2">Description</h2>
      <p className="text-gray-700 mb-6 whitespace-pre-line">{job.description}</p>

      <h2 className="text-xl text-black font-semibold mb-2">Requirements</h2>
      <p className="text-gray-700 mb-6 whitespace-pre-line">{job.requirements}</p>

      <button
        onClick={() => navigate('/apply', { state: { jobTitle: job.title, jobId: job._id } })}
        className="bg-[#2A2C8F] hover:bg-[#24267A] text-white px-6 py-2 rounded font-medium"
      >
        Apply Now
      </button>
    </div>
  </div>
)

}
