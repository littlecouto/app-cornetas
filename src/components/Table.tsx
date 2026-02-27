import useMediaQuery from "@/utils/useMediaQuery";
import { MobileTable } from "./mobile/MobileTable";
import { DesktopTable } from "./desktop/DesktopTable";

function Table() {
  const isMobile = useMediaQuery((width) => width <= 700);

  return isMobile ? <MobileTable /> : <DesktopTable />;
}

export default Table;
