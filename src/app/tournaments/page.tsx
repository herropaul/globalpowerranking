"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { AnimatedBlob } from "@/components/AnimatedBlob";
import ComboBox from "@/components/ComboBox";
import React, { useState, useEffect } from "react";
import { DotWave } from "@uiball/loaders";

const tournaments = [
  { id: 1, name: "2023 Worlds" },
  { id: 2, name: "2023 MSI" },
  { id: 3, name: "2022 Worlds" },
  { id: 4, name: "2022 MSI" },
  { id: 5, name: "2021 Worlds" },
  { id: 6, name: "2021 MSI" },
  { id: 7, name: "2023 EMEA Championship" },
];

export default function Tournaments() {
  const [isClient, setIsClient] = useState<boolean>(false);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   console.log(selectedItem);
  // };

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

      {/* <Navbar /> */}

      <div className="flex flex-col items-center justify-center my-auto w-full ">
        <h1 className="font-bold text-4xl md:text-7xl text-center mb-5 font-molend-regular">
          Tournament Ranking Search
        </h1>
        <form className="flex flex-row w-72 sm:w-5/6 justify-center ">
          <ComboBox dataset={tournaments} />
          <button
            //style={{ backgroundColor: "#00C8C8" }}
            className="px-2 py-2 mx-3 font-bold text-white rounded bg-teal-500 hover:bg-teal-700 "
            type="submit"
          >
            Submit
          </button>
        </form>
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
        <>
          <DotWave size={47} speed={1} color="white" />
        </>
      )}
    </div>
  );
}
