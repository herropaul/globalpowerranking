"use client";
import Image from "next/image";
import { AnimatedBlob } from "@/components/AnimatedBlob";
import { DotWave } from "@uiball/loaders";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { teamInfo } from "@/constants";
import ReactPlayer from "react-player";
import TeamMembers from "@/components/TeamMembers";

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
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
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
            className="text-7xl font-bold mb-4 font-molend-regular"
            style={{ zIndex: 1 }}
          >
            Global Power Ranking
          </h1>
          <h2
            className="text-2xl font-semibold font-molend-regular"
            style={{ zIndex: 1 }}
          >
            Predictions for LoL esports teams
          </h2>
        </div>
      </div>

      <section
        className="relative z-0 overflow-hidden"
        style={{ backgroundColor: "#011562" }}
      >
        <div className="padding-x padding-y max-width">
          {isClient ? (
            <div className="items-center justify-center">
              <AnimatedBlob
                radius={200}
                duration={20}
                top={800}
                left={0}
                borderRadius="28% 72% 79% 21% / 21% 40% 60% 79%"
                backgroundColor="#B99D76"
                clockwise={true}
              />
              <AnimatedBlob
                radius={200}
                duration={20}
                top={0}
                left={window.innerWidth - 384}
                borderRadius="61% 39% 19% 81% / 72% 40% 60% 28%"
                backgroundColor="#0080DA"
                clockwise={false}
              />
              <AnimatedBlob
                radius={200}
                duration={20}
                top={window.innerHeight - 384}
                left={0}
                borderRadius="61% 39% 19% 81% / 29% 88% 12% 71%"
                backgroundColor="#00218A"
                clockwise={false}
              />
              <AnimatedBlob
                radius={200}
                duration={20}
                top={window.innerHeight - 384}
                left={window.innerWidth - 384}
                borderRadius="29% 71% 19% 81% / 47% 20% 80% 53%"
                backgroundColor="#7391AF"
                clockwise={true}
              />
            </div>
          ) : (
            <>
              <DotWave size={47} speed={1} color="white" />
            </>
          )}
          <div className="flex flex-col">
            <section id="overview-section">
              <h2 className="text-5xl py-3">Overview</h2>
              <div className=" text-2xl py-3">
                <p>
                  Welcome to Heimer&apos;s Hackers Power Ranking, the entry for
                  the Global Power Ranking Hackathon. Our web-app offers users
                  an engaging experience, providing insights and predictions
                  related to League of Legends Global Teams/Tournaments. We have
                  created these predictions through the usage of open data
                  provided to us by Riot, containing information from 2020 to
                  2023.
                </p>
              </div>
            </section>
            <h2 className="text-5xl py-3">Demo</h2>
            <div className="mt-6 flex justify-center">
              <ReactPlayer
                url="https://youtu.be/7R6PkTOicTk"
                width={1280}
                height={720}
                controls={true}
              />
            </div>
            <div>
              <h2 className="text-5xl py-3">Prediction Model</h2>
              <div className=" text-2xl py-3">
                <p>
                  Want an in-depth explanation on how we ranked these teams?
                  <br />
                  <a
                    href="https://drive.google.com/file/d/13BKKiCPewnowDDfRtawRN-h89_EXSnhh/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500 hover:text-blue-800"
                  >
                    Read the paper here.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <h2 className="flex text-5xl py-6">Team Members</h2>
            <TeamMembers teamInfo={teamInfo} />
          </div>
        </div>
      </section>
    </main>
  );
}
