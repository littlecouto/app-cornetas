import { TableRow } from "@/types";
import useMediaQuery from "@/utils/useMediaQuery";

type DesktopTableProps = {
  table: TableRow[];
};

export function DesktopTable(props: DesktopTableProps) {
  const isMobile = useMediaQuery((width) => width <= 950);
  return (
    <div className="results-table">
      <table>
        <thead>
          <tr>
            <th className="table-cell-position">&nbsp;</th>
            <th className="table-cell-team">&nbsp;</th>
            <th>P</th>
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
          {props.table.map((result, index) => (
            <tr key={result.team.id}>
              <td
                className={`table-cell-position text-${result.color || "gray"}-500`}
              >
                {index + 1}°
              </td>
              <td className="table-cell-team">
                {isMobile ? (
                  <div className="table-cell-team-image">
                    <img src={result.team.image} alt={result.team.name} />
                    <span>{result.team.abbr}</span>
                  </div>
                ) : (
                  result.team.name
                )}
              </td>
              <td>{result.points}</td>
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
  );
}
