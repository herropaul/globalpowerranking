"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { AnimatedBlob } from "@/components/AnimatedBlob";
import { DotWave } from "@uiball/loaders";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns";
import { sortByKey } from "@/utils/sortByArray";
import { updateTeamData } from "@/utils/teamDataByTourney";
import tourneys from "../../../../tourneys.json";
import teams from "../../../../globalRankings.json";
import { TourneysType } from "@/types/tourneys";

export default function TournamentRankings({ params }: any) {
  const [isClient, setIsClient] = useState<boolean>(false);

  const tournament = Object.values(tourneys).find(
    (t) => t.tournament_id === params.tournamentID
  );

  const tournamentName = tournament
    ? Object.keys(tourneys as TourneysType).find(
        (key) =>
          (tourneys as TourneysType)[key].tournament_id === params.tournamentID
      ) || ""
    : "";

  const tournamentRegion = tournament ? tournament.region : "";

  let data: any[] = [];
  if (typeof params.tournamentID === "string") {
    data = updateTeamData(params.tournamentID, tourneys, teams);
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen w-full relative z-0 overflow-hidden"
      style={{ backgroundColor: "#011562" }}
    >
      <div className="flex items-center justify-center mt-20 w-full ">
        <h1 className="font-bold text-4xl md:text-7xl text-center mb-5 font-molend-regular">
          Tournament Rankings: {tournamentName} - {tournamentRegion}
        </h1>
      </div>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={sortByKey(data, "ranking")} />
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
