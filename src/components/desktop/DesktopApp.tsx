"use client";

import { useSimulator } from "@/context/simulator/hooks";
import { LeagueFormat } from "@/components/LeagueFormat";
import { Paulista2026Format } from "@/components/Paulista2026Format";

function DesktopApp() {
  const { league } = useSimulator();
  return (
    <div className="container">
      {league.format === "league" ? (
        <LeagueFormat />
      ) : league.format === "paulista-2026" ? (
        <Paulista2026Format />
      ) : (
        <></>
      )}
    </div>
  );
}

export default DesktopApp;
