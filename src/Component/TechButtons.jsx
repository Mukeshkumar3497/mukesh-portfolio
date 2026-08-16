import React from 'react'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel
} from 'react-icons/fa'

import { SiTailwindcss } from 'react-icons/si'

function TechButtons() {
  return (
    <section className="py-8 bg-transparent">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap items-center gap-3">

          {/* HTML */}
          <button className="tech-button html-button">
            <span className="tech-icon">
              <FaHtml5 size={20} />
            </span>
            <span>HTML5</span>
          </button>


          {/* CSS */}
          <button className="tech-button css-button">
            <span className="tech-icon">
              <FaCss3Alt size={20} />
            </span>
            <span>CSS3</span>
          </button>


          {/* JAVASCRIPT */}
          <button className="tech-button js-button">
            <span className="tech-icon">
              <FaJs size={19} />
            </span>
            <span>JavaScript</span>
          </button>


          {/* TAILWIND */}
          <button className="tech-button tailwind-button">
            <span className="tech-icon">
              <SiTailwindcss size={20} />
            </span>
            <span>Tailwind CSS</span>
          </button>


          {/* REACT */}
          <button className="tech-button react-button">
            <span className="tech-icon">
              <FaReact size={20} />
            </span>
            <span>React</span>
          </button>


          {/* LARAVEL */}
          <button className="tech-button laravel-button">
            <span className="tech-icon">
              <FaLaravel size={20} />
            </span>
            <span>Laravel</span>
          </button>

        </div>

      </div>


      <style>{`

        /* =========================================
           BUTTON
        ========================================= */

        .tech-button {

          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          min-width: 125px;

          height: 46px;

          padding: 0 18px;

          border-radius: 9999px;

          border: 1px solid #e5e7eb;

          background: #ffffff;

          color: #4b5563;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          overflow: hidden;

          isolation: isolate;

        }


        /* =========================================
           MOVING GRADIENT
           YE SIRF HOVER PAR DIKHEGA
        ========================================= */

        .tech-button::before {

          content: "";

          position: absolute;

          width: 180%;

          height: 180%;

          left: -40%;

          top: -40%;

          border-radius: 50%;

          background: conic-gradient(
            from 0deg,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #06b6d4,
            #3b82f6
          );

          opacity: 0;

          z-index: -2;

        }


        /* =========================================
           WHITE INNER AREA
        ========================================= */

        .tech-button::after {

          content: "";

          position: absolute;

          inset: 2px;

          border-radius: 9999px;

          background: white;

          z-index: -1;

        }


        /* =========================================
           HOVER
           BUTTON STATIC RAHEGA
        ========================================= */

        .tech-button:hover::before {

          opacity: 1;

          animation: movingGradient 2s linear infinite;

        }


        /* =========================================
           HOVER INNER BACKGROUND
        ========================================= */

        .tech-button:hover::after {

          background: transparent;

        }


        /* =========================================
           TEXT
           STATIC
        ========================================= */

        .tech-button > span {

          position: relative;

          z-index: 5;

        }


        /* =========================================
           ICON
           STATIC
        ========================================= */

        .tech-icon {

          width: 30px;

          height: 30px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #f3f4f6;

          flex-shrink: 0;

        }


        /* =========================================
           ICON HOVER
           NO ROTATION
        ========================================= */

        .tech-button:hover .tech-icon {

          transform: none;

        }


        /* =========================================
           HOVER TEXT
        ========================================= */

        .tech-button:hover {

          color: white;

          border-color: transparent;

          box-shadow:
            0 8px 25px rgba(59, 130, 246, 0.25);

        }


        /* =========================================
           ICON COLORS
        ========================================= */

        .html-button .tech-icon {

          color: #e34f26;

          background: #fff1ed;

        }


        .css-button .tech-icon {

          color: #1572b6;

          background: #edf7ff;

        }


        .js-button .tech-icon {

          color: #111827;

          background: #fef3a5;

        }


        .tailwind-button .tech-icon {

          color: #06b6d4;

          background: #e8fbff;

        }


        .react-button .tech-icon {

          color: #08a8d6;

          background: #e8faff;

        }


        .laravel-button .tech-icon {

          color: #ff2d20;

          background: #fff0ef;

        }


        /* =========================================
           INFINITE GRADIENT ROTATION
        ========================================= */

        @keyframes movingGradient {

          0% {

            transform: rotate(0deg);

          }

          100% {

            transform: rotate(360deg);

          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 640px) {

          .tech-button {

            min-width: 115px;

            height: 43px;

            padding: 0 14px;

            font-size: 13px;

          }

          .tech-icon {

            width: 28px;

            height: 28px;

          }

        }

      `}</style>

    </section>
  )
}

export default TechButtons