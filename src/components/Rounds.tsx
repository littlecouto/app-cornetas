import { useSimulator } from "@/context/simulator/hooks";
import Match from "./Match";
import Arrow from "./Arrow";

function Rounds() {
  const { round, rounds, roundMatches, backRound, nextRound } = useSimulator();

  return (
    <div className="rounds-container">
      <div className="rounds-header">
        <Arrow
          left
          disabled={round <= 1}
          className="rounds-navigation rounds-navigation-back"
          onClick={backRound}
        />
        <span className="rounds-navigation-current">{round}ª rodada</span>

        <Arrow
          disabled={round >= rounds}
          className="rounds-navigation rounds-navigation-next"
          onClick={nextRound}
        />
      </div>
      <div className="rounds-content">
        {roundMatches.map((roundMatch) => (
          <Match match={roundMatch} key={roundMatch.id} />
        ))}
      </div>
    </div>
  );
}

export default Rounds;
