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
    <main className="overflow-hidden">
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
            <Image
              src={images[current]}
              alt="Image"
              fill
              priority
              placeholder="blur"
              blurDataURL="true"
              quality={50}
            />
          </motion.div>
        </AnimatePresence>

        {/* Text */}
        <div className="flex flex-col text-center justify-center min-h-screen w-full">
          <h1
            className="text-7xl font-bold mb-4"
            style={{ zIndex: 1 }}
          >
            Global Power Ranking
          </h1>
          <h2
            className="text-2xl font-semibold"
            style={{ zIndex: 1 }}
          >
            Predictions for LoL esports teams
          </h2>
        </div>
      </div>

      <div className="mt-12 padding-x padding-y max-width">
        <div className="demo__text-container">
          <h1 className="text-4xl font-mark-medium">
              Demo
          </h1>
        </div>
        <div className="demo__text-container">
          <h1 className="text-4xl font-mark-medium">
            Methodology
          </h1>
        </div>
      </div>    
    </main>
  );
}
