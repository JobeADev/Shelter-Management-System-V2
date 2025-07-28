import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return null;
}
