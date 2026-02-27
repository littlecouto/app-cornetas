"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";
import {
  League,
  Match,
  SimulatorMatch,
  TableResults,
  TableRow,
  Team,
} from "@/types";
import { SimulatorContext } from "./context";
import { SimulatorContextType } from "./types";
import { MobileTable } from "@/components/mobile/MobileTable";
import { DesktopTable } from "@/components/desktop/DesktopTable";

type SimulatorProviderProps = {
  children: ReactNode;
  data: {
    teams: Team[];
    matches: Match[];
    league: League;
  };
};

export function SimulatorProvider(props: SimulatorProviderProps) {
  const [simulator, setSimulator] = useState<SimulatorMatch[]>([]);

  const rounds = useMemo(
    () =>
      props.data.matches
        .map((match) => match.round)
        .filter((value, index, array) => array.indexOf(value) === index).length,
    [],
  );

  const currentRound = useMemo(() => {
    const roundPlayed = props.data.matches.filter((match) => match.started);
    const lastRound = roundPlayed[roundPlayed.length - 1];
    return lastRound.round;
  }, []);

  const [round, setRound] = useState(currentRound);

  const teams = useMemo(() => props.data.teams, []);

  const nextRound = useCallback(() => {
    setRound((round) => Math.min(rounds, round + 1));
  }, [setRound, rounds]);

  const backRound = useCallback(() => {
    setRound((round) => Math.max(1, round - 1));
  }, [setRound]);

  const roundMatches = useMemo(() => {
    return props.data.matches.filter((row) => row.round === round);
  }, [round]);

  const results = useMemo(() => {
    return teams.map((team) => {
      const teamId = team.id;
      const teamRounds = props.data.matches.filter((round) =>
        [round.homeId, round.awayId].includes(teamId),
      );

      const teamResults: TableResults = {
        team,
        points: 0,
        matches: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goals: 0,
        goalsAgainst: 0,
        goalsDiff: 0,
        winRate: 0,
      };

      return teamRounds.reduce((results, match) => {
        const matchSimulator = simulator.find(
          (item) => item.matchId === match.id,
        );

        const { homeId } = match;

        let { homeGoal, awayGoal } = match;

        if (matchSimulator) {
          homeGoal = Number(matchSimulator.homeGoal);
          awayGoal = Number(matchSimulator.awayGoal);

          match.simulated = ![
            matchSimulator.homeGoal,
            matchSimulator.awayGoal,
          ].includes("");
        }

        if (match.started || match.simulated) {
          let goals: number, goalsAgainst: number;

          if (homeId === teamId) {
            goals = homeGoal;
            goalsAgainst = awayGoal;
          } else {
            goals = awayGoal;
            goalsAgainst = homeGoal;
          }

          const wins = goals > goalsAgainst ? 1 : 0;
          const draws = homeGoal === awayGoal ? 1 : 0;
          const losses = goals < goalsAgainst ? 1 : 0;

          return {
            ...results,
            matches: results.matches + 1,
            wins: results.wins + wins,
            draws: results.draws + draws,
            losses: results.losses + losses,
            goals: results.goals + goals,
            goalsAgainst: results.goalsAgainst + goalsAgainst,
          };
        }

        return results;
      }, teamResults);
    });
  }, [teams, simulator]);

  const table: TableRow[] = useMemo(() => {
    const rows = results.map((row) => {
      const points = row.wins * 3 + row.draws + row.points;
      const goalsDiff = row.goals - row.goalsAgainst;
      const winRate = Math.floor((points / (row.matches * 3)) * 100);

      return {
        ...row,
        points,
        goalsDiff,
        winRate,
        color: "gray",
      };
    });
    rows.sort((a, b): number => {
      if (a.points < b.points) {
        return 10;
      }
      if (a.points > b.points) {
        return -10;
      }

      if (a.wins < b.wins) {
        return 9;
      }
      if (a.wins > b.wins) {
        return -9;
      }

      if (a.goalsDiff < b.goalsDiff) {
        return 8;
      }
      if (a.goalsDiff > b.goalsDiff) {
        return -8;
      }

      if (a.goals < b.goals) {
        return 7;
      }
      if (a.goals > b.goals) {
        return -7;
      }

      return 0;
    });

    if (props.data.league.format === "paulista-2026") {
      rows.slice(0, 8).map((item) => {
        item.color = "green";
      });
      rows.slice(-2).map((item) => {
        item.color = "red";
      });
    } else if (props.data.league.format === "league") {
      rows.slice(0, 4).map((item) => {
        item.color = "green";
      });
      rows[4].color = "blue";
      rows.slice(5, 11).map((item) => {
        item.color = "orange";
      });
      rows.slice(-4).map((item) => {
        item.color = "red";
      });
    }

    return rows;
  }, [results]);

  const matchSimulate = useCallback(
    (matchId: number, homeGoal: string, awayGoal: string) => {
      let match = simulator.find((match) => match.matchId === matchId);
      if (!match) {
        match = {
          matchId,
          homeGoal: "",
          awayGoal: "",
        } as SimulatorMatch;
        simulator.push(match);
      }
      match.homeGoal = homeGoal;
      match.awayGoal = awayGoal;

      setSimulator([...simulator]);
    },
    [simulator],
  );

  const SimulatorContextState: SimulatorContextType = {
    rounds,
    round,
    roundMatches,
    teams,
    nextRound,
    backRound,
    results,
    simulator,
    matchSimulate,
    table,
    league: props.data.league,
  };

  return (
    <SimulatorContext.Provider value={SimulatorContextState}>
      {props.children}
    </SimulatorContext.Provider>
  );
}
