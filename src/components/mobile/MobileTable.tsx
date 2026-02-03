import { TableRow } from "@/types";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

type MobileTableProps = {
  table: TableRow[];
};

export function MobileTable(props: MobileTableProps) {
  return (
    <div className="results-table">
      <div className="dual-table">
        <div className="header-table">
          <Table>
            <TableHeader>
              <tr>
                <th className="table-cell-position">&nbsp;</th>
                <th className="table-cell-team">&nbsp;</th>
                <th>P</th>
              </tr>
            </TableHeader>

            <TableBody>
              {props.table.map((result, index) => (
                <tr key={result.team.id}>
                  <td
                    className={`table-cell-position text-${result.color || "gray"}-500`}
                  >
                    {index + 1}°
                  </td>
                  <td className="table-cell-team">
                    <div className="table-cell-team-image">
                      <img src={result.team.image} alt={result.team.name} />
                      <span>{result.team.abbr}</span>
                    </div>
                  </td>
                  <td>{result.points}</td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="content-table">
          <table>
            <thead>
              <tr>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>GP</th>
                <th>GC</th>
                <th>SG</th>
                <th>%</th>
              </tr>
            </thead>

            <tbody>
              {props.table.map((result) => (
                <tr key={result.team.id}>
                  <td>{result.matches}</td>
                  <td>{result.wins}</td>
                  <td>{result.draws}</td>
                  <td>{result.losses}</td>
                  <td>{result.goals}</td>
                  <td>{result.goalsAgainst}</td>
                  <td>{result.goalsDiff}</td>
                  <td>{result.winRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
