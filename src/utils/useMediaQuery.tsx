import { useEffect, useState } from "react";

type QueryCheck = (width: number, height?: number) => boolean;

export default function useMediaQuery(query: QueryCheck) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(query(window.innerWidth, window.innerHeight));
    };

    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [query]);

  return isMobile;
}
