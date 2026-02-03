import { useCallback, useMemo } from "react";
import { useSimulator } from "@/context/simulator/hooks";

type DynamicMatchProps = {
  matchId: number;
};

function DynamicMatch(props: DynamicMatchProps) {
  const { matchId } = props;
  const { simulator, matchSimulate } = useSimulator();

  const match = useMemo(() => {
    const match = simulator.find(
      (simulatorMatch) => simulatorMatch.matchId === matchId,
    );
    if (!match) {
      return {
        matchId,
        homeGoal: "",
        awayGoal: "",
      };
    }
    return match;
  }, [matchId, simulator]);

  const setHomeGoal = useCallback(
    (homeGoal: string) => {
      matchSimulate(matchId, homeGoal, match.awayGoal);
    },
    [match.awayGoal, matchId, matchSimulate],
  );

  const setAwayGoal = useCallback(
    (awayGoal: string) => {
      matchSimulate(matchId, match.homeGoal, awayGoal);
    },
    [match.homeGoal, matchId, matchSimulate],
  );

  return (
    <>
      <input
        id={`match-${matchId}-home-input`}
        className="match-row-score-input"
        value={match.homeGoal}
        onChange={(e) => {
          const nativeEvent = e.nativeEvent as InputEvent;
          const value = nativeEvent.data || "";
          setHomeGoal(value);
        }}
      />
      <span className="match-row-score-x">x</span>
      <input
        id={`match-${matchId}-away-input`}
        className="match-row-score-input"
        value={match.awayGoal}
        onChange={(e) => {
          const nativeEvent = e.nativeEvent as InputEvent;
          const value = nativeEvent.data || "";
          setAwayGoal(value);
        }}
      />
    </>
  );
}

export default DynamicMatch;
