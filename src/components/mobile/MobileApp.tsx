import Table from "@/components/Table";
import Rounds from "@/components/Rounds";

function MobileApp() {
  return (
    <div className="container">
      <section className="table-section">
        <h2>Tabela</h2>
        <Table />
      </section>

      <aside className="rounds-aside">
        <h2>Jogos</h2>
        <Rounds />
      </aside>
    </div>
  );
}

export default MobileApp;
