import type {
  League,
  Match,
  SimulatorMatch,
  TableResults,
  Team,
} from "@/types";

export type SimulatorContextType = {
  rounds: number;
  round: number;
  roundMatches: Match[];

  league: League;

  teams: Team[];
  results: TableResults[];

  simulator: SimulatorMatch[];
  matchSimulate: (matchId: number, homeGoal: string, awayGoal: string) => void;

  nextRound: () => void;
  backRound: () => void;
};
