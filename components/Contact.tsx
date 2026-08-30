"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1B1830] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            Contact Me
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Talk
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Looking for high-quality graphic design? Whether you need YouTube
            thumbnails, social media designs, branding, or creative visuals,
            I'm here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-white text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Mail className="text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">
                    pubududesign@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Phone className="text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">
                    +94 76 833 4297
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">
                    Sri Lanka
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#241D3F] rounded-3xl p-8 border border-purple-500/20 shadow-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-5 bg-[#1B1830] rounded-xl p-4 text-white outline-none border border-transparent focus:border-purple-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-5 bg-[#1B1830] rounded-xl p-4 text-white outline-none border border-transparent focus:border-purple-500 transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full mb-5 bg-[#1B1830] rounded-xl p-4 text-white outline-none border border-transparent focus:border-purple-500 transition"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full mb-6 bg-[#1B1830] rounded-xl p-4 text-white outline-none border border-transparent focus:border-purple-500 transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition duration-300 hover:scale-[1.02]"
            >
              Let's Talk
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              I usually reply within 24 hours.
            </p>

          </motion.form>

        </div>
      </div>
    </section>
  );
}