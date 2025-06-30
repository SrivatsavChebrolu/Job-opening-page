import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function JobLists() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2A2C8F] mb-4">
          Find Your Next{" "}
          <span className="text-[#F6B000] font-serif font-extrabold">
            Opportunity
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Be part of something meaningful — discover roles that align your passion with real impact.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job._id}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
              >
                <h3 className="text-2xl font-bold text-[#2A2C8F] mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <Link
                  to={`/jobs/${job._id}`}
                  className="text-[#F6B000] font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No openings at the moment. Check back soon!
            </p>
          )}
        </div>
      </main>
      <Footer/>
    </div>
  );
}