"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Main() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 80]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            style={{ y: bgY, opacity: bgOpacity }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(37,99,235,0.12),transparent_70%)]" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-white" />
        </div>

        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I’m Rishikesh — a frontend developer building high-conversion SaaS landing pages.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            I help early-stage startups present their product clearly, build trust,
            and convert visitors into users.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium
                         transition-all duration-200
                         hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02]
                         active:scale-[0.97]"
            >
              View My Work
            </button>

            <a
              href="mailto:chikkarishikesh@gmail.com"
              className="px-6 py-3 rounded-lg border border-gray-300
                         transition-colors duration-200
                         hover:bg-gray-100"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Services
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "SaaS Landing Pages",
                desc: "Clean, conversion-focused landing pages built with modern frontend tools.",
              },
              {
                title: "Business Websites",
                desc: "Professional websites for startups and small businesses that build credibility.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-xl bg-white border border-gray-200
                           shadow-sm hover:shadow-md
                           transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <section id="work" className="py-28">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Featured Work
          </h2>

          <div className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl border border-gray-200
                          shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900">
              FlowSync — B2B SaaS Landing Page
            </h3>

            <p className="mt-4 text-gray-600">
              A polished, responsive SaaS landing page designed to communicate product
              value clearly and drive conversions.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://flowsync.chikkarishikesh.xyz"
                target="_blank"
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium
                           transition-all duration-200
                           hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02]"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/chikkarishikesh/flow-sync-b2b-saas-landing-page"
                target="_blank"
                className="px-5 py-2.5 rounded-lg border border-gray-300
                           transition-colors duration-200
                           hover:bg-gray-100"
              >
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let’s work together
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind or need a SaaS landing page?
          </p>

          <a
            href="mailto:chikkarishikesh@gmail.com"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-blue-600 text-white font-medium
                       transition-all duration-200
                       hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </motion.div>
      </section>
    </main>
  )
}
