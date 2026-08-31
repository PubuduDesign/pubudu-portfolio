"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
    
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSending(true);
  setStatus("");

  const response = await fetch("https://formspree.io/f/xwlkvdqw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } else {
    setStatus("error");
  }

  setSending(false);
};

  return (
    <section id="contact" className="bg-[#1B1830] py-20 md:py-32 px-5 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            Contact Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
            Let's Talk
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Looking for high-quality graphic design? Whether you need YouTube
            thumbnails, social media designs, branding, or creative visuals,
            I'm here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Mail className="text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">
                    pubududesign@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Phone className="text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">
                    +94 76 833 4297
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
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
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xwlkvdqw"
          method="POST"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#241D3F] rounded-3xl p-5 md:p-8 border border-purple-500/20 shadow-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full mb-5 bg-[#1B1830] rounded-xl p-3 md:p-4 text-white outline-none border border-transparent focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full mb-5 bg-[#1B1830] rounded-xl p-3 md:p-4 text-white outline-none border border-transparent focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full mb-5 bg-[#1B1830] rounded-xl p-3 md:p-4 text-white outline-none border border-transparent focus:border-purple-500 transition"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full mb-6 bg-[#1B1830] rounded-xl p-3 md:p-4 text-white outline-none border border-transparent focus:border-purple-500 transition resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition duration-300 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Let's Talk"}
            </button>
            {status === "success" && (
              <p className="text-green-400 text-center mt-4">
                ✅ Message sent successfully!
                </p>
              )}
              
              {status === "error" && (
                <p className="text-red-400 text-center mt-4">
                  ❌ Something went wrong. Please try again.
                  </p>
                )}

            <p className="text-center text-gray-400 text-sm mt-4">
              I usually reply within 24 hours.
            </p>

          </motion.form>

        </div>
      </div>
    </section>
  );
}