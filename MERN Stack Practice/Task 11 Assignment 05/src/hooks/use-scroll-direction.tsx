import { React,
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

type ScrollDirection = "up" | "down" | null;

const ScrollContext = createContext<ScrollDirection>(null);

// Custom hook to detect scroll direction
function useScrollDirection(): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      } else if (currentScrollY <= 100) {
        setScrollDirection(null);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return scrollDirection;
}

// Provider component
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const scrollDirection = useScrollDirection();

  return (
    <ScrollContext.Provider value={scrollDirection}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use scroll direction in components
export const useScrollContext = () => useContext(ScrollContext);
