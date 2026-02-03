import { useContext } from "react";
import { SimulatorContext } from "./context";

export function useSimulator() {
  const context = useContext(SimulatorContext);
  if (!context) {
    throw new Error("Context must be inside a Provider");
  }

  return context;
}
