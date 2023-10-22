export type TourneysType = {
  [key: string]: {
    tournament_id: string;
    region: string;
    teams: {
      [team_id: string]: {
        name: string;
        winrate: number;
        winfrac: string;
      };
    };
  };
};
