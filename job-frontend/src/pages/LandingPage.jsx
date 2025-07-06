// src/pages/LandingPage.jsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import bgImage from '../assets/IMG_9623.jpg';
import convo from '../assets/IMG_9605.jpg';
import idea from '../assets/IMG_20250623_123837.jpg';
import final from '../assets/IMG_20250623_130040.jpg';
import RotatingMetrics from '../components/RotatingMetrics'


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
          <div className="absolute inset-0 bg-white bg-opacity-80"></div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A2C8F] tracking-tight leading-tight mb-8">
            Help Us In Making A Difference Towards
            <br className="hidden md:block" />
            <span className="block text-5xl md:text-7xl text-[#F6B000] font-serif font-extrabold">
              Democratizing Digital Ownership
            </span>
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

        {/* Intro Section - 2x2 Grid Collage with Staggered Heading */}
        <section className="bg-white py-20 px-6 font-sans">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
            
            {/* Left Side - Text */}
            <div className="md:w-7/12 flex flex-col justify-center relative z-10 space-y-6">
              {/* Staggered Heading */}
              <h2 className="text-4xl font-bold text-[#2A2C8F] text-left">What Is</h2>
              <h2 className="text-3xl md:text-7xl font-serif font-extrabold text-[#F6B000] text-center leading-tight">
                The Barabari Collective
              </h2>
              <h2 className="text-4xl font-bold text-[#2A2C8F] text-right">All About?</h2>

              {/* Description */}
              <p className="text-black text-lg leading-relaxed">
                At The Barabari Collective, we believe community-led action isn’t just effective — it’s essential. 
                In a world where many are still left out of digital and educational progress, we act as the bridge.
                From grassroots mentorship to hands-on upskilling, we empower individuals with the tools and confidence 
                to step forward and lead their own transformation.
              </p>

              <p className="text-black text-lg leading-relaxed">
                Our collective doesn’t function like a typical organization. We aren’t bound by rigid structures or closed hierarchies. 
                Instead, we are driven by empathy, agility, and shared ownership. Every initiative we build is designed to last 
                — and to truly serve the people it's meant for.
              </p>

              <p className="text-black text-lg leading-relaxed">
                Whether you’re an educator, a technologist, or someone simply passionate about equity, 
                there’s space for you here. At Barabari, your work finds purpose, and your purpose finds a team.
              </p>
            </div>

            {/* Right Side - Improved 2x2 Grid Collage */}
            <div className="md:w-7/12 grid grid-cols-2 grid-rows-2 gap-6 mt-16">
              <img
                src={convo}
                alt="Top Left"
                className="w-full h-[300px] object-cover rounded-lg transition transform hover:scale-105 shadow-lg"
              />
              <img
                src={idea}
                alt="Top Right"
                className="w-full h-[300px] object-cover rounded-lg transition transform hover:scale-105 shadow-lg"
              />
              <img
                src={final}
                alt="Bottom Left"
                className="w-full h-[300px] object-cover rounded-lg transition transform hover:scale-105 shadow-lg"
              />
              <img
                src={final}
                alt="Bottom Right"
                className="w-full h-[300px] object-cover rounded-lg transition transform hover:scale-105 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Alignment Questions Section */}
        <section className="relative bg-[#2A2C8F] py-20 px-6 overflow-hidden">
          {/* Decorative actual white circles - more randomized */}
          <div className="absolute top-[-50px] left-[-70px] w-[120px] h-[120px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-[30%] left-[-100px] w-[180px] h-[180px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-[15%] right-[-80px] w-[100px] h-[100px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-[55%] right-[10%] w-[220px] h-[220px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-[-90px] left-[20%] w-[250px] h-[250px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-[50px] right-[25%] w-[140px] h-[140px] bg-white opacity-10 rounded-full"></div>

          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Do Our <span className="text-5xl md:text-7xl text-[#F6B000] font-serif font-extrabold">Values</span> Resonate With You?
            </h2>
            <ul className="text-lg md:text-xl text-white/90 space-y-5">
              <li className="transition transform hover:scale-105">✓ Do you believe every individual deserves equitable access to opportunity?</li>
              <li className="transition transform hover:scale-105">✓ Are you passionate about creating a meaningful, lasting impact through your work?</li>
              <li className="transition transform hover:scale-105">✓ Can you envision yourself thriving within a purpose-driven, people-first organization?</li>
            </ul>
          </div>
        </section>

        {/* Selling the Idea Section - Single Line Heading with Highlight */}
        <section className="bg-white py-20 px-6 font-sans">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10">
            
            {/* Left Side - Single Image */}
            <div className="md:w-5/12 w-full flex justify-center">
              <div className="w-full max-w-sm md:max-w-full rounded-lg overflow-hidden transition transform hover:scale-105 shadow-lg">
                <img
                  src={convo}
                  alt="Selling the Idea"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="md:w-7/12 w-full flex flex-col justify-center space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-4xl font-bold text-[#2A2C8F] leading-tight mb-2">
                More Than a Company —<br />
                <span className="block text-4xl md:text-6xl text-[#F6B000] font-serif font-extrabold">
                  Advancing Change Together
                </span>
              </h2>

              <p className="text-black text-lg leading-relaxed">
                The Barabari Collective champions action, empathy, and inclusive growth. Whether it’s grassroots education,
                accessible mentorship, or shaping equitable digital ecosystems, our work drives systemic change. 
                Your contributions here are more than a role — they help shape a better, more balanced future for everyone.
              </p>

              <p className="text-black text-lg leading-relaxed">
                Let your passion find purpose in work that truly matters — where your impact reaches far beyond the ordinary.
              </p>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-[#F5F5F5] to-[#E8EBF9] text-center font-sans overflow-hidden">
          {/* Decorative actual white circles */}
          <div className="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-[100px] right-[-80px] w-[200px] h-[200px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-[-80px] left-[60px] w-[250px] h-[250px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-[120px] right-[100px] w-[100px] h-[100px] bg-white opacity-10 rounded-full"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#283593] mb-8">
              Hear from our team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F6B000] p-6 rounded-lg shadow">
                <p className="text-black">
                  “Working at Barabari has helped me combine my passion for education with real impact. I’ve never felt more fulfilled.”
                </p>
                <p className="mt-4 font-semibold text-black">— Priya, Program Coordinator</p>
              </div>
              <div className="bg-[#F6B000] p-6 rounded-lg shadow">
                <p className="text-black">
                  “From day one, I felt part of a team that’s building something meaningful. Every day here teaches me something new.”
                </p>
                <p className="mt-4 font-semibold text-black">— Aarav, Outreach Lead</p>
              </div>
            </div>
          </div>
        </section>

        <RotatingMetrics/>

        {/* Final CTA Section */}
        <section className="relative bg-[#2A2C8F] py-20 px-6 overflow-hidden">
          {/* Decorative actual white circles spread across */}
          <div className="absolute top-[-50px] left-[-50px] w-[120px] h-[120px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-[80px] right-[-60px] w-[200px] h-[200px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-[-60px] left-[30px] w-[250px] h-[250px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-[100px] right-[80px] w-[100px] h-[100px] bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-[50%] left-[50%] w-[180px] h-[180px] bg-white opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready To Add To These Numbers?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Bring your skills, ideas, and passion to the table — join us in driving real change and make a difference that counts.
            </p><br></br>
            <Link to="/jobs">
              <button className="inline-flex items-center gap-2 bg-[#F6B000] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#DE9F00] transition shadow-lg hover:shadow-xl">
                Make Your Contribution
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}