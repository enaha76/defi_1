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
      "Le cerveau et les profondeurs océaniques contiennent tous deux des mystères et des secrets encore inexplorés.",
    image: "/explorer/brain.jpg",
  },
  {
    title: "Cœur",
    oceanComponent: "Courants océaniques",
    description:
      "Le cœur et les courants océaniques jouent un rôle vital dans la circulation des substances essentielles à la vie.",
    image: "/explorer/heart.jpg",
  },
  {
    title: "Poumons",
    oceanComponent: "Surface de l'océan",
    description:
      "Les poumons et la surface de l'océan échangent des gaz essentiels avec l’environnement, comme l’oxygène et le dioxyde de carbone.",
    image: "/explorer/lungs.jpg",
  },
  {
    title: "Peau",
    oceanComponent: "Surface de l'océan",
    description:
      "La peau et la surface de l'océan agissent comme une interface entre l'intérieur et l'extérieur, régulant les interactions avec l’environnement.",
    image: "/explorer/skin.avif",
  },
  {
    title: "Os",
    oceanComponent: "Fond de l'océan",
    description:
      "Les os et le fond de l’océan fournissent une structure et un support essentiels à leur écosystème.",
    image: "/explorer/Os.jpg",
  },
  {
    title: "Vaisseaux sanguins",
    oceanComponent: "Courants océaniques",
    description:
      "Les vaisseaux sanguins et les courants océaniques transportent des substances vitales à travers leur réseau respectif.",
    image: "/explorer/vs.jpg",
  },
];

export default function Explorer() {
  const [selectedOrgan, setSelectedOrgan] = useState(data[0]);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Vidéo Corps Humain */}
      <div className="relative flex justify-center items-center md:w-1/3">
        <div className="relative  p-4 ">
          <video
            src="/explorer/human.mp4" // Chemin de la vidéo téléchargée
            width="250"
            height="400"
            className="rounded-lg transform -translate-y-4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="flex flex-col items-center md:w-2/3">
        {/* Image centrale */}
        <motion.div
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
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Carte d'information */}
        <motion.div
          className="w-full max-w-lg p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardBody>
              <h2 className="text-2xl font-semibold mb-2">{selectedOrgan.title}</h2>
              <p className="text-gray-600 mb-1">
                <strong>Composant Océanique :</strong> {selectedOrgan.oceanComponent}
              </p>
              <p className="text-gray-600">{selectedOrgan.description}</p>
            </CardBody>
            <CardFooter className="flex justify-end">
              <Button
                onPress={() => alert(`En savoir plus sur ${selectedOrgan.title}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                En savoir plus
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Liste des cartes */}
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
              onClick={() => setSelectedOrgan(item)}
              className={`border rounded-lg shadow-lg p-4 bg-white flex flex-col cursor-pointer ${
                selectedOrgan.title === item.title ? "border-blue-500" : ""
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
  );
}
