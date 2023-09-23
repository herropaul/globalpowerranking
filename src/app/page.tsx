"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const imageStyle = {
  opacity: 0.9,
};

const images = [
  "/lec_season_finals_2023.jpg",
  "/lec_summer_final_2022.jpg",
  "/lec_summer_semi_2022.jpg",
  "/lol_2015_worlds.jpeg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col overflow-hidden relative">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          //src={images[current]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            opacity: { duration: 1, ease: "easeInOut" },
            scale: { duration: 1, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <Image src={images[current]} alt="Image" fill priority />
        </motion.div>
      </AnimatePresence>
      {/* Navbar */}
      <nav
        className="flex space-x-4 my-4 mx-10 w-full items-start"
        style={{ zIndex: 1 }}
      >
        <Link href="/">
          <Image src="/homeicon.svg" alt="Home Icon" width={30} height={35} />
        </Link>
        <button className="font-bold py-2 px-4 rounded">Tournaments</button>
        <button className="font-bold py-2 px-4 rounded">Team Rankings</button>
        <button className="font-bold py-2 px-4 rounded">Global Rankings</button>
      </nav>

      {/* Text */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <h1
          className=" text-8xl font-bold mb-4 text-center"
          style={{ zIndex: 1 }}
        >
          Global Power Ranking
        </h1>
        <h2
          className="text-3xl font-semibold mb-2 text-center"
          style={{ zIndex: 1 }}
        >
          Predictions for LoL esports teams
        </h2>
      </div>
    </div>
  );
}
