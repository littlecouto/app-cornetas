import Table from "@/components/Table";
import Rounds from "@/components/Rounds";
import { useSimulator } from "@/context/simulator/hooks";
import { useState } from "react";
import { LeagueStage } from "@/types";

export function Paulista2026Format() {
  const { league } = useSimulator();

  const [stage, setStage] = useState<LeagueStage>("groups");

  return (
    <div className="paulista-2026-format">
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
        <></>
      ) : (
        <></>
      )}
    </div>
  );
}
