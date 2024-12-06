"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";

const data = [
  {
    title: "Cerveau",
    oceanComponent: "Profondeurs de l'océan",
    description:
      "Le cerveau humain, tout comme les profondeurs océaniques, recèle des mystères fascinants et des secrets encore inexplorés.",
    image: "/explorer/brain.jpg",
  },
  {
    title: "Cœur",
    oceanComponent: "Courants océaniques",
    description:
      "Le cœur humain et les courants marins assurent la circulation essentielle à la vie, en transportant énergie et nutriments.",
    image: "/explorer/heart.jpg",
  },
  {
    title: "Poumons",
    oceanComponent: "Surface de l'océan",
    description:
      "Les poumons et la surface des océans échangent des gaz vitaux, tels que l'oxygène et le dioxyde de carbone, pour maintenir l'équilibre de la vie.",
    image: "/explorer/lungs.jpg",
  },
  {
    title: "Peau",
    oceanComponent: "Surface de l'océan",
    description:
      "La peau et la surface des océans agissent comme des barrières protectrices, régulant les échanges avec l'environnement extérieur.",
    image: "/explorer/skin.avif",
  },
  {
    title: "Os",
    oceanComponent: "Fond de l'océan",
    description:
      "Les os et le fond des océans fournissent une structure et un soutien indispensables à leurs écosystèmes respectifs.",
    image: "/explorer/Os7.jpg",
  },
  {
    title: "Vaisseaux sanguins",
    oceanComponent: "Courants océaniques",
    description:
      "Les vaisseaux sanguins et les courants océaniques transportent des substances vitales à travers leurs réseaux complexes.",
    image: "/explorer/vs.jpg",
  },
];

export default function Explorer() {
  const [selectedOrgan, setSelectedOrgan] = useState(data[0]);

  const handleCardClick = (item: any) => {
    setSelectedOrgan(item);

    setTimeout(() => {
      const mainImageElement = document.getElementById("mainImage");
      if (mainImageElement) {
        mainImageElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn("Element with ID 'mainImage' not found.");
      }
    }, 100); // Petite pause pour garantir la mise à jour avant le scroll
  };

  return (
    <div className="px-4 py-2 flex flex-col bg-gradient-to-b from-teal-50 to-cyan-100 min-h-screen">
      <motion.div
        className="flex flex-col md:flex-row items-center p-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Vidéo Corps Humain */}
        <div className="relative flex justify-center items-center md:w-1/3">
          <video
            src="/explorer/human.mp4"
            width="250"
            height="400"
            className="rounded-lg transform -translate-y-4 mb-40"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Contenu Principal */}
        <div className="flex flex-col items-center md:w-2/3">
          <motion.div
            id="mainImage" // ID pour cibler l'image
            className="flex justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={selectedOrgan.image}
              alt={`Image de ${selectedOrgan.title}`}
              width={300}
              height={300}
              className="rounded-full border-4 border-teal-500 shadow-lg"
            />
          </motion.div>

          <motion.div
            className="w-full max-w-lg p-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardBody>
                <h2 className="text-2xl font-semibold mb-2">
                  {selectedOrgan.title}
                </h2>
                <p className="text-gray-600 mb-1">
                  <strong>Composant Océanique :</strong>{" "}
                  {selectedOrgan.oceanComponent}
                </p>
                <p className="text-gray-600">{selectedOrgan.description}</p>
              </CardBody>
              <CardFooter className="flex justify-end">
                <Button
                  onPress={() =>
                    alert(`En savoir plus sur ${selectedOrgan.title}`)
                  }
                  className="bg-teal-600 text-white px-4 py-2 hover:bg-teal-700 rounded-full"
                >
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleCardClick(item)}
                className={`border rounded-lg shadow-lg p-4 bg-white flex flex-col cursor-pointer ${
                  selectedOrgan.title === item.title ? "border-teal-700" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.oceanComponent}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      {/* Section À propos avec image et contenu */}
      <div className="mt-12 p-8 bg-gradient-to-r from-teal-50 to-cyan-50 shadow-lg rounded-lg max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image de l'océan */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/explorer/ocean.jpg"
            alt="Océan"
            width={600}
            height={400}
            className="rounded-lg shadow-md border border-gray-200"
          />
        </motion.div>

        {/* Contenu À propos */}
        <motion.div
          className="w-full md:w-1/2 p-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-teal-700">
            À propos du projet
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Ce projet explore les analogies fascinantes entre le corps humain et
            les composantes essentielles des océans. En combinant des visuels
            dynamiques et des descriptions détaillées, nous cherchons à
            illustrer les liens profonds entre ces deux mondes apparemment
            distincts mais interdépendants.
          </p>
          <Button
            onPress={() => alert("Merci de votre intérêt pour ce projet !")}
            className="bg-teal-600 text-white px-6 py-3 hover:bg-teal-700 rounded-full"
          >
            Découvrir davantage
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
