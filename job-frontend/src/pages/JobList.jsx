import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import bgImage from '../assets/photo-1504384308090-c894fdcc538e.jpeg';

export default function JobsList() {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => {
        console.error("Error fetching jobs", err)
        setError("Failed to fetch job listings.")
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Navbar />
      <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat py-20 px-4"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Light overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>

  {/* Content above overlay */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-[#2A2C8F] text-center mb-10">Current Openings</h2>

    {loading ? (
      <p className="text-center text-gray-100">Loading job openings...</p>
    ) : error ? (
      <p className="text-center text-red-300">{error}</p>
    ) : jobs.length === 0 ? (
      <div className="text-center text-white mt-12">
        <h3 className="text-xl font-semibold mb-2">We're not hiring at the moment</h3>
        <p className="text-white">
          There are currently no open positions at <span className="font-semibold">The Barabari Collective</span>.
          <br />
          Please check back again soon for new opportunities.
        </p>
      </div>
    ) : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Link
            key={job._id}
            to={`/jobs/${job._id}`}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 block"
          >
            <h4 className="text-lg font-semibold text-[#2A2C8F]">{job.title}</h4>
            <p className="text-sm text-gray-700 mt-2">{job.description}</p>
          </Link>
        ))}
      </div>
    )}
  </div>
</section>
    </>
  )
}
