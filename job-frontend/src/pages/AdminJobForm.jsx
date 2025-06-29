import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminJobForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: ''
  });
  const [jobs, setJobs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('/api/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/jobs/${editingId}`, formData);
        setMessage({ type: 'success', text: 'Job updated successfully!' });
      } else {
        await axios.post('/api/jobs', formData);
        setMessage({ type: 'success', text: 'Job posted successfully!' });
      }
      setFormData({ title: '', description: '', requirements: '' });
      setEditingId(null);
      fetchJobs();
    } catch (err) {
      console.error('Error submitting form:', err);
      setMessage({ type: 'error', text: 'Something went wrong.' });
    }
  };

  const handleEdit = (job) => {
    setFormData({
      title: job.title,
      description: job.description,
      requirements: job.requirements
    });
    setEditingId(job._id);
    setMessage(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      await axios.delete(`/api/jobs/${id}`);
      setMessage({ type: 'success', text: 'Job deleted successfully.' });
      fetchJobs();
    } catch (err) {
      console.error('Error deleting job:', err);
      setMessage({ type: 'error', text: 'Failed to delete job.' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold text-[#2A2C8F] mb-6">
          {editingId ? 'Edit Job Posting' : 'Post a New Job'}
        </h2>

        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Job Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
              placeholder="Enter job title"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
              placeholder="Enter job description"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A2C8F]"
              placeholder="Enter job requirements"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="bg-[#2A2C8F] text-white px-6 py-2 rounded hover:bg-[#1f2175] transition"
            >
              {editingId ? 'Update Job' : 'Post Job'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormData({ title: '', description: '', requirements: '' });
                  setMessage(null);
                }}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4 text-[#2A2C8F]">Existing Jobs</h3>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No jobs posted yet.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li
                key={job._id}
                className="bg-white p-4 rounded shadow flex justify-between items-start"
              >
                <div>
                  <h4 className="text-lg font-semibold text-[#2A2C8F]">
                    {job.title}
                  </h4>
                  <p className="text-sm text-gray-700">{job.description}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(job)}
                    className="text-[#2A2C8F] font-medium hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="text-red-600 font-medium hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
