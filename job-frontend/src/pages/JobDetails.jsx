import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] p-10">
          <div className="text-center text-[#283593] font-semibold text-lg">
            Loading job details...
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f9fafb] px-6 py-20 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white p-10 md:p-14 rounded-2xl shadow-lg relative">

          {/* Accent bar */}
          <div className="absolute top-0 left-0 h-2 w-20 bg-[#F6B000] rounded-full"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#283593] mb-2">
            {job.title}
          </h1>
          <p className="text-sm md:text-base text-[#607D8B] mb-6">
            {job.location}
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[#2A2C8F] mb-2">
            Description
          </h2>
          <p className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed">
            {job.description}
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[#2A2C8F] mb-2">
            Requirements
          </h2>
          <p className="text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
            {job.requirements}
          </p>

          <button
            onClick={() => navigate('/apply', { state: { jobTitle: job.title, jobId: job._id } })}
            className="bg-[#F6B000] hover:bg-[#f4a900] text-black px-8 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105"
          >
            Apply Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
