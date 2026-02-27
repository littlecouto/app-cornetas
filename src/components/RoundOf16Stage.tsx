import { useSimulator } from "@/context/simulator/hooks";
import { useMemo } from "react";
import Match from "@/components/Match";

export default function RoundOf16Stage() {
  const { table } = useSimulator();

  const teams = useMemo(() => table.slice(0, 8), [table]);

  const fixtures = useMemo(() => {
    const fixtures: Match[] = [];

    const fixturesCount = Math.ceil(teams.length / 2);

    for (let i = 0; i < fixturesCount; i++) {
      const homeTeam = teams[i];
      const awayTeam = teams[teams.length - i - 1];

      fixtures.push({
        awayGoal: 0,
        homeGoal: 0,
        started: false,
        id: Date.now() + i,
        homeId: homeTeam.team.id,
        awayId: awayTeam.team.id,
        round: 1,
        stage: "",
        datetime: "",
        stadium: "",
        time: "",
      });
    }

    return fixtures;
  }, [teams]);

  console.log(fixtures);

  return (
    <>
      {fixtures.map((roundMatch) => (
        <Match match={roundMatch} key={roundMatch.id} />
      ))}
    </>
  );
}
