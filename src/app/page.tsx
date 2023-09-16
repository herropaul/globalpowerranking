"use client";
import { AnimatedBlob } from "./components/AnimatedBlob";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col">
      <nav className="flex space-x-4 mb-4 w-full items-start relative">
        <button className="font-bold py-2 px-4 rounded">Tournaments</button>
        <button className="font-bold py-2 px-4 rounded">Team Rankings</button>
        <button className="font-bold py-2 px-4 rounded">Global Rankings</button>
      </nav>
      {isClient ? (
        <div className="flex flex-col items-center justify-center min-h-screen relative w-full">
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
          <div className=" relative">
            <h1 className=" text-8xl font-bold mb-4 text-center">
              Global Power Ranking
            </h1>
            <h2 className="text-3xl font-semibold mb-2 text-center">
              Predictions for LoL esports teams
            </h2>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
