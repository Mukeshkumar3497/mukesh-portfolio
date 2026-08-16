import React from 'react'
import { Link } from 'react-router-dom'

import TechButtons from '../Component/TechButtons'

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaReact,
  FaLaravel,
  FaJs
} from 'react-icons/fa'

import { SiTailwindcss } from 'react-icons/si'

import {
  ArrowRight,
  Download
} from 'lucide-react'


function Hero() {

  return (

    <section className="relative min-h-screen overflow-hidden bg-white pt-28">


      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-50
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-purple-100
          blur-3xl
          opacity-50
        "
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          min-h-[calc(100vh-112px)]
          flex
          items-center
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
            w-full
          "
        >


          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div className="relative z-10">


            {/* AVAILABLE */}

            <div className="flex items-center gap-3 mb-6">

              <span className="relative flex h-3 w-3">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-green-400
                    opacity-75
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    h-3
                    w-3
                    bg-green-500
                  "
                />

              </span>


              <span className="text-sm font-semibold text-gray-600">

                Available for freelance work

              </span>

            </div>


            {/* =================================
                HEADING
            ================================== */}

            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-gray-900
              "
            >

              Hey there! I'm

              <span
                className="
                  block
                  mt-3
                  bg-gradient-to-r
                  from-blue-600
                  via-purple-600
                  to-blue-600
                  bg-clip-text
                  text-transparent
                "
              >

                Mukesh Kumar

              </span>

            </h1>


            {/* =================================
                TITLE
            ================================== */}

            <h2
              className="
                mt-6
                text-2xl
                md:text-3xl
                font-semibold
                text-gray-700
              "
            >

              I'm a

              <span className="text-blue-600 ml-2">

                Full Stack Developer

              </span>

            </h2>


            {/* =================================
                DESCRIPTION
            ================================== */}

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-gray-500
              "
            >

              Creating modern, Sass Tools, and accessible and high-performance
              web experiences that bring your ideas to life.
              Specialized in React, Laravel and modern web technologies.

            </p>


            {/* =================================
                TECHNOLOGY BUTTON COMPONENT
            ================================== */}

            <TechButtons />


            {/* =================================
                MAIN BUTTONS
            ================================== */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-4
                mt-8
              "
            >


              {/* VIEW MY WORK */}

              <Link
                to="/projects"
                className="
                  group
                  relative
                  overflow-hidden
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  shadow-lg
                  shadow-blue-500/25
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
                    via-blue-600
                    to-cyan-500
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                <span className="relative z-10">

                  View My Work

                </span>


                <ArrowRight
                  size={18}
                  className="
                    relative
                    z-10
                    group-hover:translate-x-1.5
                    transition-transform
                    duration-300
                  "
                />

              </Link>


              {/* LET'S TALK */}

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  border-2
                  border-gray-200
                  bg-white
                  text-gray-700
                  font-semibold
                  shadow-sm
                  hover:border-blue-500
                  hover:text-blue-600
                  hover:bg-blue-50
                  hover:scale-105
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                Let's Talk

                <ArrowRight
                  size={18}
                  className="
                    group-hover:translate-x-1.5
                    transition-transform
                    duration-300
                  "
                />

              </Link>


              {/* DOWNLOAD CV */}

              <a
                href="/Mukesh-Kumar-CV.pdf"
                download
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-full
                  text-gray-600
                  font-semibold
                  hover:text-blue-600
                  hover:bg-blue-50
                  transition-all
                  duration-300
                "
              >

                <Download
                  size={18}
                  className="
                    group-hover:-translate-y-0.5
                    transition-transform
                  "
                />

                Download CV

              </a>

            </div>


            {/* =================================
                SOCIAL ICONS
            ================================== */}

            <div className="flex items-center gap-4 mt-9">

              <span className="text-sm text-gray-500">

                Follow me:

              </span>


              {/* GITHUB */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-600
                  hover:bg-gray-900
                  hover:text-white
                  hover:border-gray-900
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <FaGithub size={17} />

              </a>


              {/* LINKEDIN */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-600
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <FaLinkedinIn size={17} />

              </a>


              {/* TWITTER */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-600
                  hover:bg-sky-500
                  hover:text-white
                  hover:border-sky-500
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <FaTwitter size={17} />

              </a>

            </div>

          </div>


          {/* =====================================
              RIGHT IMAGE SECTION
          ====================================== */}

          <div className="relative flex justify-center lg:justify-end">


            {/* =================================
                MAIN CIRCLE
            ================================== */}

            <div
              className="
                relative
                w-[300px]
                h-[300px]
                md:w-[410px]
                md:h-[410px]
              "
            >


              {/* BLUE BORDER */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-purple-500
                  to-cyan-500
                  shadow-2xl
                  shadow-blue-500/30
                "
              />


              {/* IMAGE */}

              <div
                className="
                  absolute
                  inset-[7px]
                  rounded-full
                  overflow-hidden
                  bg-white
                  border-4
                  border-white
                "
              >

                <img
                  src="/images/profile.png"
                  alt="Mukesh Kumar"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>


              {/* =================================
                  ICON ORBIT
              ================================== */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  animate-icon-orbit
                "
              >


                {/* REACT */}

                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    border
                    border-sky-100
                    shadow-xl
                    flex
                    items-center
                    justify-center
                    text-sky-500
                  "
                >

                  <FaReact size={28} />

                </div>


                {/* LARAVEL */}

                <div
                  className="
                    absolute
                    top-1/2
                    right-0
                    translate-x-1/2
                    -translate-y-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    border
                    border-red-100
                    shadow-xl
                    flex
                    items-center
                    justify-center
                    text-red-500
                  "
                >

                  <FaLaravel size={27} />

                </div>


                {/* JAVASCRIPT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    translate-y-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    border
                    border-yellow-100
                    shadow-xl
                    flex
                    items-center
                    justify-center
                    text-yellow-500
                  "
                >

                  <FaJs size={27} />

                </div>


                {/* TAILWIND */}

                <div
                  className="
                    absolute
                    top-1/2
                    left-0
                    -translate-x-1/2
                    -translate-y-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    border
                    border-cyan-100
                    shadow-xl
                    flex
                    items-center
                    justify-center
                    text-cyan-500
                  "
                >

                  <SiTailwindcss size={28} />

                </div>

              </div>

            </div>


            {/* =================================
                CODE CARD
            ================================== */}

            <div
              className="
                absolute
                hidden
                md:block
                bottom-0
                left-0
                lg:left-[-35px]
                w-[235px]
                rounded-xl
                bg-gray-950
                shadow-2xl
                p-5
                z-30
              "
            >

              <div className="flex items-center gap-2 mb-4">

                <span className="w-3 h-3 rounded-full bg-red-500" />

                <span className="w-3 h-3 rounded-full bg-yellow-500" />

                <span className="w-3 h-3 rounded-full bg-green-500" />

              </div>


              <div className="font-mono text-xs leading-6">

                <p className="text-purple-400">

                  const

                  <span className="text-white">

                    {' '}developer

                  </span>

                  {' = {'}

                </p>


                <p className="text-gray-400 pl-3">

                  name:

                  <span className="text-yellow-300">

                    {' '}Mukesh

                  </span>

                </p>


                <p className="text-gray-400 pl-3">

                  skills:

                  <span className="text-green-400">

                    {' '}React + Laravel

                  </span>

                </p>


                <p className="text-gray-400 pl-3">

                  passion:

                  <span className="text-blue-400">

                    {' '}Web Development

                  </span>

                </p>


                <p className="text-white">

                  {'}'}

                </p>

              </div>

            </div>


            {/* =================================
                PROJECT CARD
            ================================== */}

            <div
              className="
                absolute
                hidden
                md:flex
                top-0
                right-0
                lg:right-[-20px]
                bg-white
                rounded-xl
                shadow-xl
                px-5
                py-4
                z-30
                items-center
                gap-3
              "
            >

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  text-blue-600
                  font-bold
                "
              >

                5+

              </div>


              <div>

                <p className="text-lg font-bold text-gray-900">

                  Projects

                </p>

                <p className="text-xs text-gray-500">

                  Completed

                </p>

              </div>

            </div>


            {/* =================================
                EXPERIENCE CARD
            ================================== */}

            <div
              className="
                absolute
                hidden
                md:flex
                bottom-20
                right-0
                lg:right-[-25px]
                bg-white
                rounded-xl
                shadow-xl
                px-5
                py-4
                z-30
                items-center
                gap-3
              "
            >

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-purple-50
                  flex
                  items-center
                  justify-center
                  text-purple-600
                  font-bold
                "
              >

                1

              </div>


              <div>

                <p className="text-lg font-bold text-gray-900">

                  Years

                </p>

                <p className="text-xs text-gray-500">

                  Experience

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          ICON ORBIT ANIMATION
      ========================================== */}

      <style>{`

        @keyframes iconOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        .animate-icon-orbit {

          animation: iconOrbit 10s linear infinite;

          transform-origin: center center;

        }

      `}</style>

    </section>
  )
}


export default Hero