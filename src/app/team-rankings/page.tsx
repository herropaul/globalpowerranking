"use client";
import Head from "next/head";
import { AnimatedBlob } from "@/components/AnimatedBlob";
import React, { useState, useEffect } from "react";
import { DotWave } from "@uiball/loaders";
import teamData from "../../../globalRankings.json";
import { useRouter } from "next/navigation";
import ComboBox from "./TeamComboBox";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";
import { TeamType } from "@/types/teams";

export default function TeamRankings() {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [selectedTeams, setSelectedTeams] = useState<TeamType[]>([]);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen w-full relative z-0 overflow-hidden"
      style={{ backgroundColor: "#011562" }}
    >
      <Head>
        <title>Team Ranking</title>
      </Head>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center my-auto w-full ">
        <div className="flex flex-col items-center w-full" style={{}}>
          {/* Static Part: Title and ComboBox will remain stationary */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <h1 className="font-bold text-4xl md:text-7xl text-center mb-5 font-molend-regular">
              Team Ranking Search
            </h1>
            <form className="flex flex-row w-72 sm:w-5/6 justify-center">
              <ComboBox dataset={teamData} onTeamSelected={setSelectedTeams} />
            </form>
          </div>

          {/* Scrollable Part: DataTable will be scrollable */}
          {selectedTeams.length > 0 && (
            <div
              className="mt-5 w-5/6"
              style={{
                overflowY: "auto",
                maxHeight: "400px",
              }}
            >
              {/* Adjust the '<height-of-static-part>' in the inline style to the height of your title and form */}
              <DataTable
                data={selectedTeams}
                columns={columns}
                filter={false}
              />
            </div>
          )}
        </div>
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
