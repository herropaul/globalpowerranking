export type TeamType = {
  id: string;
  ranking: number;
  name: string;
  teamLogoURL: string;
  winrate: number;
  winfrac: string;
  score: number;
  league_name?: string;
  region?: string;
  acronym?: string;
};