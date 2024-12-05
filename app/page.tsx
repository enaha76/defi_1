"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100 flex flex-col p-4 text-center overflow-hidden relative">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Ocean Waves */}
        <div className="absolute inset-x-0 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#0891b2"
              fillOpacity="0.2"
              d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,165.3C672,181,768,171,864,154.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold p-3 text-ocean-blue mb-6 relative z-10 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          L&apos;Océan : Le cœur battant de notre planète
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-blue-900 mb-12 max-w-2xl relative z-10 font-normal"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Explorez les parallèles fascinants entre le corps humain et les
          systèmes océaniques.
        </motion.p>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
        >
          <Link
            href="/exploration"
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Commencer l&apos;exploration
          </Link>
        </motion.div>
      </div>

      {/* Section 1 */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 px-4">
        {/* Text */}
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-900">
            Le courant des océans
          </h2>
          <p className="text-lg text-gray-800">
            Découvrez comment les courants marins transportent des nutriments et
            régulent le climat mondial. Ces courants jouent un rôle crucial,
            tout comme les artères dans le corps humain.
          </p>
        </div>
        {/* Image */}
        <div>
          <img
            src="/ocean-currents.jpg"
            alt="Ocean Currents"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 px-4">
        {/* Image */}
        <div>
          <img
            src="/phytoplankton.jpg"
            alt="Phytoplankton and Oxygen Production"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Text */}
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-900">
            Phytoplancton : Les poumons de l&apos;océan
          </h2>
          <p className="text-lg text-gray-800">
            Le phytoplancton est responsable de la production de plus de 50 % de
            l&apos;oxygène de notre planète. Ces minuscules organismes marins
            fonctionnent comme les poumons de la Terre.
          </p>
        </div>
      </section>
    </div>
  );
}
