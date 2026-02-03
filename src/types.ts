export type Team = {
  id: number;
  name: string;
  abbr: string;
  image: string;
};

export type Match = {
  id: number;
  homeId: number;
  awayId: number;
  datetime: string;
  time?: string;

  stage: string;
  homeGoal: number;
  awayGoal: number;

  stadium?: string;
  started: boolean;
  simulated?: boolean;
  round: number;
};

export type League = {
  id: number;
  name: string;
  abbr: string;
  format: "paulista-2026" | "league" | "cup";
};

export type LeagueStage =
  | "groups"
  | "unique"
  | "round-of-16"
  | "round-of-8"
  | "semifinals"
  | "final";

export type TableResults = {
  team: Team;
  points: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goals: number;
  goalsAgainst: number;
  goalsDiff: number;
  winRate: number;
};

export type SimulatorMatch = {
  matchId: number;
  homeGoal: string;
  awayGoal: string;
};

export type TableRow = {
  color?: string;
  team: Team;
  points: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goals: number;
  goalsAgainst: number;
  goalsDiff: number;
  winRate: number;
};
