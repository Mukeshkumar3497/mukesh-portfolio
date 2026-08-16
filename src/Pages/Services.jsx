import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaCode,
  FaPalette,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaRocket
} from 'react-icons/fa'

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description:
        'Building modern, responsive and high-performance websites using modern technologies and best development practices.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'Cross-browser Compatibility'
      ],
      color: 'blue'
    },

    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description:
        'Creating clean, intuitive and beautiful user interfaces that provide an engaging and user-friendly experience.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design'
      ],
      color: 'purple'
    },

    {
      icon: <FaServer />,
      title: 'Backend Development',
      description:
        'Building secure and scalable backend systems with APIs, databases and powerful server-side technologies.',
      features: [
        'REST API Development',
        'Database Design',
        'Authentication & Security'
      ],
      color: 'green'
    },

    {
      icon: <FaMobileAlt />,
      title: 'Wordpress Development',
      description:
        'Creating responsive and modern mobile experiences that work smoothly across different devices and screen sizes.',
      features: [
        'Responsive Applications',
        'Mobile-friendly UI',
        'Cross-device Compatibility'
      ],
      color: 'pink'
    },

    {
      icon: <FaCloud />,
      title: 'SEO Optimization',
      description:
        'Deploying and managing modern web applications with reliable hosting, deployment and scalable infrastructure.',
      features: [
        'Cloud Deployment',
        'CI/CD Setup',
        'Application Scalability'
      ],
      color: 'cyan'
    },

    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description:
        'Making websites faster, smoother and more search-engine friendly through modern optimization techniques.',
      features: [
        'Speed Optimization',
        'SEO Enhancement',
        'Core Web Vitals'
      ],
      color: 'orange'
    }
  ]

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
        bg-gradient-to-br
        from-blue-50
        via-white
        to-purple-50
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


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative max-w-7xl mx-auto px-6">


        {/* ================= HEADING ================= */}

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
            Services
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
            What I Offer
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              text-lg
              leading-8
            "
          >
            Comprehensive web development services tailored
            to your needs
          </p>

        </div>


        {/* ================= SERVICE CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >

          {services.map((service, index) => (

            <div
              key={index}
              className="
                service-card
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-white/70
                backdrop-blur-md
                border
                border-white
                p-7
                shadow-lg
                shadow-gray-200/40
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* Animated Gradient */}

              <div
                className="
                  absolute
                  -top-32
                  -right-32
                  w-64
                  h-64
                  rounded-full
                  bg-gradient-to-br
                  from-blue-500
                  to-purple-600
                  opacity-0
                  blur-3xl
                  group-hover:opacity-20
                  group-hover:scale-150
                  transition-all
                  duration-700
                "
              />


              {/* ================= ICON ================= */}

              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-blue-600
                  to-purple-600
                  text-white
                  text-2xl
                  shadow-lg
                  shadow-blue-500/20
                  group-hover:rotate-6
                  group-hover:scale-110
                  transition-all
                  duration-500
                "
              >

                {service.icon}

              </div>


              {/* ================= TITLE ================= */}

              <h3
                className="
                  relative
                  mt-7
                  text-2xl
                  font-bold
                  text-gray-900
                  group-hover:text-blue-600
                  transition-colors
                  duration-300
                "
              >
                {service.title}
              </h3>


              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  relative
                  mt-4
                  text-gray-500
                  leading-7
                "
              >
                {service.description}
              </p>


              {/* ================= FEATURES ================= */}

              <ul
                className="
                  relative
                  mt-6
                  space-y-3
                "
              >

                {service.features.map((feature, featureIndex) => (

                  <li
                    key={featureIndex}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-gray-600
                    "
                  >

                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        text-white
                        text-xs
                        font-bold
                        flex-shrink-0
                      "
                    >
                      ✓
                    </span>

                    {feature}

                  </li>

                ))}

              </ul>


              {/* ================= BUTTON ================= */}

              <Link
                to="/contact"
                className="
                  relative
                  inline-flex
                  items-center
                  gap-2
                  mt-7
                  text-sm
                  font-semibold
                  text-blue-600
                  group-hover:text-purple-600
                  transition-colors
                  duration-300
                "
              >

                Learn More

                <span
                  className="
                    text-lg
                    group-hover:translate-x-2
                    transition-transform
                    duration-300
                  "
                >
                  →
                </span>

              </Link>


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
                  to-purple-600
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              />

            </div>

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <div
          className="
            relative
            mt-20
            rounded-3xl
            overflow-hidden
            bg-gradient-to-r
            from-blue-600
            via-purple-600
            to-blue-600
            bg-[length:200%_auto]
            animate-gradient
            p-10
            md:p-14
            text-center
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
              Let's Work Together
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
              Let's build something modern, beautiful and
              powerful together.
            </p>


            {/* CTA BUTTON */}

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

              Get Started

              <span>
                →
              </span>

            </Link>

          </div>

        </div>

      </div>


      {/* ================= CUSTOM CSS ================= */}

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

export default Services