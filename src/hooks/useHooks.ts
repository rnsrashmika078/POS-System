import { useEffect, useState } from "react";

/**
 * useScreenSize hook is a custom hook that use to get the current screen type
 * @returns **screen size** as string
 */
function useScreenSize() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 640) {
    return "mobile";
  } else if (width > 640 && width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
}

export default useScreenSize;
