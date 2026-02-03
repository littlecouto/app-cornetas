import { useMemo } from "react";
import { useSimulator } from "@/context/simulator/hooks";
import useMediaQuery from "@/utils/useMediaQuery";
import { MobileTable } from "./mobile/MobileTable";
import { DesktopTable } from "./desktop/DesktopTable";
import { TableRow } from "@/types";

function Table() {
  const { results, league } = useSimulator();

  const isMobile = useMediaQuery((width) => width <= 700);

  const table: TableRow[] = useMemo(() => {
    const rows = results.map((row) => {
      const points = row.wins * 3 + row.draws + row.points;
      const goalsDiff = row.goals - row.goalsAgainst;
      const winRate = Math.floor((points / (row.matches * 3)) * 100);

      return {
        ...row,
        points,
        goalsDiff,
        winRate,
        color: "gray",
      };
    });
    rows.sort((a, b): number => {
      if (a.points < b.points) {
        return 10;
      }
      if (a.points > b.points) {
        return -10;
      }

      if (a.wins < b.wins) {
        return 9;
      }
      if (a.wins > b.wins) {
        return -9;
      }

      if (a.goalsDiff < b.goalsDiff) {
        return 8;
      }
      if (a.goalsDiff > b.goalsDiff) {
        return -8;
      }

      if (a.goals < b.goals) {
        return 7;
      }
      if (a.goals > b.goals) {
        return -7;
      }

      return 0;
    });

    if (league.format === "paulista-2026") {
      rows.slice(0, 8).map((item) => {
        item.color = "green";
      });
      rows.slice(-2).map((item) => {
        item.color = "red";
      });
    } else if (league.format === "league") {
      rows.slice(0, 4).map((item) => {
        item.color = "green";
      });
      rows[4].color = "blue";
      rows.slice(5, 13).map((item) => {
        item.color = "orange";
      });
      rows.slice(-4).map((item) => {
        item.color = "red";
      });
    }

    return rows;
  }, [results]);

  return isMobile ? (
    <MobileTable table={table} />
  ) : (
    <DesktopTable table={table} />
  );
}

export default Table;
