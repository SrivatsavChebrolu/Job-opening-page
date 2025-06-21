// src/pages/AdminJobForm.jsx

import { useState } from 'react'
import axios from 'axios'

export default function AdminJobForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: ''
  })

  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/jobs', formData)
      setMessage({ type: 'success', text: 'Job posted successfully!' })
      setFormData({ title: '', description: '', requirements: '' })
    } catch (error) {
      console.error('Error posting job:', error)
      setMessage({ type: 'error', text: 'Failed to post job.' })
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
      {message && (
        <div className={`mb-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="requirements"
          placeholder="Job Requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows={3}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Post Job
        </button>
      </form>
    </div>
  )
}
