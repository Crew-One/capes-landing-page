import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2">
          <ModeToggle />
          <Button
            onClick={goToTop}
            className="opacity-90 shadow-md"
            size="icon"
          >
            <ArrowUpToLine className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
};
