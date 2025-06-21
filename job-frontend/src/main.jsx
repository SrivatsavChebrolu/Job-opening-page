import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Pages
import LandingPage from './pages/LandingPage'
import JobList from './pages/JobList'
import JobDetails from './pages/JobDetails'
import ApplicationForm from './pages/ApplicationForm'
import SuccessPage from './pages/SuccessPage'
import AdminJobForm from './pages/AdminJobForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin/post-job" element={<AdminJobForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



