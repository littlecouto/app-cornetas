import Table from "@/components/Table";
import Rounds from "@/components/Rounds";
import { useSimulator } from "@/context/simulator/hooks";
import { useMemo, useState } from "react";
import { LeagueStage } from "@/types";
import Arrow from "@/components/Arrow";
import RoundOf8Stage from "@/components/RoundOf16Stage";

const stages: LeagueStage[] = ["groups", "round-of-8", "semifinals", "final"];

const stageNames: string[] = [
  "Fase de grupos",
  "Quartas de final",
  "Semifinal",
  "Final",
];

export function Paulista2026Format() {
  const { league } = useSimulator();

  const [stage, setStage] = useState<LeagueStage>("groups");

  const stageIndex = useMemo(() => stages.indexOf(stage), [stage]);

  return (
    <div className="paulista-2026-format">
      <div className="stages-header">
        <Arrow
          left
          disabled={stageIndex <= 0}
          className="stages-navigation stages-navigation-back"
          onClick={() => {
            setStage(stages[stageIndex - 1]);
          }}
        />
        <span className="stages-navigation-current">
          {stageNames[stageIndex]}
        </span>

        <Arrow
          disabled={stageIndex >= stages.length - 1}
          className="stages-navigation stages-navigation-next"
          onClick={() => {
            setStage(stages[stageIndex + 1]);
          }}
        />
      </div>
      <div className="stages-content" data-stage={stage}>
        {stage === "groups" ? (
          <>
            <section className="table-section">
              <h2>{league.abbr}</h2>
              <Table />
            </section>

            <aside className="rounds-aside">
              <h2>Jogos</h2>
              <Rounds />
            </aside>
          </>
        ) : stage === "round-of-8" ? (
          <>
            <RoundOf8Stage />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
