import Table from "@/components/Table";
import Rounds from "@/components/Rounds";
import { useSimulator } from "@/context/simulator/hooks";

export function LeagueFormat() {
  const { league } = useSimulator();

  return (
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
  );
}
