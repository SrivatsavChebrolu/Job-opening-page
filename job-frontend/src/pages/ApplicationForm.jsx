import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = new FormData();
    payload.append("firstName", formData.firstName);
    payload.append("lastName", formData.lastName);
    payload.append("birthDate", formData.birthDate);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("coverLetter", formData.coverLetter || "");
    payload.append("resume", formData.resume);
    payload.append("jobTitle", jobTitle);
    payload.append("jobId", state?.jobId || "default-job-id");


    try {
      await axios.post('/api/apply', payload)
      navigate('/success');
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Something went wrong. Please try again.';
      alert(errorMessage);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Apply for {jobTitle}</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-3 gap-2">
            <input name="firstName" required onChange={handleChange} className="border p-2 rounded" placeholder="First Name" />
            <input name="lastName" required onChange={handleChange} className="border p-2 rounded" placeholder="Last Name" />
          </div>

          <input name="birthDate" required type="date" onChange={handleChange} className="border p-2 rounded" />
          <input name="email" required type="email" onChange={handleChange} className="border p-2 rounded" placeholder="Email" />
          <input name="phone" required type="tel" onChange={handleChange} className="border p-2 rounded" placeholder="Phone Number" />

          <textarea name="coverLetter" onChange={handleChange} className="border p-2 rounded" placeholder="Cover Letter (Optional)" rows={4} />

          <label className="block mb-2 text-sm font-medium text-gray-700">Upload Resume (PDF/DOC)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            />

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}
