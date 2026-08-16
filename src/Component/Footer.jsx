import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= BRAND ================= */}
          <div>

            <Link
              to="/"
              className="flex items-center gap-3 mb-6 group"
            >

              {/* Logo */}
              <div
                className="
                  w-11 h-11
                  rounded-xl
                  flex items-center justify-center
                  bg-gradient-to-br
                  from-blue-600
                  to-purple-600
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                <span className="text-white font-bold text-lg">
                  MK
                </span>
              </div>

              {/* Logo Text */}
              <div>
                <h2 className="text-xl font-bold">
                  Mukesh
                </h2>

                <p className="text-xs text-gray-400">
                  Developer
                </p>
              </div>

            </Link>


            {/* Description */}
            <p className="text-gray-400 leading-7 max-w-sm">
              I'm a passionate web developer focused on creating
              modern, responsive and user-friendly websites and
              web applications.
            </p>


            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex items-center gap-3 mt-6">

              {/* GitHub */}
              <a
                href="https://github.com/Mukeshkumar3497"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-10 h-10
                  rounded-full
                  border border-gray-800
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-blue-500
                  hover:bg-blue-600
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <FaGithub size={18} />
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mukesh-kumar-196899286/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-10 h-10
                  rounded-full
                  border border-gray-800
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-blue-500
                  hover:bg-blue-600
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <FaLinkedinIn size={18} />
              </a>


              {/* Twitter */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="
                  w-10 h-10
                  rounded-full
                  border border-gray-800
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-blue-500
                  hover:bg-blue-600
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <FaTwitter size={18} />
              </a>


              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-10 h-10
                  rounded-full
                  border border-gray-800
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-purple-500
                  hover:bg-purple-600
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <FaInstagram size={18} />
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= SERVICES ================= */}
          <div>

            <h3 className="text-lg font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/services"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  React Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  Laravel Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  WordPress Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="
                    text-gray-400
                    hover:text-blue-500
                    transition-colors duration-300
                  "
                >
                  SEO Optimization
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= WORK TOGETHER ================= */}
          <div>

            <h3 className="text-lg font-semibold mb-6">
              Let's Work Together
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Have a project in mind? Let's create something
              amazing together.
            </p>


            {/* Hire Button */}
            <Link
              to="/contact"
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-full
                font-semibold
                text-white
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                shadow-lg
                shadow-blue-500/20
                hover:scale-105
                hover:shadow-xl
                hover:shadow-purple-500/30
                transition-all duration-300
              "
            >

              {/* Hover Gradient */}
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-600
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              />

              <span className="relative z-10">
                Hire Me Now
              </span>

            </Link>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-gray-800">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © 2026 Mukesh Kumar. All rights reserved.
          </p>


          {/* Developer */}
          <p className="text-sm text-gray-500 text-center">

            Designed & Developed by{' '}

            <span
              className="
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
                font-semibold
              "
            >
              Mukesh Kumar
            </span>

          </p>


          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
            aria-label="Back to top"
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              text-white
              hover:scale-110
              hover:shadow-lg
              hover:shadow-blue-500/30
              transition-all duration-300
              cursor-pointer
            "
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  )
}

export default Footer