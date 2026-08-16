import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaLaravel,
  FaWordpress
} from 'react-icons/fa'

import { SiTailwindcss, SiMysql } from 'react-icons/si'

function Projects() {

  const projects = [
    {
      title: 'E-Commerce Website',
      description:
        'A modern and responsive e-commerce website with product browsing, categories, shopping cart and checkout functionality.',
      image: '/images/project1.png',
      technologies: [
        {
          name: 'React',
          icon: <FaReact />
        },
        {
          name: 'Laravel',
          icon: <FaLaravel />
        },
        {
          name: 'Tailwind',
          icon: <SiTailwindcss />
        },
        {
          name: 'MySQL',
          icon: <SiMysql />
        }
      ],
      github: '#',
      live: '#'
    },

    {
      title: 'Employee Management System',
      description:
        'An employee management system with employee records, attendance management, dashboard and administrative functionality.',
      image: '/images/project2.png',
      technologies: [
        {
          name: 'React',
          icon: <FaReact />
        },
        {
          name: 'Laravel',
          icon: <FaLaravel />
        },
        {
          name: 'MySQL',
          icon: <SiMysql />
        }
      ],
      github: '#',
      live: '#'
    },

    {
      title: 'WordPress Website',
      description:
        'A professional and responsive WordPress website designed with a clean interface and optimized structure.',
      image: '/images/project3.png',
      technologies: [
        {
          name: 'WordPress',
          icon: <FaWordpress />
        }
      ],
      github: '#',
      live: '#'
    },

    {
      title: 'Portfolio Website',
      description:
        'A modern developer portfolio website showcasing skills, services, experience and projects with smooth animations.',
      image: '/images/project4.png',
      technologies: [
        {
          name: 'React',
          icon: <FaReact />
        },
        {
          name: 'Tailwind',
          icon: <SiTailwindcss />
        }
      ],
      github: '#',
      live: '#'
    },

    {
      title: 'Laravel REST API',
      description:
        'A REST API backend built with Laravel for handling authentication, products, categories, orders and database operations.',
      image: '/images/project5.png',
      technologies: [
        {
          name: 'Laravel',
          icon: <FaLaravel />
        },
        {
          name: 'MySQL',
          icon: <SiMysql />
        }
      ],
      github: '#',
      live: '#'
    },

    {
      title: 'Business Website',
      description:
        'A responsive business website with modern UI, service sections, contact functionality and mobile-friendly design.',
      image: '/images/project6.png',
      technologies: [
        {
          name: 'React',
          icon: <FaReact />
        },
        {
          name: 'Tailwind',
          icon: <SiTailwindcss />
        }
      ],
      github: '#',
      live: '#'
    }
  ]

  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        py-24
        lg:py-32
        bg-gradient-to-br
        from-blue-50
        via-white
        to-purple-100
      "
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

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
          opacity-25
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
          opacity-25
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[350px]
          h-[350px]
          rounded-full
          bg-cyan-200
          blur-3xl
          opacity-10
        "
      />


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative max-w-7xl mx-auto px-6">


        {/* =========================================
            HEADING
        ========================================= */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
            "
          >
            My Work
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
              animate-gradient
            "
          >
            Featured Projects
          </h2>


          <p
            className="
              mt-5
              text-gray-600
              text-lg
              leading-8
            "
          >
            Here are some of the projects I've worked on,
            showcasing my skills and experience in modern
            web development.
          </p>

        </div>


        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white/80
                backdrop-blur-md
                border
                border-white
                shadow-lg
                shadow-gray-200/50
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-blue-500/10
                transition-all
                duration-500
              "
            >

              {/* =================================
                  IMAGE
              ================================= */}

              <div
                className="
                  relative
                  h-56
                  overflow-hidden
                  bg-gray-100
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />


                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    opacity-60
                  "
                />


                {/* PROJECT NUMBER */}

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/90
                    backdrop-blur-md
                    text-sm
                    font-bold
                    text-blue-600
                    shadow-lg
                  "
                >
                  0{index + 1}
                </div>


                {/* VIEW BUTTON */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute
                    top-4
                    right-4
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/90
                    text-gray-700
                    opacity-0
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <FaExternalLinkAlt size={14} />
                </a>

              </div>


              {/* =================================
                  CONTENT
              ================================= */}

              <div className="p-7">


                {/* TITLE */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-gray-900
                    group-hover:text-blue-600
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-gray-500
                    leading-7
                    text-sm
                  "
                >
                  {project.description}
                </p>


                {/* =================================
                    TECHNOLOGIES
                ================================= */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                  "
                >

                  {project.technologies.map(
                    (technology, techIndex) => (

                      <span
                        key={techIndex}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-3
                          py-1.5
                          rounded-full
                          bg-gray-50
                          border
                          border-gray-200
                          text-xs
                          font-medium
                          text-gray-600
                          group-hover:border-blue-200
                          group-hover:bg-blue-50
                          transition-all
                          duration-300
                        "
                      >

                        <span className="text-blue-600">
                          {technology.icon}
                        </span>

                        {technology.name}

                      </span>

                    )
                  )}

                </div>


                {/* =================================
                    BUTTONS
                ================================= */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mt-7
                  "
                >

                  {/* GITHUB */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-5
                      py-2.5
                      rounded-full
                      bg-gray-900
                      text-white
                      text-sm
                      font-semibold
                      hover:bg-black
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >

                    <FaGithub size={16} />

                    GitHub

                  </a>


                  {/* LIVE DEMO */}

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/demo
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-5
                      py-2.5
                      rounded-full
                      bg-gradient-to-r
                      from-blue-600
                      to-purple-600
                      text-white
                      text-sm
                      font-semibold
                      shadow-md
                      shadow-blue-500/20
                      hover:scale-105
                      hover:shadow-lg
                      hover:shadow-purple-500/30
                      transition-all
                      duration-300
                    "
                  >

                    Live Demo

                    <FaExternalLinkAlt
                      size={13}
                      className="
                        group-hover/demo:translate-x-1
                        transition-transform
                      "
                    />

                  </a>

                </div>

              </div>


              {/* =================================
                  BOTTOM GRADIENT LINE
              ================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-0
                  h-1
                  bg-gradient-to-r
                  from-blue-600
                  via-purple-600
                  to-pink-500
                  group-hover:w-full
                  transition-all
                  duration-700
                "
              />

            </div>

          ))}

        </div>


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <div
          className="
            relative
            overflow-hidden
            mt-20
            rounded-3xl
            p-10
            md:p-14
            text-center
            bg-gradient-to-r
            from-blue-600
            via-purple-600
            to-blue-600
            bg-[length:200%_auto]
            animate-gradient
            shadow-2xl
            shadow-blue-500/20
          "
        >

          {/* CTA GLOW */}

          <div
            className="
              absolute
              -top-20
              -left-20
              w-60
              h-60
              rounded-full
              bg-white
              opacity-10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -right-20
              w-60
              h-60
              rounded-full
              bg-white
              opacity-10
              blur-3xl
            "
          />


          <div className="relative">

            <p
              className="
                text-blue-100
                text-sm
                font-semibold
                uppercase
                tracking-widest
              "
            >
              Have a project in mind?
            </p>


            <h3
              className="
                mt-3
                text-3xl
                md:text-4xl
                font-bold
                text-white
              "
            >
              Let's Build Something Amazing
            </h3>


            <p
              className="
                mt-4
                max-w-2xl
                mx-auto
                text-blue-100
                leading-7
              "
            >
              I'm always open to discussing new projects,
              creative ideas and opportunities.
            </p>


            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-2
                mt-7
                px-7
                py-3.5
                rounded-full
                bg-white
                text-blue-600
                font-semibold
                shadow-xl
                hover:bg-gray-100
                hover:scale-105
                transition-all
                duration-300
              "
            >

              Start a Project

              <span className="text-lg">
                →
              </span>

            </Link>

          </div>

        </div>

      </div>


      {/* =========================================
          ANIMATION
      ========================================= */}

      <style>{`

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

        .animate-gradient {
          animation: gradientMove 4s linear infinite;
        }

      `}</style>

    </section>
  )
}

export default Projects