import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function ApplicationForm() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const jobTitle = state?.jobTitle || 'Not specified'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = new FormData()
    payload.append('firstName', formData.firstName)
    payload.append('lastName', formData.lastName)
    payload.append('birthDate', formData.birthDate)
    payload.append('email', formData.email)
    payload.append('phone', formData.phone)
    payload.append('coverLetter', formData.coverLetter || '')
    payload.append('resume', formData.resume)
    payload.append('jobTitle', jobTitle)
    payload.append('jobId', state?.jobId || 'default-job-id')

    try {
      await axios.post('/api/apply', payload)
      navigate('/success')
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Something went wrong. Please try again.'
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f9fafb] p-6 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white p-10 md:p-12 rounded-2xl shadow-lg relative">

          <div className="absolute top-0 left-0 h-2 w-20 bg-[#F6B000] rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2C8F] mb-6">
            Apply for the Role of {jobTitle}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                name="firstName"
                required
                onChange={handleChange}
                className="border border-[#CBD5E1] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
                placeholder="First Name"
                disabled={isSubmitting}
              />
              <input
                name="lastName"
                required
                onChange={handleChange}
                className="border border-[#CBD5E1] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
                placeholder="Last Name"
                disabled={isSubmitting}
              />
            </div>

            <input
              name="birthDate"
              required
              type="date"
              onChange={handleChange}
              className="border border-[#CBD5E1] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
              disabled={isSubmitting}
            />
            <input
              name="email"
              required
              type="email"
              onChange={handleChange}
              className="border border-[#CBD5E1] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
              placeholder="Email"
              disabled={isSubmitting}
            />
            <input
              name="phone"
              required
              type="tel"
              onChange={handleChange}
              className="border border-[#CBD5E1] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
              placeholder="Phone Number"
              disabled={isSubmitting}
            />

            <textarea
              name="coverLetter"
              onChange={handleChange}
              className="border border-[#CBD5E1] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
              placeholder="Cover Letter (Optional)"
              rows={4}
              disabled={isSubmitting}
            />

            <label className="block text-sm font-medium text-[#2A2C8F]">
              Upload Resume (PDF/DOC)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-[#CBD5E1] rounded-lg cursor-pointer bg-gray-50"
              disabled={isSubmitting}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#F6B000] hover:bg-[#f4a900]'
              } text-black py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105`}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
