"use client";

import Chatbot from "@/components/chatbot";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100 flex flex-col text-center overflow-hidden relative">
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
            href="/explorer"
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Commencer l&apos;exploration
          </Link>
        </motion.div>
      </div>

      {/* Section 1: Why the Ocean is Essential */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 px-4">
        <div>
          <img
            src="/explorer/oc.jpg"
            width="580"
            height="400"
            alt="Ocean Life Sustainability"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-900">
            Pourquoi l&apos;océan est essentiel à notre survie
          </h2>
          <p className="text-lg text-gray-800">
            L&apos;océan est plus qu&apos;une masse d&apos;eau salée. Il régule
            notre climat, produit plus de 50 % de l&apos;oxygène que nous
            respirons, et abrite une biodiversité incroyable. Sa préservation
            est essentielle pour la vie sur Terre.
          </p>
        </div>
      </section>

      {/* Section 2: Dive Into Ocean Zones */}
      <section className="bg-teal-100 py-12 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-900">
            Plongez dans les zones de l&apos;océan
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Découvrez les différentes couches de l&apos;océan, de la surface où
            vivent les algues et poissons jusqu&apos;aux profondeurs obscures
            habitées par des créatures fascinantes.
          </p>
          <Link
            href="/ocean-zones"
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Explorer les zones
          </Link>
        </div>
      </section>

      {/* Section 3: Fun Facts */}
      <section className="bg-cyan-50 py-12 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-900">
            Le saviez-vous ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg text-gray-800">
                🌊 97 % de l&apos;eau de la Terre se trouve dans les océans.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg text-gray-800">
                🐠 La Grande Barrière de Corail est visible depuis
                l&apos;espace.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg text-gray-800">
                🕵️‍♂️ Nous connaissons moins de 5 % de l&apos;océan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Take Action */}
      <section className="bg-teal-700 py-12 px-4 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Protégeons nos océans
          </h2>
          <p className="text-lg mb-6">
            Chaque petit geste compte. Réduisez votre consommation de plastique,
            soutenez les efforts de conservation, et éduquez-vous sur
            l&apos;impact des humains sur nos océans.
          </p>
          <Link
            href="/take-action"
            className="bg-white text-teal-700 font-medium py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Découvrir comment aider
          </Link>
        </div>
      </section>
      <section className="container mx-auto py-12 px-6 bg-teal-50">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            L'Océan et le Corps Humain : Une Ressemblance Surprenante
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Saviez-vous que l'Océan et le corps humain partagent bien plus de
            points communs que vous ne l'imaginez ? Entre la régulation du
            climat et celle de votre température corporelle, tout est une
            question d'équilibre... mais parfois avec une petite touche
            d'humour. 🐠❤️
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Parallel 1: The Heart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                💓 Le Cœur
              </h3>
              <p className="text-gray-700">
                Les courants marins agissent comme le système circulatoire de la
                Terre, transportant chaleur, nutriments, et oxygène à travers le
                globe. Imaginez un cœur qui pompe de l’eau salée au lieu de
                sang. Pas très pratique, mais efficace pour notre planète !
              </p>
            </div>

            {/* Parallel 2: The Lungs */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                🌬️ Les Poumons
              </h3>
              <p className="text-gray-700">
                Le phytoplancton joue le rôle de poumons pour notre planète en
                produisant plus de 50 % de l'oxygène. Alors, avant de remercier
                un arbre pour votre souffle, dites "merci, plancton" aussi. 🌿🐟
              </p>
            </div>

            {/* Parallel 3: The Skin */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                🧴 La Peau
              </h3>
              <p className="text-gray-700">
                La salinité de l’eau agit comme la barrière protectrice de
                l’Océan, tout comme votre peau protège votre corps. Petit bonus
                : l’Océan n’a pas besoin de crème solaire... enfin, sauf contre
                la pollution. 🌞
              </p>
            </div>

            {/* Parallel 4: The Liver */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">
                🩺 Le Foie
              </h3>
              <p className="text-gray-700">
                L’Océan joue un rôle crucial dans le stockage du carbone, un peu
                comme le foie nettoie les toxines de votre corps. Mais
                attention, tout foie a ses limites ! ♻️🌊
              </p>
            </div>
          </div>
        </div>
        {/* Chatbot Button */}
        <Chatbot />

        <div className="text-center mt-12">
          <Link
            href="/explore-parallels"
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Explorer plus de parallèles
          </Link>
        </div>
      </section>
    </div>
  );
}
