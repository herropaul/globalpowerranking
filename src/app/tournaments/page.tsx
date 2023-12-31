"use client";
import Head from "next/head";
import { AnimatedBlob } from "@/components/AnimatedBlob";
import ComboBox from "@/app/tournaments/TournamentComboBox";
import React, { useState, useEffect } from "react";
import { DotWave } from "@uiball/loaders";
import tourneyData from "../../../tourneys.json";
import { useRouter } from "next/navigation";

export default function Tournaments() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [selectedTournament, setSelectedTournament] = useState<string | null>(
    ""
  );
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent the default form submission.
    if (selectedTournament) {
      router.push(`/tournaments/${selectedTournament}`);
    }
  };
  return (
    <div
      className="flex flex-col min-h-screen w-full relative z-0 overflow-hidden"
      style={{ backgroundColor: "#011562" }}
    >
      <Head>
        <title>Tournaments</title>
      </Head>

      <div className="flex flex-col items-center justify-center my-auto w-full ">
        <h1 className="font-bold text-4xl md:text-7xl text-center mb-5 font-molend-regular">
          Tournament Ranking Search
        </h1>
        <form
          className="flex flex-row w-72 sm:w-5/6 justify-center"
          onSubmit={handleSubmit}
        >
          <ComboBox
            dataset={tourneyData}
            onTournamentSelected={setSelectedTournament}
          />
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
