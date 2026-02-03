import { createContext } from "react";
import { SimulatorContextType } from "./types";

export const SimulatorContext = createContext<SimulatorContextType | undefined>(
  undefined,
);
