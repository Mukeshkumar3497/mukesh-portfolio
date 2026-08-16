import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock
} from 'react-icons/fa'

function Blog() {

  const blogs = [
    {
      title: 'Getting Started with React.js',
      description:
        'Learn the fundamentals of React.js and understand how to build modern, interactive and scalable web applications.',
      image: '/images/blog1.png',
      category: 'React',
      date: 'Aug 10, 2026',
      time: '5 min read'
    },

    {
      title: 'Building REST APIs with Laravel',
      description:
        'A practical guide to building powerful REST APIs with Laravel and connecting them with modern frontend applications.',
      image: '/images/blog2.png',
      category: 'Laravel',
      date: 'Aug 07, 2026',
      time: '7 min read'
    },

    {
      title: 'Tailwind CSS for Modern Websites',
      description:
        'Discover how Tailwind CSS can help you create beautiful responsive interfaces faster with utility-first styling.',
      image: '/images/blog3.png',
      category: 'Tailwind CSS',
      date: 'Aug 04, 2026',
      time: '6 min read'
    },

    {
      title: 'React and Laravel Integration',
      description:
        'Learn how React frontend and Laravel backend can work together to create complete full-stack applications.',
      image: '/images/blog4.png',
      category: 'Full Stack',
      date: 'Aug 01, 2026',
      time: '8 min read'
    },

    {
      title: 'Essential Web Development Skills',
      description:
        'A complete overview of the most important skills every modern web developer should learn to build professional websites.',
      image: '/images/blog5.png',
      category: 'Development',
      date: 'Jul 28, 2026',
      time: '6 min read'
    },

    {
      title: 'How to Improve Website Performance',
      description:
        'Practical techniques to make your website faster, improve user experience and achieve better search engine performance.',
      image: '/images/blog6.png',
      category: 'Performance',
      date: 'Jul 24, 2026',
      time: '5 min read'
    }
  ]

  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        py-24
        lg:py-32
        bg-gradient-to-br
        from-blue-50
        via-white
        to-purple-100
      "
    >

      {/* ================= BACKGROUND ================= */}

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
          opacity-20
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
          opacity-20
        "
      />


      {/* ================= CONTAINER ================= */}

      <div className="relative max-w-7xl mx-auto px-6">


        {/* ================= HEADER ================= */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-16
          "
        >

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
            "
          >
            My Blog
          </p>


          <h1
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
            Latest Articles
          </h1>


          <p
            className="
              mt-5
              text-lg
              text-gray-600
              leading-8
            "
          >
            Thoughts, tutorials and insights about web development,
            programming and modern technologies.
          </p>

        </div>


        {/* ================= BLOG GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {blogs.map((blog, index) => (

            <article
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

              {/* ================= IMAGE ================= */}

              <div
                className="
                  relative
                  h-56
                  overflow-hidden
                  bg-gray-100
                "
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />


                {/* Overlay */}

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


                {/* Category */}

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    px-4
                    py-1.5
                    rounded-full
                    bg-white/90
                    backdrop-blur-md
                    text-blue-600
                    text-xs
                    font-bold
                    shadow-lg
                  "
                >
                  {blog.category}
                </span>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="p-7">


                {/* DATE + TIME */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    text-xs
                    text-gray-400
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <FaCalendarAlt className="text-blue-500" />

                    {blog.date}
                  </span>


                  <span
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <FaClock className="text-purple-500" />

                    {blog.time}
                  </span>

                </div>


                {/* TITLE */}

                <h2
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    leading-tight
                    text-gray-900
                    group-hover:text-blue-600
                    transition-colors
                    duration-300
                  "
                >
                  {blog.title}
                </h2>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-gray-500
                    text-sm
                    leading-7
                  "
                >
                  {blog.description}
                </p>


                {/* READ ARTICLE */}

                <Link
                  to="#"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-sm
                    font-semibold
                    text-blue-600
                    hover:text-purple-600
                    transition-colors
                    duration-300
                  "
                >

                  Read Article

                  <FaArrowRight
                    size={13}
                    className="
                      group-hover:translate-x-2
                      transition-transform
                      duration-300
                    "
                  />

                </Link>

              </div>


              {/* ================= BOTTOM LINE ================= */}

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

            </article>

          ))}

        </div>


        {/* ================= CTA ================= */}

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

          {/* Glow */}

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
              Stay Updated
            </p>


            <h2
              className="
                mt-3
                text-3xl
                md:text-4xl
                font-bold
                text-white
              "
            >
              Want to Read More?
            </h2>


            <p
              className="
                max-w-2xl
                mx-auto
                mt-4
                text-blue-100
                leading-7
              "
            >
              Follow my journey as I explore web development,
              new technologies and interesting projects.
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
              Let's Connect

              <FaArrowRight size={14} />

            </Link>

          </div>

        </div>

      </div>


      {/* ================= ANIMATION ================= */}

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

export default Blog