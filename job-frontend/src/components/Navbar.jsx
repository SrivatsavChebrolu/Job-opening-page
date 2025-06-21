// // src/components/Navbar.jsx
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-blue-600">MyCompany</h1>
//     </nav>
//   )
// }

// src/components/Navbar.jsx
import logo from '../assets/barabari_logo.png' // adjust path if needed
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#1434CB] px-6 py-4 shadow">
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        <span className="text-xl font-semibold text-white">The Barabari Collective</span>
      </Link>
    </nav>
  )
}
