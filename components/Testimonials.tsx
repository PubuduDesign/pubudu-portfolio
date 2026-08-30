"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "YouTube Creator",
    review:
      "Pubudu created amazing thumbnails that significantly improved my channel's click-through rate. Fast delivery and outstanding quality!",
  },
  {
    name: "Sarah Williams",
    role: "Business Owner",
    review:
      "Professional, creative, and easy to work with. The social media designs exceeded my expectations. Highly recommended!",
  },
  {
    name: "David Brown",
    role: "Content Creator",
    review:
      "One of the best designers I've worked with. Every thumbnail looks eye-catching and professionally crafted.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#1B1830] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Clients Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are a few words from clients I've worked with over the years.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-[#241D3F] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)] transition-all duration-500"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              {/* Client */}
              <div className="mt-8 border-t border-purple-500/20 pt-5">

                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-purple-400 mt-1">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}