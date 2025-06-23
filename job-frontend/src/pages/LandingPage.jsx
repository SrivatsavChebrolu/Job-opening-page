// src/pages/LandingPage.jsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import bgImage from '../assets/photo-1504384308090-c894fdcc538e.jpeg';


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] text-gray-800">
      <Navbar />

      <main className="flex-1">
        {/* First call-to-action button with background image */}
        <section
          className="relative bg-cover bg-center bg-no-repeat py-32 px-6 text-center font-sans min-h-screen"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-80"></div> Optional overlay for contrast

          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2A2C8F] tracking-tight leading-tight mb-8">
              Help Us In Making A Difference Towards
              <br className="hidden md:block" />
              <span className="text-[#F6B000]">Democratizing Digital Ownership</span>
            </h1>

            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto mb-10">
              Join us in building impactful solutions that empower communities and bridge the digital divide.
            </p>

            <Link to="/jobs">
              <button className="bg-[#F6B000] hover:bg-[#DE9F00] text-black text-lg md:text-xl px-8 py-4 rounded-full shadow-lg transition duration-300">
                View Open Positions
              </button>
            </Link>
          </div>
        </section>



        {/* Intro Section - Conversation Starter */}
        <section className="bg-white py-20 px-6 font-sans">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Text */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2A2C8F] leading-snug mb-6">
                What Is <span className="text-[#F6B000]">The Barabari Collective</span> All About?
              </h2>
              <p className="text-black text-lg leading-relaxed">
                At The Barabari Collective, we believe in community-led change. We are on a mission to bring opportunities, access, and digital empowerment to those who’ve historically been left behind. Our initiatives span education, technology, mentorship, and real-world upskilling.
                <br /><br />
                Want to learn more about what we’re doing and how far we’ve come? Here’s your chance to look into the impact we’ve made.
              </p>
            </div>

            {/* Right Side - Placeholder for Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-64 md:h-80 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">[ Add Image Here ]</span>
              </div>
            </div>
          </div>
        </section>



        {/* Alignment Questions Section */}
          <section className="py-20 px-6 bg-#F5F5F5 text-center font-sans">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-[#283593] mb-8">
                Do Our <span className="text-[#F6B000]">Values</span> Resonate With You?
              </h2>
              <ul className="text-black text-lg space-y-5">
                <li>✓ Do you believe every individual deserves equitable access to opportunity?</li>
                <li>✓ Are you passionate about creating a meaningful, lasting impact through your work?</li>
                <li>✓ Can you envision yourself thriving within a purpose-driven, people-first organization?</li>
              </ul>
            </div>
          </section>

        {/* Selling the Idea Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            
            {/* Left Side - Placeholder for Image */}
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="w-full h-64 md:h-80 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">[ Add Image Here ]</span>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="md:w-1/2 md:pl-10 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2A2C8F] leading-snug mb-6">
                We’re Not Just Building a Company — <span className="text-[#F6B000]">We're Advancing a cause</span>
              </h2>
              <p className="text-black text-lg leading-relaxed">
                The Barabari Collective champions action, empathy, and inclusive growth. Whether it's grassroots education, accessible mentorship, or shaping equitable digital ecosystems, our work drives systemic change. Here, your contributions become part of something bigger than a job — they help shape a better, more balanced future. 
                <br /><br />
                Let your passion find purpose in the work you do.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 px-6 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A2C8F] mb-6">
              With Every Job, We Offer <span className="text-[#F6B000]">Purpose</span>
            </h2>
            <p className="text-black text-lg leading-relaxed mb-10">
              You'll not only develop your skills and grow professionally, but also contribute meaningfully to causes that matter—education, equity, and empowerment.
            </p>
            
            {/* Image Placeholder */}
            <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center rounded-lg">
              <span className="text-gray-400">[ Add Image Here ]</span>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-#F5F5F5 text-center">
          <h2 className="text-3xl font-bold text-[#283593] mb-8">Hear from our team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F6B000] p-6 rounded-lg shadow">
              <p className="black">“Working at Barabari has helped me combine my passion for education with real impact. I’ve never felt more fulfilled.”</p>
              <p className="mt-4 font-semibold text-black">— Priya, Program Coordinator</p>
            </div>
            <div className="bg-[#F6B000] p-6 rounded-lg shadow">
              <p className="black">“From day one, I felt part of a team that’s building something meaningful. Every day here teaches me something new.”</p>
              <p className="mt-4 font-semibold text-black">— Aarav, Outreach Lead</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-xl mx-auto bg-[#2A2C8F] text-white rounded-xl shadow-lg px-10 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Be Part of Something Meaningful</h2>
            <p className="mb-6 text-white text-lg">
              Join us in shaping a future where every individual, no matter their background, has the opportunity to thrive.
            </p>
            <Link to="/jobs">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
                Explore Open Positions
              </button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}