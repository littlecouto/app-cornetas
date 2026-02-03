import type { Match } from "@/types";
import { useMemo } from "react";
import { useSimulator } from "@/context/simulator/hooks";
import DynamicMatch from "./DynamicMatch";

type MatchProps = {
  match: Match;
};

function Match(props: MatchProps) {
  const { match } = props;
  const { teams } = useSimulator();

  const homeTeam = useMemo(
    () => teams.find((team) => team.id === match.homeId)!,
    [match.homeId, teams],
  );
  const awayTeam = useMemo(
    () => teams.find((team) => team.id === match.awayId)!,
    [match.awayId, teams],
  );

  return (
    <div className="match-row">
      <label
        htmlFor={`match-${match.id}-home-input`}
        className="match-row-home"
      >
        <span>{homeTeam.name}</span>
        <img
          src={homeTeam.image}
          alt={homeTeam.name}
          className="match-row-img"
        />
      </label>
      <div className="match-row-score">
        {match.started ? (
          <>
            <span className="match-row-score-goal match-row-score-home-goal">
              {match.homeGoal}
            </span>
            <span className="match-row-score-x">x</span>
            <span className="match-row-score-goal match-row-score-away-goal">
              {match.awayGoal}
            </span>
          </>
        ) : (
          <DynamicMatch matchId={match.id} />
        )}
      </div>
      <label
        htmlFor={`match-${match.id}-away-input`}
        className="match-row-away"
      >
        <img
          src={awayTeam.image}
          alt={awayTeam.name}
          className="match-row-img"
        />
        <span>{awayTeam.name}</span>
      </label>
    </div>
  );
}

export default Match;
