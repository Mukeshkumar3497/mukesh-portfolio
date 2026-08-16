import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaJs,
  FaHtml5,
} from 'react-icons/fa'

import { SiTailwindcss } from 'react-icons/si'

function About() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
        bg-gradient-to-br
        from-blue-100
        via-white
        to-purple-100
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-blue-300
          blur-3xl
          opacity-30
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-purple-300
          blur-3xl
          opacity-30
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          rounded-full
          bg-cyan-200
          blur-3xl
          opacity-20
        "
      />


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative max-w-7xl mx-auto px-6">


        {/* ================= HEADING ================= */}

        <div className="text-center max-w-2xl mx-auto mb-16">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
            "
          >
            About Me
          </p>
          <h2
            className="
    mt-3
    text-4xl
    md:text-5xl
    font-bold
    bg-gradient-to-r
    from-blue-600
    via-purple-600
    to-blue-600
    bg-[length:200%_auto]
    bg-clip-text
    text-transparent
    animate-[gradientMove_3s_linear_infinite]
  "
          >
            Know More About Me
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              text-lg
              leading-8
            "
          >
            Get to know more about my skills, experience and
            passion for building modern web applications.
          </p>

        </div>


        {/* ================= MAIN GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            lg:gap-20
            items-center
          "
        >


          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative">


            {/* IMAGE BACK FRAME */}

            <div
              className="
                absolute
                -top-5
                -left-5
                w-full
                h-full
                rounded-[2rem]
                bg-gradient-to-br
                from-blue-500
                to-purple-600
                opacity-20
              "
            />


            {/* IMAGE */}

            <div
              className="
                relative
                w-full
                h-[480px]
                md:h-[560px]
                rounded-[2rem]
                overflow-hidden
                border
                border-white/70
                bg-white/40
                shadow-2xl
                shadow-blue-500/20
                backdrop-blur-sm
              "
            >

              <img
                src="/images/profile.png"
                alt="Mukesh Kumar"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />

            </div>


            {/* EXPERIENCE CARD */}

            <div
              className="
                absolute
                top-8
                -right-4
                md:-right-8
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                shadow-xl
                border
                border-white
                px-5
                py-4
                animate-[floatCard_4s_ease-in-out_infinite]
              "
            >

              <p className="text-xs text-gray-500">
                Experience
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                2+ Years
              </h3>

              <p className="text-xs text-blue-600 font-medium">
                Web Development
              </p>

            </div>


            {/* PROJECT CARD */}

            <div
              className="
                absolute
                bottom-8
                -left-4
                md:-left-8
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                shadow-xl
                border
                border-white
                px-5
                py-4
                animate-[floatCard2_4s_ease-in-out_infinite]
              "
            >

              <p className="text-xs text-gray-500">
                Projects
              </p>

              <h3
                className="
                  text-2xl
                  font-bold
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  bg-clip-text
                  text-transparent
                "
              >
                20+
              </h3>

              <p className="text-xs text-gray-500">
                Completed Projects
              </p>

            </div>

          </div>


          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <div>


            {/* SMALL TITLE */}

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-blue-600
              "
            >
              Who I Am
            </p>


            {/* MAIN TITLE */}

            <h3
              className="
                mt-3
                text-3xl
                md:text-4xl
                font-bold
                text-gray-900
                leading-tight
              "
            >

              I'm Mukesh Kumar,

              <span
                className="
                  block
                  mt-2
                  bg-gradient-to-r
                  from-blue-600
                  via-purple-600
                  to-blue-600
                  bg-[length:200%_auto]
                  bg-clip-text
                  text-transparent
                  animate-[gradientMove_4s_linear_infinite]
                "
              >
                Full Stack Web Developer
              </span>

            </h3>


            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-gray-600
              "
            >
              I'm a passionate web developer who loves creating
              modern, responsive and user-friendly websites and
              web applications.
            </p>


            <p
              className="
                mt-4
                leading-8
                text-gray-600
              "
            >
              My main focus is building clean and scalable
              applications using React.js, Laravel and modern
              web technologies. I enjoy transforming ideas into
              real-world digital experiences.
            </p>


            {/* ==================================================
                TECHNOLOGIES
            ================================================== */}

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                gap-3
                mt-8
              "
            >


              {/* REACT */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  border-white
                  bg-white/70
                  backdrop-blur-sm
                  shadow-sm
                  hover:border-blue-400
                  hover:bg-blue-50
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <FaReact
                  size={25}
                  className="
                    text-blue-500
                    group-hover:rotate-[360deg]
                    transition-transform
                    duration-700
                  "
                />

                <span className="text-sm font-semibold text-gray-700">
                  React
                </span>

              </div>


              {/* LARAVEL */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  border-white
                  bg-white/70
                  backdrop-blur-sm
                  shadow-sm
                  hover:border-red-400
                  hover:bg-red-50
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <FaLaravel
                  size={25}
                  className="
                    text-red-500
                    group-hover:rotate-[360deg]
                    transition-transform
                    duration-700
                  "
                />

                <span className="text-sm font-semibold text-gray-700">
                  Laravel
                </span>

              </div>


              {/* WORDPRESS */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  border-white
                  bg-white/70
                  backdrop-blur-sm
                  shadow-sm
                  hover:border-blue-400
                  hover:bg-blue-50
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <FaWordpress
                  size={25}
                  className="
                    text-blue-600
                    group-hover:rotate-[360deg]
                    transition-transform
                    duration-700
                  "
                />

                <span className="text-sm font-semibold text-gray-700">
                  WordPress
                </span>

              </div>


              {/* JAVASCRIPT */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  border-white
                  bg-white/70
                  backdrop-blur-sm
                  shadow-sm
                  hover:border-yellow-400
                  hover:bg-yellow-50
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <FaJs
                  size={23}
                  className="
                    text-yellow-500
                    group-hover:rotate-[360deg]
                    transition-transform
                    duration-700
                  "
                />

                <span className="text-sm font-semibold text-gray-700">
                  JavaScript
                </span>

              </div>


              {/* HTML */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  border-white
                  bg-white/70
                  backdrop-blur-sm
                  shadow-sm
                  hover:border-orange-400
                  hover:bg-orange-50
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <FaHtml5
                  size={23}
                  className="
                    text-orange-500
                    group-hover:rotate-[360deg]
                    transition-transform
                    duration-700
                  "
                />

                <span className="text-sm font-semibold text-gray-700">
                  HTML5
                </span>

              </div>


              {/* TAILWIND */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  border-white
                  bg-white/70
                  backdrop-blur-sm
                  shadow-sm
                  hover:border-cyan-400
                  hover:bg-cyan-50
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                <SiTailwindcss
                  size={23}
                  className="
                    text-cyan-500
                    group-hover:rotate-[360deg]
                    transition-transform
                    duration-700
                  "
                />

                <span className="text-sm font-semibold text-gray-700">
                  Tailwind
                </span>

              </div>

            </div>


            {/* ==================================================
                SKILLS
            ================================================== */}

            <div className="mt-9 space-y-5">


              {/* WEB DEVELOPMENT */}

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-semibold text-gray-700">
                    Web Development
                  </span>

                  <span className="text-sm font-semibold text-blue-600">
                    95%
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-white/80 overflow-hidden">

                  <div
                    className="
                      h-full
                      w-[95%]
                      rounded-full
                      bg-gradient-to-r
                      from-blue-600
                      to-purple-600
                    "
                  />

                </div>

              </div>


              {/* REACT */}

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-semibold text-gray-700">
                    React Development
                  </span>

                  <span className="text-sm font-semibold text-blue-600">
                    90%
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-white/80 overflow-hidden">

                  <div
                    className="
                      h-full
                      w-[90%]
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                    "
                  />

                </div>

              </div>


              {/* LARAVEL */}

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-semibold text-gray-700">
                    Laravel Development
                  </span>

                  <span className="text-sm font-semibold text-purple-600">
                    88%
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-white/80 overflow-hidden">

                  <div
                    className="
                      h-full
                      w-[88%]
                      rounded-full
                      bg-gradient-to-r
                      from-purple-600
                      to-pink-500
                    "
                  />

                </div>

              </div>


              {/* WORDPRESS */}

              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-sm font-semibold text-gray-700">
                    WordPress Development
                  </span>

                  <span className="text-sm font-semibold text-cyan-600">
                    85%
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-white/80 overflow-hidden">

                  <div
                    className="
                      h-full
                      w-[85%]
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                    "
                  />

                </div>

              </div>

            </div>


            {/* ==================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-9
              "
            >

              {/* HIRE ME */}

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


              {/* DOWNLOAD CV */}

              <a
                href="/Mukesh-Kumar-CV.pdf"
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  border
                  border-gray-300
                  bg-white/60
                  backdrop-blur-sm
                  text-gray-700
                  font-semibold
                  hover:border-blue-600
                  hover:text-blue-600
                  hover:bg-blue-50
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <span>
                  ↓
                </span>

                Download CV

              </a>

            </div>

          </div>

        </div>


        {/* ==================================================
            STATS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            mt-20
            pt-12
            border-t
            border-white/70
          "
        >


          {/* PROJECTS */}

          <div
            className="
              text-center
              p-5
              rounded-2xl
              bg-white/40
              backdrop-blur-sm
              border
              border-white/70
            "
          >

            <h3
              className="
                text-4xl
                font-bold
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              20+
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              Projects Completed
            </p>

          </div>


          {/* CLIENTS */}

          <div
            className="
              text-center
              p-5
              rounded-2xl
              bg-white/40
              backdrop-blur-sm
              border
              border-white/70
            "
          >

            <h3
              className="
                text-4xl
                font-bold
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              10+
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              Happy Clients
            </p>

          </div>


          {/* TECHNOLOGIES */}

          <div
            className="
              text-center
              p-5
              rounded-2xl
              bg-white/40
              backdrop-blur-sm
              border
              border-white/70
            "
          >

            <h3
              className="
                text-4xl
                font-bold
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              8+
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              Technologies
            </p>

          </div>


          {/* EXPERIENCE */}

          <div
            className="
              text-center
              p-5
              rounded-2xl
              bg-white/40
              backdrop-blur-sm
              border
              border-white/70
            "
          >

            <h3
              className="
                text-4xl
                font-bold
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              2+
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              Years Experience
            </p>

          </div>

        </div>

      </div>


      {/* ==================================================
          ANIMATIONS
      ================================================== */}

      <style>{`

        @keyframes floatCard {

          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }

        }


        @keyframes floatCard2 {

          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(10px);
          }

        }


        @keyframes gradientMove {

          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }

        }

      `}</style>

    </section>
  )
}

export default About