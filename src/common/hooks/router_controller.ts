import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useRouterController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setIsLoading(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setIsLoading(false);
  }, [prevLoc]);

  useEffect(() => {
    console.log("estado", isLoading);
  }, [isLoading]);

  return { isLoading };
};
