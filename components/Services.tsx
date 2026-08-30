"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Play,
  Image as ImageIcon,
  Palette,
  Printer,
  Clapperboard,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    icon: Play,
    title: "YouTube Thumbnail Design",
    description:
      "Eye catching, high converting thumbnails designed to increase clicks, boost engagement, and grow your channel.",
    features: [
      "High CTR Design",
      "Fast Delivery",
      "Unlimited Revisions",
    ],
  },
  {
    icon: ImageIcon,
    title: "Social Media Design",
    description:
      "Creative social media graphics that strengthen your brand and engage your audience across every platform.",
    features: [
      "Custom Designs",
      "Platform Optimized",
      "Brand Consistency",
    ],
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description:
      "Professional branding that builds trust with unique logos, colors, typography, and brand guidelines.",
    features: [
      "Unique Logo Design",
      "Brand Guidelines",
      "Professional Identity",
    ],
  },
  {
    icon: Printer,
    title: "Print Design",
    description:
      "High-quality print materials designed to leave a lasting impression for your business and customers.",
    features: [
      "Print Ready Files",
      "High Resolution",
      "Professional Layout",
    ],
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    description:
      "Professional editing for YouTube videos, reels, shorts, and promotional content with smooth storytelling.",
    features: [
      "Smooth Editing",
      "Color Correction",
      "On-Time Delivery",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    description:
      "Modern website and mobile interface designs focused on usability, performance, and user experience.",
    features: [
      "Responsive Design",
      "Modern Interface",
      "User Friendly",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#1B1830] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-purple-400 text-sm">
            My Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            What I Create
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            I help businesses, brands, and content creators stand out with
            creative visuals that capture attention, build trust, and leave a
            lasting impression.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group bg-[#241D3F] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(168,85,247,0.30)] transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-500">
                  <Icon
                    size={32}
                    className="text-purple-400 group-hover:text-white transition"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold mt-8">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-5 leading-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-purple-400 flex-shrink-0"
                      />
                      <span className="text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}