import { SimulatorProvider } from "@/context/simulator/provider";
import DesktopApp from "@/components/desktop/DesktopApp";
import { data } from "@/data/2026/brasileiro/serie-a";

export default function BrasileiraoPage() {
  return (
    <SimulatorProvider data={data}>
      <DesktopApp />
    </SimulatorProvider>
  );
}
