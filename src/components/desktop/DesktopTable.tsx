import useMediaQuery from "@/utils/useMediaQuery";
import { useSimulator } from "@/context/simulator/hooks";
import { ReactNode } from "react";

type TablePositionProps = {
  children: ReactNode;
  color: string;
};

function TablePosition(props: TablePositionProps) {
  const colorVariants: { [key: string]: string } = {
    blue: "text-blue-500",
    red: "text-red-500",
    orange: "text-orange-500",
    green: "text-green-500",
    gray: "text-gray-500",
  };

  return (
    <td className={`table-cell-position ${colorVariants[props.color]}`}>
      {props.children}
    </td>
  );
}

export function DesktopTable() {
  const isMobile = useMediaQuery((width) => width <= 950);
  const { table } = useSimulator();

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
          {table.map((result, index) => (
            <tr key={result.team.id}>
              <TablePosition color={result.color || "gray"}>
                {index + 1}°
              </TablePosition>
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
