import { TourneysType } from "@/types/tourneys";

type TeamData = {
  name: string;
  id: string;
  score: number;
  winfrac: string;
  ranking: number;
  teamLogoURL: string;
  acronym: string;
  winrate: number;
  league_name: string;
  region: string;
}[];

export const updateTeamData = (
  tournament_id: string,
  tourneys: TourneysType,
  teams: TeamData
): TeamData => {
  // Get the specific tournament based on the given tournament_id
  const tournament = Object.values(tourneys).find(
    (t) => t.tournament_id === tournament_id
  );
  // Create a new updated teams array
  const updatedTeams = teams
    .map((team) => {
      if (!tournament) return null; // Return null if no tournament was found
      const tournamentTeam = tournament.teams[team.id];
      if (tournamentTeam) {
        // Update the winrate and winfrac for this team based on the tournament data
        return {
          ...team,
          winrate: tournamentTeam.winrate,
          winfrac: tournamentTeam.winfrac,
        };
      }
      return null;
    })
    .filter((team) => team !== null) as TeamData; // Only retain non-null teams (i.e., updated teams)

  // Sort the updated teams based on winrate in descending order
  updatedTeams.sort((a, b) => b.winrate - a.winrate);
  // Assign rankings starting from 1
  updatedTeams.forEach((team, index) => {
    team.ranking = index + 1;
  });

  return updatedTeams;
};
