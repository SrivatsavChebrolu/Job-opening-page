import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminJobForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: ''
  })
  const [jobs, setJobs] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState(null)

  // Fetch existing jobs on mount
  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/jobs')
      setJobs(res.data)
    } catch (err) {
      console.error('Error fetching jobs:', err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form Submit Triggered. Editing ID:", editingId)
    console.log("Form Data:", formData)

    try {
      if (editingId) {
        const res = await axios.put(`/api/jobs/${editingId}`, formData)
        console.log("Update response:", res.data)
        setMessage({ type: 'success', text: 'Job updated successfully!' })
      } else {
        const res = await axios.post('/api/jobs', formData)
        console.log("Create response:", res.data)
        setMessage({ type: 'success', text: 'Job posted successfully!' })
      }

      setFormData({ title: '', description: '', requirements: '' })
      setEditingId(null)
      fetchJobs()
    } catch (err) {
      console.error('Error submitting form:', err)
      setMessage({ type: 'error', text: 'Something went wrong.' })
    }
  }

  const handleEdit = (job) => {
    console.log("Editing job:", job)
    setFormData({
      title: job.title,
      description: job.description,
      requirements: job.requirements
    })
    setEditingId(job._id)
    setMessage(null)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return

    try {
      await axios.delete(`/api/jobs/${id}`)
      setMessage({ type: 'success', text: 'Job deleted successfully.' })
      fetchJobs()
    } catch (err) {
      console.error('Error deleting job:', err)
      setMessage({ type: 'error', text: 'Failed to delete job.' })
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        {editingId ? 'Edit Job Posting' : 'Post a New Job'}
      </h2>

      {message && (
        <div
          className={`mb-4 text-sm ${
            message.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
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
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? 'Update Job' : 'Post Job'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null)
              setFormData({ title: '', description: '', requirements: '' })
              setMessage(null)
            }}
            className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <h3 className="text-xl font-semibold mb-4">Existing Jobs</h3>
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs posted yet.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job._id} className="border p-4 rounded shadow-sm">
              <h4 className="text-lg font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{job.description}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(job)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
