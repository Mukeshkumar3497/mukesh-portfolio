import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react'

function Header() {

  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300
      ${
        darkMode
          ? 'bg-gray-950/90 border-gray-800'
          : 'bg-white/90 border-gray-100'
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >

            {/* Logo Box */}
            <div
              className="
                w-11 h-11
                rounded-xl
                flex items-center justify-center
                bg-gradient-to-br from-blue-600 to-purple-600
                shadow-lg shadow-blue-500/20
                transition-all duration-300
                group-hover:scale-110
                group-hover:rotate-3
              "
            >
              <span className="text-white text-lg font-bold">
                MK
              </span>
            </div>

            {/* Logo Text */}
            <div className="leading-tight">

              <h1
                className={`text-xl font-bold transition-colors
                ${
                  darkMode
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                Mukesh
              </h1>

              <p
                className={`text-xs transition-colors
                ${
                  darkMode
                    ? 'text-gray-400'
                    : 'text-gray-500'
                }`}
              >
                Developer
              </p>

            </div>

          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav className="hidden lg:block">

            <ul className="flex items-center gap-8">

              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`
                    relative text-sm font-medium
                    transition-all duration-300
                    hover:text-blue-600

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-blue-600
                    after:to-purple-600
                    after:transition-all
                    after:duration-300

                    hover:after:w-full

                    ${
                      darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                    }
                  `}
                >
                  Home
                </Link>
              </li>


              {/* About */}
              <li>
                <Link
                  to="/about"
                  className={`
                    relative text-sm font-medium
                    transition-all duration-300
                    hover:text-blue-600

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-blue-600
                    after:to-purple-600
                    after:transition-all
                    after:duration-300

                    hover:after:w-full

                    ${
                      darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                    }
                  `}
                >
                  About
                </Link>
              </li>


              {/* Services */}
              <li>
                <Link
                  to="/services"
                  className={`
                    relative text-sm font-medium
                    transition-all duration-300
                    hover:text-blue-600

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-blue-600
                    after:to-purple-600
                    after:transition-all
                    after:duration-300

                    hover:after:w-full

                    ${
                      darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                    }
                  `}
                >
                  Services
                </Link>
              </li>


              {/* Projects */}
              <li>
                <Link
                  to="/projects"
                  className={`
                    relative text-sm font-medium
                    transition-all duration-300
                    hover:text-blue-600

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-blue-600
                    after:to-purple-600
                    after:transition-all
                    after:duration-300

                    hover:after:w-full

                    ${
                      darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                    }
                  `}
                >
                  Projects
                </Link>
              </li>


              {/* Skills */}
              <li>
                <Link
                  to="/blog"
                  className={`
                    relative text-sm font-medium
                    transition-all duration-300
                    hover:text-blue-600

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-blue-600
                    after:to-purple-600
                    after:transition-all
                    after:duration-300

                    hover:after:w-full

                    ${
                      darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                    }
                  `}
                >
                  Blog
                </Link>
              </li>


              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className={`
                    relative text-sm font-medium
                    transition-all duration-300
                    hover:text-blue-600

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-blue-600
                    after:to-purple-600
                    after:transition-all
                    after:duration-300

                    hover:after:w-full

                    ${
                      darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                    }
                  `}
                >
                  Contact
                </Link>
              </li>

            </ul>

          </nav>


          {/* ================= RIGHT SIDE ================= */}

          <div className="hidden lg:flex items-center gap-4">

            {/* Dark Mode Button */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                border
                transition-all duration-300
                hover:scale-110
                hover:border-blue-500
                hover:text-blue-500
                cursor-pointer

                ${
                  darkMode
                    ? 'border-gray-700 text-yellow-400 bg-gray-900'
                    : 'border-gray-200 text-gray-700 bg-white'
                }
              `}
            >

              {darkMode ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}

            </button>


            {/* Hire Me Button */}

            <Link
              to="/contact"
              className="
                group
                relative
                overflow-hidden

                px-6
                py-3

                rounded-full

                text-sm
                font-semibold
                text-white

                bg-gradient-to-r
                from-blue-600
                to-purple-600

                shadow-lg
                shadow-blue-500/25

                transition-all
                duration-300

                hover:scale-105
                hover:shadow-xl
                hover:shadow-purple-500/30
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
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                Hire Me Now
              </span>

            </Link>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <div className="flex items-center gap-3 lg:hidden">

            {/* Mobile Dark Mode */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                border
                transition-all
                cursor-pointer

                ${
                  darkMode
                    ? 'border-gray-700 text-yellow-400'
                    : 'border-gray-200 text-gray-700'
                }
              `}
            >

              {darkMode ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}

            </button>


            {/* Hamburger */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`
                w-10 h-10
                rounded-lg
                flex items-center justify-center
                transition-all
                cursor-pointer

                ${
                  darkMode
                    ? 'text-white hover:bg-gray-800'
                    : 'text-gray-800 hover:bg-gray-100'
                }
              `}
            >

              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}

            </button>

          </div>

        </div>


        {/* ================= MOBILE NAVIGATION ================= */}

        {menuOpen && (

          <div
            className={`
              lg:hidden
              mt-5
              pb-5
              border-t
              pt-5

              ${
                darkMode
                  ? 'border-gray-800'
                  : 'border-gray-100'
              }
            `}
          >

            <nav>

              <ul className="flex flex-col gap-5">

                <li>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      font-medium
                      hover:text-blue-600

                      ${
                        darkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    Home
                  </Link>
                </li>


                <li>
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      font-medium
                      hover:text-blue-600

                      ${
                        darkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    About
                  </Link>
                </li>


                <li>
                  <Link
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      font-medium
                      hover:text-blue-600

                      ${
                        darkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    Services
                  </Link>
                </li>


                <li>
                  <Link
                    to="/projects"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      font-medium
                      hover:text-blue-600

                      ${
                        darkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    Projects
                  </Link>
                </li>


                <li>
                  <Link
                    to="/experience"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      font-medium
                      hover:text-blue-600

                      ${
                        darkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    Experience
                  </Link>
                </li>


                <li>
                  <Link
                    to="/skills"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      font-medium
                      hover:text-blue-600

                      ${
                        darkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    Skills
                  </Link>
                </li>


                <li>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      font-medium
                      hover:text-blue-600

                      ${
                        darkMode
                          ? 'text-gray-300'
                          : 'text-gray-700'
                      }
                    `}
                  >
                    Contact
                  </Link>
                </li>


                {/* Mobile Hire Button */}

                <li className="pt-2">

                  <Link
                                  to="/contact"
                                  className="
                                    group
                                    relative
                                    overflow-hidden
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-7
                                    py-3.5
                                    rounded-full
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-purple-600
                                    text-white
                                    font-semibold
                                    shadow-lg
                                    shadow-blue-500/20
                                    hover:scale-105
                                    hover:shadow-xl
                                    hover:shadow-purple-500/30
                                    transition-all
                                    duration-300
                                  "
                                >
                  
                                  <span
                                    className="
                                      absolute
                                      inset-0
                                      bg-gradient-to-r
                                      from-purple-600
                                      via-pink-500
                                      to-blue-600
                                      bg-[length:200%_auto]
                                      opacity-0
                                      group-hover:opacity-100
                                      group-hover:animate-[gradientMove_2s_linear_infinite]
                                      transition-opacity
                                      duration-300
                                    "
                                  />
                  
                                  <span className="relative z-10">
                                    Hire Me
                                  </span>
                  
                                  <span
                                    className="
                                      relative
                                      z-10
                                      text-lg
                                      group-hover:translate-x-1
                                      transition-transform
                                    "
                                  >
                                    →
                                  </span>
                  
                                </Link>

                </li>

              </ul>

            </nav>

          </div>

        )}

      </div>

    </header>
  )
}

export default Header