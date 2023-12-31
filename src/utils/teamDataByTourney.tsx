import { TeamType } from "@/types/teams";
import { TourneysType } from "@/types/tourneys";

export const updateTeamData = (
  tournament_id: string,
  tourneys: TourneysType,
  teams: TeamType[]
): TeamType[] => {
  // Get the specific tournament based on the given tournament_id
  const tournament = Object.values(tourneys).find(
    (t) => t.tournament_id === tournament_id
  );
  // Create a new updated teams array
  const updatedTeams = teams
    .map((team: any) => {
      if (!tournament) return null; // Return null if no tournament was found
      const tournamentTeam = tournament.teams[team.id];
      console.log("Checking team ID:", team.id);
      console.log("Matched tournament team:", tournamentTeam);

      if (tournamentTeam) {
        // Update the winrate and winfrac for this team based on the tournament data
        const winratePercent = parseFloat((tournamentTeam.winrate * 100).toFixed(2))
        return {
          ...team,
          winrate: winratePercent,
          winfrac: tournamentTeam.winfrac,
        };
      }
      return null;
    })
    .filter((team) => team !== null) as TeamType[]; // Only retain non-null teams (i.e., updated teams)

  // Sort the updated teams based on winrate in descending order
  updatedTeams.sort((a, b) => b.winrate - a.winrate);
  // Assign rankings starting from 1
  updatedTeams.forEach((team, index) => {
    team.ranking = index + 1;
  });

  return updatedTeams;
};
