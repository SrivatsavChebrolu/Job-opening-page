import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => {
        console.error("Error fetching jobs", err);
        setError("Failed to fetch job listings.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f9fafb] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Banner Bar */}
          <div className="bg-[#F6B000] h-2 w-20 rounded-full mb-6 mx-auto"></div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2C8F] text-center mb-2">
            Current Openings
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover opportunities to be part of something bigger. Join us in shaping real change.
          </p>

          {loading ? (
            <p className="text-center text-gray-500">Loading job openings...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : jobs.length === 0 ? (
            <div className="text-center text-gray-600 mt-12">
              <h3 className="text-xl font-semibold mb-2">
                We're not hiring at the moment
              </h3>
              <p>
                There are currently no open positions at{" "}
                <span className="font-semibold">The Barabari Collective</span>.
                <br />
                Please check back again soon for new opportunities.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="flex flex-col justify-between border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition duration-200"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-[#2A2C8F]">
                      {job.title}
                    </h4>
                    <p className="text-sm text-gray-700 mt-2">
                      {job.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/jobs/${job._id}`}
                      className="inline-block border border-[#F6B000] text-[#F6B000] font-semibold px-5 py-2 rounded-full hover:bg-[#F6B000] hover:text-white transition duration-200"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
