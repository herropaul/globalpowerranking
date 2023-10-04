"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { AnimatedBlob } from "@/components/AnimatedBlob";
import ComboBox from "@/components/ComboBox";
import React, { useState, useEffect } from "react";

export default function Tournaments() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div
      className="flex flex-col min-h-screen w-full relative z-0 overflow-hidden"
      style={{ backgroundColor: "#011562" }}
    >
      <Head>
        <title>Tournaments</title>
      </Head>

      <Navbar />

      <div className="flex flex-col items-center justify-center my-auto w-full ">
        <h1 className=" font-bold text-4xl md:text-7xl text-center mb-5">
          Tournament Ranking Search
        </h1>
        <ComboBox />
      </div>

      {isClient ? (
        <div className="items-center justify-center">
          <AnimatedBlob
            radius={200}
            duration={20}
            top={0}
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
        <div></div>
      )}
    </div>
  );
}
