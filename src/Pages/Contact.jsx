import React, { useState } from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane
} from 'react-icons/fa'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    alert('Message sent successfully!')

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

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


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative max-w-7xl mx-auto px-6">


        {/* ================= HEADING ================= */}

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
            Contact Me
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
            Let's Work Together
          </h1>


          <p
            className="
              mt-5
              text-lg
              text-gray-600
              leading-8
            "
          >
            Have a project in mind or want to discuss an
            opportunity? Feel free to get in touch with me.
          </p>

        </div>


        {/* ================= CONTENT ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-stretch
          "
        >


          {/* ================= LEFT SIDE ================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              p-8
              md:p-10
              bg-gradient-to-br
              from-blue-600
              via-purple-600
              to-blue-700
              text-white
              shadow-2xl
              shadow-blue-500/20
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                -top-24
                -right-24
                w-64
                h-64
                rounded-full
                bg-white
                opacity-10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-24
                -left-24
                w-64
                h-64
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
                  uppercase
                  tracking-widest
                  font-semibold
                "
              >
                Get In Touch
              </p>


              <h2
                className="
                  mt-3
                  text-3xl
                  md:text-4xl
                  font-bold
                "
              >
                Let's Talk About Your Project
              </h2>


              <p
                className="
                  mt-5
                  text-blue-100
                  leading-7
                  max-w-lg
                "
              >
                Whether you have a question, a project idea,
                or simply want to connect, I'm always happy
                to hear from you.
              </p>


              {/* ================= CONTACT INFO ================= */}

              <div className="mt-10 space-y-6">


                {/* EMAIL */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      shrink-0
                      rounded-xl
                      bg-white/15
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaEnvelope size={18} />
                  </div>

                  <div>

                    <p className="text-blue-200 text-sm">
                      Email
                    </p>

                    <p className="font-semibold">
                      mukeshkumarbharti97@gmail.com
                    </p>

                  </div>

                </div>


                {/* PHONE */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      shrink-0
                      rounded-xl
                      bg-white/15
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaPhone size={17} />
                  </div>

                  <div>

                    <p className="text-blue-200 text-sm">
                      Phone
                    </p>

                    <p className="font-semibold">
                      +91 9668259794
                    </p>

                  </div>

                </div>


                {/* LOCATION */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      shrink-0
                      rounded-xl
                      bg-white/15
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaMapMarkerAlt size={17} />
                  </div>

                  <div>

                    <p className="text-blue-200 text-sm">
                      Location
                    </p>

                    <p className="font-semibold">
                      India
                    </p>

                  </div>

                </div>

              </div>


              {/* ================= SOCIAL ================= */}

              <div className="mt-10">

                <p className="text-blue-200 text-sm mb-4">
                  Follow Me
                </p>

                <div className="flex gap-3">

                  <a
                    href="#"
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-white/10
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      hover:bg-white
                      hover:text-blue-600
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub />
                  </a>


                  <a
                    href="#"
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-white/10
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      hover:bg-white
                      hover:text-blue-600
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <FaLinkedinIn />
                  </a>


                  <a
                    href="#"
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-white/10
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      hover:bg-white
                      hover:text-blue-600
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <FaTwitter />
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT FORM ================= */}

          <div
            className="
              rounded-3xl
              bg-white/80
              backdrop-blur-md
              border
              border-white
              shadow-xl
              shadow-gray-200/50
              p-8
              md:p-10
            "
          >

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-gray-900
              "
            >
              Send Me a Message
            </h2>


            <p
              className="
                mt-3
                text-gray-500
              "
            >
              Fill out the form below and I'll get back to you
              as soon as possible.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >


              {/* NAME + EMAIL */}

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                "
              >

                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-2
                    "
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      px-5
                      py-3.5
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-800
                      outline-none
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/10
                      transition-all
                    "
                  />

                </div>


                <div>

                  <label
                    className="
                      block
                      text-sm
                      font-semibold
                      text-gray-700
                      mb-2
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="
                      w-full
                      px-5
                      py-3.5
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-800
                      outline-none
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-500/10
                      transition-all
                    "
                  />

                </div>

              </div>


              {/* SUBJECT */}

              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-2
                  "
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="
                    w-full
                    px-5
                    py-3.5
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-800
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                    transition-all
                  "
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-2
                  "
                >
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows="6"
                  className="
                    w-full
                    px-5
                    py-3.5
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-800
                    outline-none
                    resize-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-500/10
                    transition-all
                  "
                />

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="
                  group
                  relative
                  overflow-hidden
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-blue-600
                  via-purple-600
                  to-blue-600
                  bg-[length:200%_auto]
                  hover:bg-[position:100%_0]
                  hover:scale-[1.02]
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-500
                "
              >

                <span>
                  Send Message
                </span>

                <FaPaperPlane
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                    duration-300
                  "
                />

              </button>

            </form>

          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <div
          className="
            mt-20
            text-center
          "
        >

          <p
            className="
              text-gray-500
              text-sm
            "
          >
            Looking for a developer for your next project?
          </p>

          <h3
            className="
              mt-2
              text-2xl
              font-bold
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            Let's create something amazing together.
          </h3>

        </div>

      </div>


      {/* ================= GRADIENT ANIMATION ================= */}

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

export default Contact