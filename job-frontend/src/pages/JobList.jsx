import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function JobsList() {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get("/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => {
        console.error("Error fetching jobs:", err)
        setError("Failed to load job listings")
      })
  }, [])

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>
  }

  if (!jobs.length) {
    return <div className="text-gray-500 text-center mt-10">Loading jobs...</div>
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="p-6 bg-gray-50 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Current Openings</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {jobs.map((job) => (
          <Link
            key={job._id}
            to={`/jobs/${job._id}`}
            className="block bg-white shadow-md p-6 rounded-lg hover:bg-gray-100 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600">{job.description.slice(0, 250)}...</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
    </div>
  )
}
