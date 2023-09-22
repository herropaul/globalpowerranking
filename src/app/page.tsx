"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const imageStyle = {
  opacity: 0.7,
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden relative">
      <Image
        priority={true}
        fill
        src={"/lec_season_finals_2023.jpg"}
        alt="LCS 2023"
        style={imageStyle}
      />
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
