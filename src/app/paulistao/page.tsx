import { SimulatorProvider } from "@/context/simulator/provider";
import DesktopApp from "@/components/desktop/DesktopApp";
import { data } from "@/data/2026/paulista/serie-a1";

export default function PaulistaoHome() {
  return (
    <SimulatorProvider data={data}>
      <DesktopApp />
    </SimulatorProvider>
  );
}
